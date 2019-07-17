import Vue from 'vue'
import App from './App.vue'
// import Users from './components/Users.vue'
Vue.config.productionTip = false

//注册全局组件
// Vue.component('users', Users)

new Vue({
  render: h => h(App),
}).$mount('#app')
