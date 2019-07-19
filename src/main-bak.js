import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './router/routes'//引入路由js

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
    routes,
    mode: "history"//设置后域名中/#就会消失
})

//全局守卫 to：你要进入哪一个路由中去 from：从哪一个路由离开 next：决定是否能够展示路由页面
// router.beforeEach( (to, from, next) => {
//     //判断store.gettes.isLogin === false
//     if(to.path === '/login' || to.path === '/register'){
//         next();
//     }else{
//         alert("请先登录！")
//         next('/login')
//     }
// })

// //后置钩子（现在没有适合的应用场景，之后学习如果要用到再做研究）
// router.afterEach((to, from) => {
//     console.info(to);
//     console.info(from);
// })

//注册全局组件
// Vue.component('users', Users)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
