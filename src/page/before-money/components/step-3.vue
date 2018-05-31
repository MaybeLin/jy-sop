<template>
    <div class="step clearfix">
        <p class="title">Step3:确认申请</p>
        <div class="step-computed">
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">提前付款日期：</span>
                <span class="step-group-text">2018.06.05</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣前金额：</span>
                <span class="step-group-text">¥8,900</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣金额：</span>
                <span class="step-group-text">-¥100</span>
            </div>
            <div class="step-two-group block-child-mg">
                <span class="step-group-name">折扣后应付款：</span>
                <span class="step-group-text">¥8,800</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "step-3"
    }
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