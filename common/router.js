/* 
 * 路由对象
 * 中心思想：需要路由鉴权,由于uni-app没有vue中的全局钩子函数，所以封装了Router对象。
 * 说明：应用中的路由跳转尽量使用该Router的方法，并配合config中的路由表对象进行跳转。
 * 
 * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
 * 
 */
import mRoutesConfig from '../config/routes.config.js'

class Router {
	constructor(arg) {
		
		this.callBack = () => {};
	}

	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}

	push(to) {
		this.callBack("navigateTo", to);
	}

	redirectTo(to) {
		this.callBack("redirectTo", to);
	}

	reLaunch(to) {
		this.callBack("reLaunch", to);
	}

	switchTab(to) {
		this.callBack("switchTab", to);
	}

	back(delta) {
		let pages = getCurrentPages()
		console.log(pages)
		
		let pagename = ''
		for(let key in mRoutesConfig){ 
			let backtopagepath = "/" + pages[pages.length - delta - 1].route;
			if (backtopagepath == mRoutesConfig[key].path) {
				pagename = key;
				break;
			}
		}
		
		console.log(pagename)
		if (pagename != '' && (typeof mRoutesConfig[pagename].back == 'function')) {
			mRoutesConfig[pagename].back();
		}
		
		uni.navigateBack({
			delta
		})
	}
}

export default new Router();
