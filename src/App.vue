<template>
    <div id="app">
        <app-header @changeCommonTitle="updateTitle($event)" :commonTitle="commonTitle"></app-header>
        <users :users="users"></users>
        <users :users="users"></users>
        <app-footer :commonTitle="commonTitle"></app-footer>
    </div>
</template>

<script>
    import Users from './components/Users.vue'
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Users,
            "app-header": Header,
            "app-footer": Footer
        },
        data() {
            return {
                users: [
                    {name: "zhangsan", age: "10", show: false},
                    {name: "lisi", age: "11", show: false},
                    {name: "wangwu", age: "12", show: false},
                    {name: "zhaoliu", age: "13", show: false},
                    {name: "test1", age: "14", show: false},
                    {name: "test2", age: "15", show: false},
                    {name: "test3", age: "16", show: false}
                ],
                commonTitle: "测试传值"
            }
        },
        methods: {
            updateTitle: function (title) {
                this.commonTitle = title
            }
        }
    }
</script>

<style>
    h1 {
        font-size: 15px;
        color: purple
    }
</style>
