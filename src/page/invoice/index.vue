<template>
    <div class="purchase-order page-w block-center block-mg">
        <order-form @search="search" @create-invoice="createInvoice"></order-form>
        <pay-order-list @tableSet="tableSet" ></pay-order-list>
        <router-view></router-view>
    </div>
</template>

<script>
    import OrderForm from './components/index/form'
    import PayOrderList from './components/index/pay-order-list'

    export default {
        name: "purchase-order",
        methods: {
            search(form) {

            },
            createInvoice() {
                this.$router.push({path:'/invoice/createPoSele'});
            },
            tableSet(opt) {

            }
        },
        components: {
            OrderForm, PayOrderList
        }
    }
</script>

<style scoped>

</style>