<template>
    <div class="users">
        <h1>users</h1>
        <ul>
            <li v-for="user of users">
                <h2>{{user.name}}</h2>
                <h3>{{user.phone}}</h3>
            </li>
        </ul>

        <button @click="deleteUser">删除</button>
    </div>
</template>
<!--
传值：string number boolean
传引用：array object
-->
<script>
    export default {
        name: "users",
        // props: ["users"],
        //此处是标准写法，定义参数属性
        props: {
            users:{
                type: Array,
                require: true
            }
        },
        data(){
            return {

            }
        },
        methods:{
            deleteUser:function(){
                //此处修改的是app.vue传入的Array（理解为引用或者地址）在此处修改，会影响app,vue中的users内容。
                this.users.pop()
            }
        }
    }
</script>

<style scoped>
/*scoped是域的概念，使样式只在当前的vue中起作用*/
h1{
    color: green;
}
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    border: 1px solid #222;
    margin: 10px;
}
</style>