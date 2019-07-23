<template>
    <div id="app">
        <div class="container">
            <!-- 头部 -->
            <app-header @changeCommonTitle="updateTitle($event)"></app-header>

            <router-view></router-view>

            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3">
                        <router-view name="delivery"></router-view>
                    </div>
                    <div class="col-md-4 col-lg-3">
                        <router-view name="history"></router-view>
                    </div>
                    <div class="col-md-4 col-lg-3">
                        <router-view name="orderingGuide"></router-view>
                    </div>
                    <div class="col-md-4 col-lg-3">
                        <router-view name="contact">
                            <router-view></router-view>
                        </router-view>
                    </div>
                </div>
            </div>
            <!-- 底部 -->
            <app-footer :commonTitle="commonTitle"></app-footer>
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
