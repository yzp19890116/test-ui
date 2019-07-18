import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Home from "./components/Home"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Menu from "./components/Menu"
import Register from "./components/Register"
import About from "./components/about/About"
import HelloWord from "./components/HelloWorld"
// import Users from './components/Users.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
  routes: [
    {path:"/", name:"homeLink", component: Home},//路由命名，如果之后想用name进行跳转得用绑定属性
    {path:"/admin", component: Admin},
    {path:"/login", name:"loginLink", component: Login},
    {path:"/menu", component: Menu},
    {path:"/register", component: Register},
    {path:"/about", component: About},
    {path:"/helloword", component: HelloWord},
    {path:"*", redirect:"/"}//设置如果前面的都没有匹配上，返回到根目录
  ],
  mode: "history"//设置后域名中/#就会消失
});

//注册全局组件
// Vue.component('users', Users)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
