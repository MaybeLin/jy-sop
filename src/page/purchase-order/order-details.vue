<template>
    <div class="page-w block-center block-mg">
        <details-title></details-title>
        <shop-list @back="back"></shop-list>
    </div>
</template>

<script>
    import detailsTitle from './components/details/title'
    import shopList from './components/details/order-shop-details'

    export default {
        name: "order-details",
        created() {
            console.log(this.$route);
        },
        methods: {
            back() {
                console.log(1)
                this.$router.push('/purchaseOrder');
            }
        },
        components: {
            detailsTitle, shopList
        }
    }
</script>

<style scoped>

</style>