<template>
    <footer>
        <h1>{{copeRight}}</h1>
    </footer>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
            return {
                copeRight: "@CopeRight 2019 Vue test"
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