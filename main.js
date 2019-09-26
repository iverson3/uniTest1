import Vue from 'vue'
import App from './App'
// 导入自定义组件
import uLink from '@/components/uLink.vue'
// 导入store
import store from './store'
// 导入api请求封装
import Request from './plugins/request/js/index'

Vue.config.productionTip = false

// 将store挂载到vue的根节点上
Vue.prototype.$store = store
// 将api封装实现挂载到vue的根节点上
Vue.prototype.$http = Request();

// 为Vue注册一个自定义组件，以供使用 <u-link></u-link>
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
