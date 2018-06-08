<template>
    <div class="purchase-order page-w block-center block-mg">
        <order-form @search="search" @create-invoice="createInvoice"></order-form>
        <pay-order-list @apply-money="applyMoney" @show-details="showDetails" :searchForm="form" :searchFormUp="searchFormUp"></pay-order-list>
    </div>
</template>

<script>
    import OrderForm from './components/index/form';
    import PayOrderList from './components/index/pay-order-list';

    export default {
        name: "purchase-order",
        data() {
            return {
                form: {},
                searchFormUp: 1
            };
        },
        methods: {
            search(form) {
                this.form = form;
                this.searchFormUp += 1;
            },
            //创建发票
            createInvoice() {
                this.$router.push({path: '/invoice/createPoSele'});
            },
            //查看详情
            showDetails(id) {
                this.$router.push({path: `/invoice/invoiceDetails?invoiceid=${id}`});
            },
            applyMoney(id) {
                this.$router.push({path: `/beforeMoney?invoiceid=${id}`});
            }
        },
        components: {
            OrderForm, PayOrderList
        }
    };
</script>

<style scoped>

</style>