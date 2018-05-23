<template>
    <div class="page-w block-center block-mg message">
        <message-nav></message-nav>
        <message-list></message-list>
    </div>
</template>

<script>
    import MessageNav from './components/message-nav'
    import MessageList from './components/message-list'
    export default {
        name: "message",
        components:{
            MessageNav,
            MessageList
        }
    }
</script>

<style scoped lang="stylus">
    .message
        height 600px
</style>