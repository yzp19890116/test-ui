<template>
    <div class="list-one">
        <ul>
            <li v-for="person in personList">
                <span class="name">{{person.name}}</span>
                <span class="price">{{person.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    props:["personList"],
    methods:{

    }
}
</script>

<style scoped>
.list-one{
    background: #FFF8B1;
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.list-one ul{
    padding: 0;
}
.list-one ul li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>