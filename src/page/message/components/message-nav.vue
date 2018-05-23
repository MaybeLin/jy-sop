<template>
    <div class="message-nav fl">
        <page-title bg="#e0e0e0" color="#4b4b4b">消息分类</page-title>
        <div class="message-nav-list">
            <div :t="msgType" class="message-nav-item shoushi hover-color"
                 :class="[item.id == msgType ? 'active' : '']"
                 v-for="item in nav">
                <router-link :to="getRouter(item)" class="edit-type">
                    {{item.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'

    export default {
        name: "message-nav",
        props: {
            msgType: {
                type: String,
                default: '1'
            },
            nav: {
                type: Array,
                default: []
            }
        },
        methods: {
            getRouter(item) {
                return `/message?type=${item.id}`
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .message-nav
        width 200px
        height 100%
        background #ffffff
        .message-nav-list
            padding 10px 0
            > div
                .edit-type
                    display block
                    width 100%
                    padding 10px 20px
            .active
                background $color-main
                color $color-white
</style>