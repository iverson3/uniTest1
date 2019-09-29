import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userState = {
	hasLogin: false,
	username: '',
	userImg: '',
	
	activityList: [],
	curActid: 0,
};

const userInfo = uni.getStorageSync('userInfo');
if(userInfo.hasLogin){	
	userState = userInfo;
}

const store = new Vuex.Store({
	state: {
		...userState
		// loginProvider: "",
		// openid: null,
	},
	getters: {
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
		login(state, userinfo) {
			state.hasLogin = true;
			state.username = userinfo.username;
			state.userImg  = userinfo.userImg;
			// state.loginProvider = provider;
			
			uni.setStorageSync('userInfo', {...state});	
		},
		logout(state) {
			state.hasLogin = false
			state.username = '';
			state.userImg  = '';
			// state.openid = null
			
			uni.clearStorageSync();
		},
		// setOpenid(state, openid) {
		// 	state.openid = openid
		// }
		
		setActivityList(state, data) {
			state.activityList = data;
		},
		setCurActId(state, id) {
		  state.curActid = id;
		},
	},
	actions: {
		// 封装api请求方式
	}
})

export default store
