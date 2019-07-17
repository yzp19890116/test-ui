<template>
    <header @click="changeCommonTitle">
        <h1>{{title}}-{{commonTitle}}</h1>
    </header>
</template>

<script>
    export default {
        name: "app-header",
        props: {
            commonTitle: {
                type: String,
                require: false
            }
        },
        data(){
            return {
                title: "Vue Demo"
            }
        },
        methods: {
            changeCommonTitle: function(){
                debugger
                //子组件调用父组件的方法
                this.$emit("changeCommonTitle", "子组件向父组件传值");
                //先调用父组件方法，在修改传入子组件的值，看最终结果(结果是第一次点击时显示了穿给父类的名称，第二次点击变成了自组件自己的值)在控制台报错，不建议这么使用
                //此处修改从app.vue传入的commonTitle值，所以修改不会影响别处的值和显示
                this.commonTitle = "changed Title"
            }
        }

    }
</script>

<style scoped>
header{
    background-color: lightgreen;
    padding:10px;
}
</style>