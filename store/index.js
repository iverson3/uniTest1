import Vue from 'vue'
import Vuex from 'vuex'
import $mConfig from '@/config/index.config.js'
import $mRoutesConfig from '@/config/routes.config.js'
import $mRouter from '@/common/router.js'

Vue.use(Vuex)

// let userState = {
// 	hasLogin: false,
// 	username: '',
// 	userImg: '',
	
// 	activityList: [],
// 	curActid: 0,
// };

// const userInfo = uni.getStorageSync('userInfo');
// if(userInfo.hasLogin){	
// 	userState = userInfo;
// }

const TOKEN = uni.getStorageSync("token") || "";
const OPENID = uni.getStorageSync("openId") || "";
const USER_INFO = uni.getStorageSync("userInfo") || {};
const CUSTOMER_INFO = uni.getStorageSync("customerInfo") || {};

const store = new Vuex.Store({
	state: {
		// 是否強制登录
		forcedLogin:$mConfig.forcedLogin,
		// 前端token
		token: TOKEN,
		// 用户openid
		openId: OPENID,
		// 用户信息 头像 昵称
		userInfo: USER_INFO,
		// 用户的商户信息
		customerInfo: CUSTOMER_INFO,
		
		activityList: [],
		curActid: 0,
	},
	getters: {
		// 用户是否登录
		hasLogin: state => {
			if (state.token) {
				return true;
			} else {
				return false;
			}
		},
		curActivityDetail(state) {
			let res = null;
			for (let activity of state.activityList) {
				if (parseInt(activity.id) === parseInt(state.curActid)) {
					res = activity;
					break;
				}
			}
			if (res) {
				return res;
			} else {
				return {};
			}
		}
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
			uni.setStorageSync("token", token);
		},
		SET_OPENID(state, openId) {
			state.openId = openId;
			uni.setStorageSync("openId", openId);
		},
		SET_USERINFO(state, userInfo) {
			state.userInfo = userInfo;
			uni.setStorageSync("userInfo", userInfo);
		},
		SET_CUSTOMERINFO(state, customerInfo) {
			state.customerInfo = customerInfo;
			uni.setStorageSync("customerInfo", customerInfo);
		},
		SET_LOGOUT(state) {
			state.token = "";
			uni.setStorageSync("token", "");
		},
		
		
		// login(state, userinfo) {
		// 	state.hasLogin = true;
		// 	state.username = userinfo.username;
		// 	state.userImg  = userinfo.userImg;
		// 	// state.loginProvider = provider;
			
		// 	uni.setStorageSync('userInfo', {...state});	
		// },
		// logout(state) {
		// 	state.hasLogin = false
		// 	state.username = '';
		// 	state.userImg  = '';
		// 	// state.openid = null
			
		// 	uni.clearStorageSync();
		// },
		
		setActivityList(state, data) {
			state.activityList = data;
		},
		setCurActId(state, id) {
		  state.curActid = id;
		},
	},
	actions: {
		// 登录过期 重新登录
		reLogin({
			commit
		}, info) {
			commit("SET_TOKEN","");
			$mRouter.redirectTo({
				route:$mRoutesConfig.login
			});
		}
	}
})

export default store
