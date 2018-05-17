<template>
    <div id="app">
        <mheader></mheader>
        <router-view/>
    </div>
</template>

<script>
    import Mheader from '@/components/header/m-header'

    export default {
        name: 'App',
        components: {Mheader},
    }
</script>

<style scoped lang="stylus">

</style>
