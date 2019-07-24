<template>
    <div class="list-two">
        <ul>
            <li v-for="person in saleList">
                <span class="name">{{person.name}}</span>
                <span class="price">{{person.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        computed: {
            personList() {
                return this.$store.state.personList
            },
            saleList() {
                return this.$store.getters.saleList
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
.list-two{
    background: #D1E4FF;
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.list-two ul{
    padding: 0;
    list-style-type: none;
}
.list-two ul li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}

</style>