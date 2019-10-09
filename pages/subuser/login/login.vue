<template>
	<view class="content">
		<view class="input-group">
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
		</view>
		<view class="btn-row">
		    <!-- #ifdef MP-WEIXIN -->
		    <button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信登录</button>
		    <!-- #endif -->
		</view>
		<view class="action-row">
		    <navigator url="../register/register">注册账号</navigator>
		    <text>|</text>
		    <navigator url="../password/password">忘记密码</navigator>
		</view> 
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
			...mapState(['openId', 'userinfo']),
		},
		onLoad: function(query) {
			this.initredirectRouteData(query);
		},
		methods: {
			...mapMutations(['SET_USERINFO', 'SET_OPENID']),
			initredirectRouteData: function(query) {
				if (query.redirectUrl) {
					this.redirectRoute.path = query.redirectUrl;
					delete query.redirectUrl;
					this.routeQuery = query;
				} else {
					this.routeQuery = query;
				}
			},
			
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
				
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes);
						
						// 有了code之后调用服务器端接口获取sessionkey (服务器端调用微信接口获取并返回给前端)
						let code = loginRes.code;
						_this.getSessionKey(code);
			
						
						// 获取用户信息
						uni.getUserInfo({
						    provider: 'weixin',
						    success: function (infoRes) {
								console.log(infoRes)
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
						    }
						});
					}
				});
				
			},
			async getSessionKey(code) {
				let res = await this.$apis.fetchSessionKey({code: code});
				console.log(res)
				if (res) {
					this.SET_OPENID(res.openid)
				} else {
					uni.showToast({
						title: '从服务器端获取sessionkey失败',
					});
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
