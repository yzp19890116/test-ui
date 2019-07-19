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
//关于我们的二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
//关于我们-联系我们三级路由
import Phone from './components/about/contact/Phone'
import Email from './components/about/contact/Email'


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
    {path:"/about", component: About, redirect: '/about/contact', children:
        [
          {path: '/about/contact', name: 'contactLink', component: Contact, redirect: '/about/contact/phone', children:
                [
                  {path: '/about/contact/phone', name: 'phoneLink', component: Phone},
                  {path: '/about/contact/email', name: 'emailLink', component: Email}
                ]
          },
          {path: '/about/delivery', name: 'deliveryLink', component: Delivery},
          {path: '/about/history', name: 'historyLink', component: History},
          {path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide}
        ]
    },
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
