<template>
    <div class="step clearfix">
        <div>
            <p class="title">Step2:选择提前支付日期</p>
            <div class="fl">
                <div class="step-computed">
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">提前入款日期：</span>
                        <span class="step-group-text">018.06.05</span>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">提前天数：</span>
                        <span class="step-group-text">20天</span>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">折扣率：</span>
                        <span class="step-group-text">1.5889%</span>
                        <el-button @click="addRaioBox = true" class="add-raio" type="danger" size="mini" icon="el-icon-upload2">增加折扣</el-button>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">折扣金额：</span>
                        <span class="step-group-text">¥100</span>
                    </div>
                </div>
            </div>
            <div class="fl date-pick">
                <fa-date-pick :moneyDate="moneyDate"></fa-date-pick>
                <p class="tc date-pick-desc">选择不同日期 对应不同折扣</p>
            </div>
        </div>
        <el-dialog title="增加折扣" top="300px" :visible.sync="addRaioBox" width="25%" :before-close="handleClose">
            <el-form  label-width="80px">
                <el-form-item label="折扣率(%)" >
                    <el-input placeholder="请输入折扣率"></el-input>
                </el-form-item>
                <el-form-item label="折扣金额">
                    <el-input placeholder="请输入折扣金额"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import FaDatePick from '@/components/my-date-pick'

    export default {
        name: "step-2",
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
                ],
                addRaioBox: false
            }
        },
        components: {
            FaDatePick,
        }
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
            .add-raio
                margin-left 20px
        .date-pick
            margin-left 100px
            margin-bottom 20px
            .date-pick-desc
                font-size $font-size-small
                color $color-grey
</style>