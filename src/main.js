import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
// import router  from './router/routes'
import router from '@/router/routes' //引入路由js,@相当于是补全/src路径的

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
