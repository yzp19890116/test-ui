<template>
    <div class="">
        <list-one></list-one>
        <list-two></list-two>
    </div>
</template>

<script>
import ListOne from '../../components/vuex/ListOne'
import ListTwo from '../../components/vuex/ListTwo'
import {store} from '../../store/store'

export default{
    data(){
        return {

        }
    },
    store: store,
    components:{
        ListOne, ListTwo
    },
    methods:{

    }
}
</script>

<style scoped>

</style>