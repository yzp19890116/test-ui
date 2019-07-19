<template>
    <div class="">
        <h1>menu</h1>
        <button @click="goToLogin">跳转到登录</button>
    </div>
</template>

<script>
export default{
    methods:{
        goToLogin(){
            //根据访问历史跳转页面
            // this.$router.go(-1)

            //指定跳转地址
            // this.$router.replace('/login')
            // this.$router.replace({name: 'loginLink'})

            //通过push进行跳转
            // this.$router.push('/login');
            this.$router.push({name: 'loginLink'});
        }
    }
}
</script>

<style scoped>

</style>