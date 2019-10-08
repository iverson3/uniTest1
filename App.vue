<script>
	import Vue from 'vue'
	
	export default {
		created() {
			// 如果manifest配置文件中 autoclose未设置为true
			// 则需要在应用中显式的调用closeSplashscreen()方法 关闭程序启动界面
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen(); 
			// #endif 
		},
		
		onLaunch: function() {
			console.log('App Launch')
			
			this.$AppEntryController.getWeChatOpenId();
			// #ifdef H5
			this.$AppEntryController.handleH5BrowserAddressBarAuth();
			// #endif
			
			// 获取平台系统信息 进行必要的处理
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			
			// 设置"未读的红点"
			setTimeout(() => {
				uni.setTabBarBadge({
					index: 1,
					text: '16'
				});
				uni.setTabBarBadge({
					index: 2,
					text: '1'
				});
				uni.showTabBarRedDot({
					index: 3
				});
			}, 1000);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	
	/* flex布局对跨平台的兼容性更好 */
	/* page,
	view {
		display: flex;  
	} */
</style>
