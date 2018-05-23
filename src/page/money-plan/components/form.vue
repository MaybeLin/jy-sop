<template>
    <div class="purchase-order-form">
        <page-title bg="#e0e0e0" color="#4b4b4b">资金需求录入</page-title>
        <div class="form-block clearfix">
            <div class="desc form-pd">
                <p>使用资金计划可以帮助你更快的筹划资金。</p>
                <p>输入你需要的资金和需求日期，系统会自动搜索并匹配你的已确认发票来满足你设定日期和金额的资金需求。</p>
            </div>
            <div class="purchase-order-form-list form-pd">
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">需要资金总额(元)</span>
                        <el-input class="form-group-input" v-model="formInline.poNum" placeholder="请输入金额"></el-input>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">需要资金日期</span>
                        <el-date-picker
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button @click="search" size="small" type="primary" icon="el-icon-search">运行资金计划</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'

    export default {
        name: "purchase-order-form",
        data() {
            return {
                formInline: {
                    poNum: '',        //po单号
                    poCreateDate: '', //创建日期
                    contrastDate: '', //对账日期
                    contrastStatus: '',//对账状态
                    openStatus: '1',    //开票状态
                    payStatus: '1'       //付款状态
                },
            }
        },
        methods: {
            createInvoice() {
                this.$emit('create-invoice');
            },
            search() {
                this.$emit('search', this.formInline);
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .form-block
        background #ffffff
        .desc
            color $color-grey
            font-size $font-size-medium
        .purchase-order-form-list
            .purchase-order-form-item
                margin-bottom 20px
                &:last-child
                    margin-bottom 0
                .form-name
                    width 130px
                .form-group-input
                    width 220px
        .form-btn
            margin-right 20px
            padding-bottom 20px
</style>