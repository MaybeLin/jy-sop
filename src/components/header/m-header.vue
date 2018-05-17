<template>
    <div class="m-header">
        <div class="line"></div>
        <div class="header-top page-w block-center flex just-center">
            <div></div>
            <div class="top-nav flex">
                <div class="top-nav-item shoushi " v-for="item in headerTop">
                    <div class="hover-color">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="header-nav page-w block-center flex just-center flex-y-end">
            <div class="logo">
                <router-link to="/">供应商协同门户</router-link>
            </div>
            <div class="nav flex">
                <div class="nav-text shoushi hover-color"
                     v-for="item in nav"
                     :class="navActive == item.id ? 'active ' : ''"
                >
                    <router-link :to="item.path" class="hover-color">
                        {{item.name}}
                    </router-link>
                    <div class="active-bor block-center" v-show="navActive == item.id"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {headerTop, nav} from './config';

    export default {
        name: "Mheader",
        data() {
            return {
                headerTop: headerTop,
                nav: nav,
                navActive: 1
            }
        },
        watch: {      //监听路由变化
            $route(to) {
                this.getRouterActive(to);
            }
        },
        mounted() {
            this.getRouterActive();
        },
        methods: {
            getRouterActive(to) {
                var indexRouter = to || this.$route;
                this.navActive = indexRouter.meta.id;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .m-header
        height 130px
        background: $color-white

    .line
        height: 8px
        background: $color-main

    .header-top
        font-size: $font-size-small
        margin-top: 4px
        .top-nav-item > div
            padding: 0 8px
            border-left: 1px solid $color-main

    .header-nav
        margin-top: 20px
        .logo
            color $color-main
            font-size 30px
            font-weight bold
        .nav
            color #222222
            .active
                color $color-main
            .nav-text
                margin: 0 20px
                font-size: $font-size-medium-x
                .active-bor
                    width 20px
                    height 4px
                    border-radius  4px
                    background $color-main
                    margin-top 4px
</style>