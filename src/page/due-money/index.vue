<template>
    <div class="purchase-order page-w block-center block-mg">
        <order-form @search="search" ></order-form>
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
            tableSet(opt) {
                if (opt.type == 1) {
                    this.$router.push({path: `/purchaseOrder/details?id=${opt.row.ponum}`});
                }
            }
        },
        components: {
            OrderForm, PayOrderList
        }
    }
</script>

<style scoped>

</style>