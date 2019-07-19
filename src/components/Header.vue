<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- 图标（矢量）-->
            <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
            <!-- 系统名称 -->
            <a href="/" class="navbar-brand">Pizza点餐系统</a>
            <ul class="navbar-nav">
                <li><router-link :to="{name: 'homeLink'}" class="nav-link">主页</router-link></li><!--tag是可以指定router-link标签类型的-->
                <li><router-link to="menu" class="nav-link">菜单</router-link></li>
                <li><router-link to="admin" class="nav-link">管理</router-link></li>
                <li><router-link to="about" class="nav-link">关于我们</router-link></li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li><router-link to="login" class="nav-link">登录</router-link></li>
                <li><router-link to="register" class="nav-link">注册</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "app-header",
        props: {

        },
        data(){
            return {
                title: "Vue Demo"
            }
        },
        methods: {
            changeCommonTitle: function(){
                //子组件调用父组件的方法
                this.$emit("changeCommonTitle", "子组件向父组件传值");
                //先调用父组件方法，在修改传入子组件的值，看最终结果(结果是第一次点击时显示了穿给父类的名称，第二次点击变成了自组件自己的值)在控制台报错，不建议这么使用
                //此处修改从app.vue传入的commonTitle值，所以修改不会影响别处的值和显示
                // this.commonTitle = "changed Title"
            }
        }
        // beforeCreate: function(){
        //     alert("组件实例化之前");
        // },
        // created: function(){
        //     alert("组件实例化完毕，单页面还未展示");
        // },
        // beforeMount: function(){
        //     alert("组件挂载之前，页面仍未展示，但虚拟Dom已经配置");
        // },
        // mounted: function(){
        //     alert("组件挂载后，此方法执行后，页面展示");
        // },
        // beforeUpdate: function(){
        //     alert("组件更新前，但页面还未更新，但虚拟Dom已经配置");
        // },
        // updated: function(){
        //     //经测试Array修改了没有触发此方法，但是修改值时触发了
        //     alert("组件更新，此方法执行后页面修改");
        // },
        // beforeDestroy: function(){
        //     alert("组件销毁前");
        // },
        // destroyed: function(){
        //     alert("组件销毁结束");
        // }
    }
</script>

<style scoped>

</style>