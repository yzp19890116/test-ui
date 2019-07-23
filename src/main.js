import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from '@/router/routes' //引入路由js,@相当于是补全/src路径的
// import axios from 'axios'
//设置访问头和格式
// axios.defaults.headers.common['token'] = ""
// axios.defaults.headers.post["Content-type"] = 'application/json'
// Vue.prototype.$axios = axios//定义别名

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
