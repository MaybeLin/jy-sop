<template>
    <div class="page-w block-mg block-center before-money">
        <page-title>提前支付申请</page-title>
        <step-one></step-one>
        <step-two></step-two>
        <step-three></step-three>
        <div class="but tr">
            <el-button  type="danger" icon="el-icon-check" size="small">提交申请</el-button>
        </div>
    </div>
</template>

<script>
    import StepOne from './components/step-1'
    import StepTwo from './components/step-2'
    import StepThree from './components/step-3'
    import pageTitle from '@/components/page-title'
    export default {
        name: "before-money",
        data() {
            return {
                invoice: {
                    id: 'PO12345678',
                    money: 8900,
                    date: '2018.06.25',
                    paymentDay: 90,
                }
            }
        },
        components: {
            pageTitle,
            StepOne,
            StepTwo,
            StepThree,
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .before-money
        background $color-white
    .but
        padding 20px 50px
</style>