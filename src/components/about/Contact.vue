<template>
    <div class="card test-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">联系我们...</p>

            <!-- 三级路由 -->
            <router-link class="mr-2" tag="a" :to="{name: 'phoneLink'}">电话</router-link>
            <router-link class="" tag="a" :to="{name: 'emailLink'}">邮件</router-link>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>