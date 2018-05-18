<template>
    <div class="order-details-title">
        <page-title>表头信息</page-title>
        <div class="form-block clearfix">
            <div class="purchase-order-form-list form-pd">
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">采购单号：</div>
                        <div class="form-text">PO123456789</div>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">客户名称：</div>
                        <div class="form-text">洁丽雅毛巾有限公司</div>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">创建日期：</div>
                        <div class="form-text">2018.04.02</div>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">电子邮件：</div>
                        <div class="form-text">ap@jlymj.com</div>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">采购金额：</div>
                        <div class="form-text">$20000.00</div>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">送货地址：</div>
                        <div class="form-text">浙江省杭州市余杭区100-3</div>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">订单状态：</div>
                        <div class="form-text">已对账</div>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">联系电话：</div>
                        <div class="form-text">0574-89892324</div>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">已开票金额：</div>
                        <div class="form-text">$2000.00</div>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">备注：</div>
                        <div class="form-text">送货上门</div>
                    </div>
                </div>
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <div class="form-name">付款账期：</div>
                        <div class="form-text">收票后90天</div>
                    </div>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button size="small" type="danger" icon="el-icon-plus">创建发票</el-button>
                <el-button  size="small" type="primary" icon="el-icon-search">导出PO</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'

    export default {
        name: "order-details-title",
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
            .purchase-order-form-item
                margin-bottom 20px
                &:last-child
                    margin-bottom 0
                .form-group
                    .form-name
                        width 100px
                        color $color-black
                    .form-text
                        color $color-sup
                        width 300px
        .form-btn
            margin-right 20px
            padding-bottom 20px
</style>