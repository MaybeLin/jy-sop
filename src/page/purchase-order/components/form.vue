<template>
    <div class="purchase-order-form">
        <page-title bg="#e0e0e0" color="#4b4b4b">查询条件</page-title>
        <div class="form-block clearfix">
            <div class="purchase-order-form-list">
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">采购单号</span>
                        <el-input class="form-group-input" v-model="formInline.poNum" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">创建日期</span>
                        <el-date-picker
                                v-model="formInline.poCreateDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">对账状态</span>
                        <el-select class="form-group-input" v-model="formInline.contrastStatus" placeholder="请选择">
                            <el-option label="已对账" value="1"></el-option>
                            <el-option label="未对账" value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">对账日期</span>
                        <el-date-picker
                                v-model="formInline.contrastDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">开票状态</span>
                        <el-select class="form-group-input" v-model="formInline.openStatus" placeholder="请选择">
                            <el-option label="已开票" value="1"></el-option>
                            <el-option label="未开票" value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">付款状态</span>
                        <el-select class="form-group-input" v-model="formInline.payStatus" placeholder="请选择">
                            <el-option label="已付款" value="1"></el-option>
                            <el-option label="未付款" value="2"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button size="small" type="danger" icon="el-icon-plus">新增</el-button>
                <el-button @click="search" size="small" type="primary" icon="el-icon-search">查询</el-button>
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
                    openStatus: '',    //开票状态
                    payStatus: ''       //付款状态
                },
            }
        },
        methods: {
            search() {
                this.$emit('search',this.formInline);
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
        .purchase-order-form-list
            padding 20px 50px
            .purchase-order-form-item
                margin-bottom 20px
                &:last-child
                    margin-bottom 0
                .form-group
                    margin-right 20px
                    .form-group-input
                        width 200px
                    .form-name
                        margin-right 20px
                        color $color-sup
                    .form-group-input-date
                        width 310px
                        height 30px
        .form-btn
            margin-right 20px
            padding-bottom 20px
</style>