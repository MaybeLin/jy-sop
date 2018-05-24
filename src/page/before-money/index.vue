<template>
    <div class="page-w block-mg block-center">
        <page-title>提前支付申请</page-title>
        <fa-date-pick :moneyDate="moneyDate" ></fa-date-pick>
    </div>
</template>

<script>
    import FaDatePick from '@/components/my-date-pick'
    import pageTitle from '@/components/page-title'
    export default {
        name: "before-money",
        data() {
            return {
                moneyDate: [
                    {
                        date: '2018-5-24',
                        money: 1000
                    },
                    {
                        date: '2018-5-31',
                        money: 1000
                    }
                ]
            }
        },
        components: {
            FaDatePick,
            pageTitle
        }
    }
</script>

<style scoped>

</style>