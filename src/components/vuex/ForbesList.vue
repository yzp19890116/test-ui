<template>
    <div class="">
        <list-one v-bind:personList="personList"></list-one>
        <list-two v-bind:personList="personList"></list-two>
    </div>
</template>

<script>
import ListOne from '../../components/vuex/ListOne'
import ListTwo from '../../components/vuex/ListTwo'

export default{
    data(){
        return {
            personList: [
                {name: '马云', price: 200},
                {name: '马化腾', price: 190},
                {name: '马勒戈壁', price: 20},
                {name: '马蓉', price: 10}
            ]
        }
    },
    components:{
        ListOne, ListTwo
    },
    methods:{

    }
}
</script>

<style scoped>

</style>