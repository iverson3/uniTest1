<template>
	<view class="content">
	<!-- 	<view class="input-group">
		    <view class="input-row border">
		        <text class="title">账号</text>
		        <input type="text" v-model="account" placeholder="请输入账号">
		    </view>
		    <view class="input-row">
		        <text class="title">密码</text>
		        <input type="text" password="true" v-model="password" placeholder="请输入密码">
		    </view>
		</view>
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view> -->
		
		<view class="btn-row">
		    <!-- #ifdef MP-WEIXIN -->
		    <button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信登录</button>
		    <!-- #endif -->
			
			<!-- #ifdef APP-PLUS -->
			<button type="primary" @click="appWxLogin()">微信登录</button>
			<!-- #endif -->
		</view>
		<!-- <view class="action-row">
		    <navigator url="../register/register">注册账号</navigator>
		    <text>|</text>
		    <navigator url="../password/password">忘记密码</navigator>
		</view> -->
	</view>
</template>

<script>
	import {mapState, mapGetters, mapMutations} from 'vuex';
	import graceChecker from '@/common/graceChecker.js'
	import formRuleConfig from '@/config/formRule.config.js'
	
	export default {
		data() {
			return {
				account: '',
				password: '',
				
				// 登录成功之后 默认跳转的地址
				redirectRoute: this.$mRoutesConfig.index,
				routeQuery: {},
			}
		},
		computed: {
			...mapGetters(['hasLogin']),
			...mapState(['openId', 'userInfo']),
		},
		onLoad: function(query) {
			this.initredirectRouteData(query);
		},
		methods: {
			...mapMutations(['SET_USERINFO', 'SET_OPENID', 'SET_TOKEN']),
			initredirectRouteData: function(query) {
				console.log('query')
				console.log(query)
				if (query.redirectUrl) {
					this.redirectRoute.path = query.redirectUrl;
					this.redirectRoute.name = query.redirectName;
					delete query.redirectUrl;
					delete query.redirectName;
					this.routeQuery = query;
				} else {
					this.routeQuery = query;
				}
			},
			
			// 微信小程序端使用微信授权登录的处理代码
			getuserinfo: function(res) {
				const _this = this;
				console.log(res)
				if (!res.detail.iv) {
					uni.showToast({
						icon: 'none',
						title: '拒绝微信授权将无法登录',
					});
					return;
				}
				
				// 设置userinfo到store
				this.SET_USERINFO(res.detail.userInfo)
				
				// 调用微信login接口 获取登录凭证code
				// 再调用服务器api接口 发送code过去，服务器端使用code调用微信登录凭证校验接口
				// 成功后服务器端将微信接口返回的openid(unionid)和session_key 返回给前端
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes);
						
						// 有了code之后调用服务器端接口获取openid和session_key (服务器端调用微信接口获取并返回给前端)
						_this.getSessionKey(loginRes.code, res.detail.userInfo);				
					}
				});
				
			},
			async getSessionKey(code, userinfo) {
				let res = await this.$apis.fetchSessionKey({code: code, userinfo: userinfo});
				console.log(res)
				if (res) {
					this.SET_OPENID(res.openid)
					this.SET_TOKEN(res.token)
					
					// 登录成功之后 跳转到过来的页面
					this.jumptopre()
				} else {
					uni.showToast({
						title: '登录失败，请重试',
					});
				}
			},
			
			// app端使用微信授权登录的处理代码
			appWxLogin: function() {
				const _this = this;
				// 获取服务提供商列表
				uni.getProvider({
				    service: 'oauth',
				    success: function (res) {
				        console.log(res)
						console.log(res.provider)
						// 判断用户手机上是否安装有微信客户端
				        if (~res.provider.indexOf('weixin')) {
				            uni.login({
				                provider: 'weixin',
				                success: function (loginRes) {
									console.log('userinfo')
				                    console.log(JSON.stringify(loginRes));
									
									// 获取微信用户信息
									uni.getUserInfo({
									    provider: 'weixin',
									    success: function (infoRes) {
									        // console.log(infoRes.userInfo);
											_this.loginServer(infoRes.userInfo)
									    }
									});
				                }
				            });
				        } else {
							uni.showToast({
								title: '手机上没有微信客户端',
							});
						}
				    }
				});
			},
			async loginServer(userInfo) {
				let openid = userInfo.openId;
				delete userInfo.openId;
				delete userInfo.unionId;
				
				let paras = {
					code: '',
					openid: openid,
					userinfo: userInfo,
				}
				let res = await this.$apis.fetchSessionKey(paras);
				console.log(res)
				if (res && res.token) {
					this.SET_TOKEN(res.token)
					this.SET_OPENID(openid)
					this.SET_USERINFO(userInfo)
				} else {
					uni.showToast({
						title: '登录失败，请重试',
					});
				}
				// 登录成功之后 跳转到过来的页面
				this.jumptopre()
			},
			jumptopre: function() {
				let tabBarPages = [
					"/pages/index/index",
					"/pages/music/music",
					"/pages/activity/activity",
					"/pages/user/user"
				];
				let index = tabBarPages.indexOf(this.redirectRoute.path);
				
				console.log(getCurrentPages())
				
				if (index === false || index === -1) {
					this.$mRouter.redirectTo({
						route: this.redirectRoute,
						query: this.routeQuery
					});
				} else {
					this.$mRouter.back(1)
				}
				
			},
			
			
			bindLogin: function() {
				uni.showToast({
					icon: 'none',
					title: '用户账号或密码不正确',
				});
			},

		}
	}
</script>

<style>
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
	/* background-color: #efeff4; */
	padding: 20px;
}

.input-group {
	background-color: #ffffff;
	margin-top: 40upx;
	position: relative;
}

.input-row.border::after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0px;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.input-group::after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.input-row {
	display: flex;
	flex-direction: row;
	position: relative;
}

.input-row .title,.input-row input{
	height: 70upx;
	padding: 20upx 0;
	line-height: 70upx;
}	

.action-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.action-row navigator {
	color: #09BB07;
	padding: 0 20px;
}

.btn-row {
	margin: 50px 0;	
}

button.primary {
	background-color: #09BB07;
}
.input-row input{
	margin-left: 15upx;
}
</style>
