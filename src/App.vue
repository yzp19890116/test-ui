<template>
    <div id="app">
        <div class="container">
            <!-- 头部 -->
            <app-header @changeCommonTitle="updateTitle($event)" :commonTitle="commonTitle"></app-header>

            <router-view></router-view>
            <!-- 底部 -->
<!--            <app-footer :commonTitle="commonTitle"></app-footer>-->
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: 'app',
    components: {
        appHeader: Header,//驼峰式命名不用加双引号
        "app-footer": Footer
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
