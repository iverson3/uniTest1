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
		<view class="action-row">
		    <navigator url="../register/register">注册账号</navigator>
		    <text>|</text>
		    <navigator url="../password/password">忘记密码</navigator>
		</view> 
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				account: '',
				password: ''
			}
		},
		methods: {
			...mapMutations(['login']),
			bindLogin: function() {
				this.$http.request({
					url: '/music/getDetail',
					method: 'post',
					params: {
						id: 3
					}
				}).then(res => {
					console.log(res)
					
					var userinfo = {
						username: this.account,
						password: 'www',
						userImg: './static/logo.png'
					}
					if (this.password === userinfo.password) {
						this.toLogin(userinfo)
					} else{
						uni.showToast({
							icon: 'none',
							title: '用户账号或密码不正确',
						});
					}
					
				}).catch(err => {
					console.log(err)
					
					// 模拟数据
					var userinfo = {
						username: this.account,
						password: 'www',
						userImg: './static/logo.png'
					}
					if (this.password === userinfo.password) {
						this.toLogin(userinfo)
					} else{
						uni.showToast({
							icon: 'none',
							title: '用户账号或密码不正确',
						});
					}
				})
			},
			toLogin: function(userinfo) {
				this.login(userinfo)
				uni.reLaunch({
					url: '../index/index',
				});
			}
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
