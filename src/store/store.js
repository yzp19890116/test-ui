import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
            console.log(saleList)
            return saleList
        })
    }
})