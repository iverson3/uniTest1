/* 
 * 路由表对象：
 * 该文件挂载在Vue原型中 $mRoutesConfig
 * 作用：调用$mRouter对象的方法 传入以下对应的路由对象，详细见common目录下的router.js
 * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
 * 注意：所有在pages目录下新建的页面都必须在"路由表"中进行声明，并且在框架的pages.json注册。
 * 
 * 配置参数项说明： 
 * name:可选配置 （路由名称）
 * path:必填配置 （路由地址）
 * requiresAuth:可选配置 （是否权限路由）
 */
import store from "@/store"
import * as Apis from '../apis/index.js'
import mConfig from "./index.config.js"

export default {
	// 权限路由
	joinactivity: {
		name: "活动报名",
		path: "/pages/subactivity/activity/joinactivity",
		requiresAuth: true
	},
	cancelactivity: {
		name: "取消活动报名",
		path: "/pages/subactivity/activity/cancelactivity",
		requiresAuth: true
	},
	
	
	// 非权限路由
	index: {
		name: "首页",
		path: "/pages/index/index",
	},
	user: {
		name: "个人中心",
		path: "/pages/user/user",
	},
	login: {
		name: "登录",
		path: "/pages/subuser/login/login",
		before: function() {
			console.log('goto login before')
		},
		after: function() {
			console.log('goto login after')
		}
	},
	activitylist: {
		name: "活动中心",
		path: "/pages/activity/activity",
		back: function() {
			console.log('back to activitylist')
		}
	},
	activityinfo: {
		name: "活动详情",
		path: "/pages/subactivity/activityinfo/activityinfo",
		before: function() {
			console.log('goto activityinfo before')
			// console.log(store)
			let res = store.getters.hasLogin
			console.log('login: ' + res)
		},
		after: function() {
			console.log('goto activityinfo after')
			// let res = Apis.getMemberList({id: store.state.curActid})
			// console.log(res)
		}
	},
	musiclist: {
		name: "曲谱中心",
		path: "/pages/music/music"
	},
	musicinfo: {
		name: "曲谱详情",
		path: "/pages/submusic/info/info"
	},
	
	
	
	// index: {
	// 	name: "推荐注册",
	// 	path: "/pages/login/index"
	// },
	// reg: {
	// 	name: "注册",
	// 	path: "/pages/login/reg"
	// },
	// regSuccess: {
	// 	name: "提交成功",
	// 	path: "/pages/login/success"
	// },
	
	
	
	
	
	
	
	
	
	
	
	// promoCode: {
	// 	name: "我的推广码",
	// 	path: "/pages/user/promoCode",
	// 	requiresAuth: true
	// },
	// tradeDetail: {
	// 	name: "交易详细",
	// 	path: "/pages/trade/tradeDetail",
	// 	requiresAuth: true
	// },
	// tradeHistory: {
	// 	name: "交易记录",
	// 	path: "/pages/trade/tradeHistory",
	// 	requiresAuth: true
	// },
	// user: {
	// 	name: "个人中心",
	// 	path: "/pages/user/user",
	// 	requiresAuth: true
	// },
	// userInfo: {
	// 	name: "基本信息",
	// 	path: "/pages/user/userInfo",
	// 	requiresAuth: true
	// },
	// uUserInfo: {
	// 	name: "修改基本信息",
	// 	path: "/pages/user/uUserInfo",
	// 	requiresAuth: true
	// },
	// ccList: {
	// 	name: "信用卡管理",
	// 	path: "/pages/cc/ccList",
	// 	requiresAuth: true
	// },
	// ccDetail: {
	// 	name: "信用卡详情",
	// 	path: "/pages/cc/ccDetail",
	// 	requiresAuth: true
	// },
	// ccAdd: {
	// 	name: "添加信用卡",
	// 	path: "/pages/cc/ccAdd",
	// 	requiresAuth: true
	// },
	// trade: {
	// 	name: "商户收款",
	// 	path: "/pages/trade/trade",
	// 	requiresAuth: true
	// },

	// // 非权限路由
	// main: {
	// 	name: "首页",
	// 	path: "/pages/main/main"
	// },
	// login: {
	// 	name: "登录",
	// 	path: "/pages/login/login"
	// },
	// // index: {
	// // 	name: "推荐注册",
	// // 	path: "/pages/login/index"
	// // },
	// reg: {
	// 	name: "注册",
	// 	path: "/pages/login/reg"
	// },
	// regSuccess: {
	// 	name: "提交成功",
	// 	path: "/pages/login/success"
	// },
	// ccApply: {
	// 	name: "信用卡申请",
	// 	path: "/pages/cc/ccApply"
	// },

}
