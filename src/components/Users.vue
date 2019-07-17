<template>
    <div class="users">
        <h1>users</h1>
        <ul>
            <li v-for="user of users">
                <h2 @click="user.show = !user.show">{{user.name}}</h2>
                <h3 v-show="user.show" >{{user.age}}</h3>
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