<template>
    <div class="step clearfix">
        <p class="title">Step3:确认申请</p>
        <div class="step-computed">
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">提前付款日期：</span>
                <span class="step-group-text">{{applyData.date || '--'}}</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣前金额：</span>
                <span class="step-group-text" v-if="applyData.money">¥{{applyData.invoice_money | moneyFormat}}</span>
                <span class="step-group-text" v-else>--</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣金额：</span>
                <span class="step-group-text" v-if="applyData.money">-¥{{(applyData.invoice_money - applyData.money).toFixed(2) | moneyFormat}}</span>
                <span class="step-group-text" v-else>--</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣后应付款：</span>
                <span class="step-group-text" v-if="applyData.money">¥{{applyData.money | moneyFormat}}</span>
                <span class="step-group-text" v-else>--</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "step-3",
        computed: {
            ...mapState({
                applyData: state => state.apply.applyData
            })
        }
    };
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .step
        padding 0 50px
        .title
            color $color-main
            border-top 1px solid $color-grey
            padding-top 20px
        .step-computed
            font-size $font-size-small
            .step-group-name
                display inline-block
                width 90px
            .step-group-text
                display inline-block
</style>