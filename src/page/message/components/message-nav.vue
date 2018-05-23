<template>
    <div class="message-nav fl">
        <page-title bg="#e0e0e0" color="#4b4b4b">消息分类</page-title>
        <div class="message-nav-list">
            <div class="message-nav-item shoushi hover-color" v-for="item in nav">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import nav from '../message-nav'
    import pageTitle from '@/components/page-title'
    export default {
        name: "message-nav",
        data() {
            return {
                nav: nav
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .message-nav
        width 200px
        height 100%
        background #ffffff
        .message-nav-list
            padding 10px 20px
            >div
                padding 10px 0
</style>