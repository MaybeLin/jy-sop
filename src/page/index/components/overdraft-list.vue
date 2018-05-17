<template>
    <div class="overdraft-list block-mg">
        <page-title>可提前支付账款列表</page-title>
        <div class="index-table">
            <el-table :data="tableData"  style="width: 100%" @sort-change="getParms">
                <el-table-column prop="cardId" align="center" label="发票id" width="150"></el-table-column>
                <el-table-column prop="date" align="center" sortable="custom" label="开票日期"></el-table-column>
                <el-table-column prop="poNum" align="center" label="采购订单"></el-table-column>
                <el-table-column prop="money" align="center" sortable label="发票金额（¥）"></el-table-column>
                <el-table-column prop="payDate" align="center" label="计划付款日期"></el-table-column>
                <el-table-column label="申请提前支付" width="150">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-delete"></i>立即申请</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="tc show-more-list">
                <i class="el-icon-caret-bottom"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'
    export default {
        name: "overdraft-list",
        methods: {
            handleClick(row) {
                console.log(row);
            },
            getParms(row){
                console.log(row)
            }
        },
        data() {
            return {
                tableData: [{
                    cardId: 'VAT123456789',
                    date: '2018.04.25',
                    poNum: 'PO123456789',
                    money: '98,842',
                    payDate: '2018.10.25'
                }, {
                    cardId: 'VAT123456789',
                    date: '2018.04.26',
                    poNum: 'PO123456789',
                    money: '10,842',
                    payDate: '2018.10.25'
                }]
            }
        },
        components:{
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .overdraft-list
        background #ffffff
        .index-table
            padding 10px
        .show-more-list i
            color #c0d2e7
</style>