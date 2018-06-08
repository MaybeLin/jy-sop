<template>
    <div class="step form-pd">
        <p class="title">Step1:选择提前支付日期</p>
        <div class="invoice-details">
            <div class="step-group flex">
                <div class="block-child-mg">
                    <span class="step-group-name">发票号码：</span>
                    <span class="step-group-text">{{applyData.invoice_num}}</span>
                </div>
                <div class="block-child-mg">
                    <span class="step-group-name" style="width: 90px">发票账期：</span>
                    <span class="step-group-text">{{applyData.zhangqi}}</span>
                </div>
            </div>
            <div class="step-group flex">
                <div class="block-child-mg">
                    <span class="step-group-name">发票金额：</span>
                    <span class="step-group-text">¥{{applyData.invoice_money | moneyFormat}}</span>
                </div>
                <div class="block-child-mg">
                    <span class="step-group-name" style="width: 90px">发票应付日期：</span>
                    <span class="step-group-text">{{applyData.pay_time}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "step-1",
        computed: {
            ...mapGetters({
                applyData: 'applyData'
            })
        }
    };
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .step
        .title
            color $color-main
        .invoice-details
            font-size $font-size-small
            .step-group-name
                display inline-block
                width 60px
            .step-group-text
                display inline-block
                width 200px
</style>