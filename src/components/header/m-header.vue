<template>
    <div class="m-header">
        <div class="line"></div>
        <div class="header-top page-w block-center flex just-center">
            <div></div>
            <div class="top-nav flex">
                <div v-if="userName != ''" class="flex">
                    <div>您好,{{userName}}</div>
                    <div @click="loginOut" class="hover-color shoushi" style="margin:0 10px">退出</div>
                </div>
                <div class="top-nav-item shoushi "
                     v-for="item in nav"
                     v-if="getNavTopStatus(item)">
                    <div class="hover-color"
                         :class="navActive == item.id ? 'active ' : ''">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </div>
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
                     v-if="item.type && item.type == '2'"
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
    import { mapState } from 'vuex'

    export default {
        name: "Mheader",
        data() {
            return {
                navActive: 1
            }
        },
        computed: {
            ...mapState({
                nav: state => state.nav.nav,
                userName: state => state.user.name
            }),
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
            getNavTopStatus(item){
                if (item.type && item.type == '1') {
                    if(item.id == 1 && this.userName != '') return false;
                    return true;
                }
                return false;
            },
            getRouterActive(to) {
                var indexRouter = to || this.$route;
                this.navActive = indexRouter.meta.id || 0;
            },
            loginOut() {
                this.$store.dispatch('FedLogOut').then(() => {
                    location.reload();
                })
            },
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

    .active
        color $color-main

    .header-nav
        margin-top: 20px
        .logo
            color $color-main
            font-size 30px
            font-weight bold
        .nav
            color #222222
            .nav-text
                margin: 0 20px
                font-size: $font-size-medium-x
                .active-bor
                    width 20px
                    height 4px
                    border-radius 4px
                    background $color-main
                    margin-top 4px
</style>