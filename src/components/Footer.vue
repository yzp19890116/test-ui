<template>
    <footer>
<!--        <h1>{{copeRight}}-{{commonTitle}}</h1>-->
        <h1>{{copeRight}}-{{url}}</h1>
    </footer>
</template>

<script>
    export default {
        name: "app-footer",
        props: {
            // commonTitle: {
            //     type: String,
            //     require: false
            // }
        },
        data(){
            return {
                copeRight: "@CopeRight 2019 Vue test",
                url: process.env.VUE_APP_URL
            }
        }
    }
</script>

<style scoped>
footer{
    background-color: #2c3e50;
    padding: 10px;
}
h1{
    color: lightgreen;
    text-align: center;
}
</style>