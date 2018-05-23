<template>
    <div class="page-w block-center block-mg message">
        <message-nav :msgType="type" :nav="nav"></message-nav>
        <message-list :title="title"></message-list>
    </div>
</template>

<script>
    import nav from './message-nav.js';
    import MessageNav from './components/message-nav';
    import MessageList from './components/message-list';

    export default {
        name: "message",
        data() {
            return {
                type: null,
                nav: nav,
                title: null
            }
        },
        created() {
            this.getType();
        },
        watch: {      //监听路由变化
            $route(to) {
                this.getRouterActive(to);
            },
            type(){
                this.getTitle();
            }
        },
        methods: {
            getTitle() {
                this.nav.forEach((item) => {
                  if(item.id == this.type) this.title = item.name;
                })
            },
            getRouterActive(to) {
                this.type = to.query.type;
            },
            getType() {
                this.type = this.$route.query.type || '1';
            }
        },
        components: {
            MessageNav,
            MessageList
        }
    }
</script>

<style scoped lang="stylus">
    .message
        height 600px
</style>