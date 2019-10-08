import Vue from 'vue'
import App from './App'
// 导入store
import store from './store'
// 导入api请求封装 （该request插件暂时被弃用）
// import Request from './plugins/request/js/index'

import $AppEntryController from './AppEntryController.js'
import * as $apis from './apis/index.js'
import $mRouter from './common/router.js'
import $mUtils from './common/utils.js'
import $mConfig from "./config/index.config.js"
import $mAssetsPath from './config/assets.config.js'
import $mRoutesConfig from './config/routes.config.js'
import $mConstDataConfig from './config/constData.config.js'
import $modalHelper from './common/modalHelper.js'

// 导入自定义组件
import uLink from '@/components/uLink.vue'
import mPageView from "./components/m-page-view/m-page-view.vue"

Vue.config.productionTip = false

// 将api封装实现挂载到vue的根节点上 (暂时弃用)
// Vue.prototype.$http = Request();

Vue.prototype.$AppEntryController = $AppEntryController;
// 将store挂载到vue的根节点上
Vue.prototype.$store = store;
Vue.prototype.$apis = $apis;
Vue.prototype.$mRouter = $mRouter;
Vue.prototype.$mUtils = $mUtils;
Vue.prototype.$mConfig = $mConfig;
Vue.prototype.$mAssetsPath = $mAssetsPath;
Vue.prototype.$mRoutesConfig = $mRoutesConfig;
Vue.prototype.$mConstDataConfig = $mConstDataConfig;
Vue.prototype.$modalHelper = $modalHelper;

// 为Vue注册一个自定义组件，以供使用 <u-link></u-link>
Vue.component('uLink', uLink)
Vue.component("joy-page", mPageView)

// 路由钩子函数 (检查页面权限)
$mRouter.beforeEach((navType, to) => {
	if (to.route === undefined) throw ("路由钩子函数中没有找到to.route对象，路由信息:" + JSON.stringify(to));
	if (to.route.path === $mRoutesConfig.login.path && store.getters.hasLogin) {
		uni.redirectTo({
			url: $mUtils.objParseUrlAndParam($mRoutesConfig.index.path, to.query)
		})
		return;
	}
	
	console.log('route before')

	// 过滤需要权限的页面
	if (to.route.requiresAuth) {
		// 已经登录
		if (store.getters.hasLogin) {
			if (typeof to.route.before == 'function') {
				to.route.before()
			}
			
			uni[navType]({
				url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
			})
		} else {
			// 登录成功后的重定向地址和参数
			let query = {
				redirectUrl: to.route.path,
				...to.query
			}
			// 没有登录 是否强制登录?
			if (store.state.forcedLogin) {
				uni.redirectTo({
					url: $mUtils.objParseUrlAndParam($mRoutesConfig.login.path, query)
				})
			} else {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				})
				setTimeout(function() {
					uni.navigateTo({
						url: $mUtils.objParseUrlAndParam($mRoutesConfig.login.path, query)
					})
				}, 600);
			}
		}
	} else {
		console.log(to.route)
		if (typeof to.route.before == 'function') {
			to.route.before()
		}
		
		uni[navType]({
			url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
		})
	}
})


App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
