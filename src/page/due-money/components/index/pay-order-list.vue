<template>
    <div class="overdraft-list block-mg">
        <page-title :showLoad="true" :showExport="true" @export-tabel="exportTable" @reload-table="reloadTable">应付款列表</page-title>
        <div class="index-table table-bg table-pd">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column fixed prop="ponum" align="left" label="订单编号" width="150"></el-table-column>
                <el-table-column prop="date" align="center" sortable="custom" label="订单日期"
                                 width="150"></el-table-column>
                <el-table-column align="center" label="状态" width="100">
                    <template slot-scope="scope">
                        <span>{{getStatusText(scope)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="money" align="right" sortable label="订单金额（¥）" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="对账日期" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="对账金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="已开票金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="未开票金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="已付款金额" width="150"></el-table-column>
            </el-table>
            <div class="tc pagination">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="1"
                        :page-size="tableConfig.pageSize"
                        layout="total,prev, pager, next, jumper"
                        :total="tableData.length"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {TABLE} from 'api/config';
    import pageTitle from '@/components/page-title';

    export default {
        name: "pay-order-list",

        data() {
            return {
                tableConfig: TABLE,
                //status 1 未发起对账 2 对账中 3 已对账 4对账失败 5开票中
                tableData: [
                    {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '8,42',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 3,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 4,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 5,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO123456789',
                        status: 1,
                        date: '2018.04.25',
                        poNum: 'PO123456789',
                        money: '98,842',
                        payDate: '2018.10.25'
                    }, {
                        ponum: 'PO9654321',
                        status: 2,
                        date: '2018.04.26',
                        poNum: 'PO123456789',
                        money: '10,842',
                        payDate: '2018.10.25'
                    }]
            }
        },
        methods: {
            handleClick(row,type) {
                this.$emit('tableSet',{
                    row,
                    type
                })
            },
            handleCurrentChange(page) {
                console.log(page);
            },
            exportTable() {

            },
            getStatusText(scope) {
                switch (scope.row.status) {
                    case 1:
                        return '未发起对账'
                    case 2:
                        return '对账中'
                    case 3:
                        return '已对账'
                    case 4:
                        return '对账失败'
                    case 5:
                        return '开票中'
                }
            },
            reloadTable() {

            },
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .overdraft-list
        .pagination
            margin 20px 0
</style>