<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "app-header",
        data(){
            return {
                title: "Vue Demo"
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