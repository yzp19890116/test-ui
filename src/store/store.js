import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,//设置成了严格模式，state中的数据只能通过mutations中的方法修改
    state:{
        personList: [
            {name: '马云', price: 200},
            {name: '马化腾', price: 190},
            {name: '马勒戈壁', price: 20},
            {name: '马蓉', price: 10}
        ]
    },
    getters: {
        saleList: (state => {
            var saleList = state.personList.map( person => {
                return {
                    name:  "**" + person.name + "**",
                    price: person.price / 2
                }
            })
            return saleList
        })
    },
    //同步方法
    mutations: {
        reducePrice: (state, payload) => {
            state.personList.forEach(person => {
                person.price -= payload
            })
        }
    },
    //异步方法
    actions: {
        reducePrice: (context, payload) =>{
            setTimeout(function(){
                context.commit("reducePrice", payload)
            }, 1000)

        }
    }
})