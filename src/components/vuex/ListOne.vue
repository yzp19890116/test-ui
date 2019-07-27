<template>
    <div class="list-one">
        <ul>
            <li v-for="person in saleList">
                <span class="name">{{person.name}}</span>
                <span class="price">{{person.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice(5)">降价</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default{
    computed: {
        personList() {
            return this.$store.state.personList
        },
        ...mapGetters(["saleList"])
        // saleList(){
        //     return this.$store.getters.saleList
        // }
    },
    methods:{
        ...mapActions(["reducePrice"])
        // reducePrice: function(amount){
        //     // this.$store.state.personList.forEach(person => {
        //     //     person.price -= 1
        //     // })
        //     //触发vuex,mutations中的方法,上面的方法也会生效，但是会在控制台报错
        //     // this.$store.commit("reducePrice");
        //     //触发vuex.actions中的方法
        //     this.$store.dispatch('reducePrice', amount)
        // }
    }
}
</script>

<style scoped>
.list-one{
    background: #FFF8B1;
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.list-one ul{
    padding: 0;
}
.list-one ul li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>