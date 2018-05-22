<template>
    <div class="purchase-order page-w block-center block-mg">
        <order-form @search="search" @create-invoice="createInvoice"></order-form>
        <pay-order-list @show-details="showDetails" ></pay-order-list>
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
            //创建发票
            createInvoice() {
                this.$router.push({path:'/invoice/createPoSele'});
            },
            //查看详情
            showDetails(id) {
                this.$router.push({path:`/invoice/invoiceDetails?invoiceid=${id}`});
            }
        },
        components: {
            OrderForm, PayOrderList
        }
    }
</script>

<style scoped>

</style>