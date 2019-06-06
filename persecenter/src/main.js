import Vue from 'vue'
import '@/logger'
import App from './App'
import router from './router'
import element from './element/index'
import "./commonStyle/base.css"
Vue.use(element)
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
