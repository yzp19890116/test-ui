<template>
    <div id="home">
        <h1>home</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                users: [

                ]
            }
        },
        methods: {
            updateTitle: function (title) {
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

</style>
