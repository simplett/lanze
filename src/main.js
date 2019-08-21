import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jQuery from "jquery"
axios.defaults.baseURL = "http://10.1.180.146:8080/"
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.$=jQuery;

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
