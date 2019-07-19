<template>
    <div id="home">
        <users :users="users"></users>
        <users :users="users"></users>
    </div>
</template>

<script>
    import Users from './Users.vue'
    export default {
        name: 'home',
        components: {
            Users//如果名称没有和标签冲突可以直接饮用
        },
        data() {
            return {
                users: [
                    // {name: "zhangsan", age: "10", show: false},
                    // {name: "lisi", age: "11", show: false},
                    // {name: "wangwu", age: "12", show: false},
                    // {name: "zhaoliu", age: "13", show: false},
                    // {name: "test1", age: "14", show: false},
                    // {name: "test2", age: "15", show: false},
                    // {name: "test3", age: "16", show: false}
                ]
            }
        },
        methods: {
            updateTitle: function (title) {
                // this.commonTitle = title
            }
        },
        created () {
            this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
                console.log(data)
                this.users = data.body
            })
        }
    }
</script>

<style>
    h1 {
        font-size: 15px;
        color: purple
    }
</style>
