<template>
    <div class="purchase-order page-w block-center block-mg">
        <order-form @search="search"></order-form>
        <pay-order-list></pay-order-list>
    </div>
</template>

<script>
    import OrderForm from './components/form'
    import PayOrderList from './components/pay-order-list'
    export default {
        name: "purchase-order",
        methods: {
            search(form) {

            }
        },
        components: {
            OrderForm,PayOrderList
        }
    }
</script>

<style scoped>

</style>