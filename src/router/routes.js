import Vue from 'vue'
import VueRouter from 'vue-router'

//第一级路由组件
import Home from "../components/Home"
import Admin from "../components/Admin"
import Login from "../components/Login"
import Menu from "../components/Menu"
import Register from "../components/Register"
import About from "../components/about/About"
import HelloWord from "../components/HelloWorld"
// import Users from './components/Users.vue'

//关于我们的二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'

//关于我们-联系我们三级路由
import Phone from '../components/about/contact/Phone'
import Email from '../components/about/contact/Email'

Vue.use(VueRouter)

const routes = [
    {path:"/", name:"homeLink", components:{
            defaule: Home,
            'delivery': Delivery,
            'history': History,
            'orderingGuide': OrderingGuide,
            'contact': Contact,
            'phone': Phone,
            'email': Email
        }
    },//路由命名，如果之后想用name进行跳转得用绑定属性
    {path:"/admin", component: Admin
        , beforeEnter: (to, from, next) => {
            //路由独享守卫
            alert("此处是管理员专享页面")
            next()//这个是允许访问，这个写在前面，后面next(false)就不会起作用
            next(false)//这个是阻止进入的方法
        }
    },
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
]

//配置路由
export default new VueRouter({
    routes,
    mode: "history"//设置后域名中/#就会消失
})
