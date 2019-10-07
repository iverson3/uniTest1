<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			this.$AppEntryController.getWeChatOpenId();
			// #ifdef H5
			this.$AppEntryController.handleH5BrowserAddressBarAuth();
			// #endif
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
