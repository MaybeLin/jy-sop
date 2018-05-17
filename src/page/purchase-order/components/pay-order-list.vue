<template>
    <div class="overdraft-list block-mg">
        <page-title :showLoad="true" :showExport="true" @export-tabel="exportTable" @reload-table="reloadTable">采购订单列表
        </page-title>
        <div class="index-table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column fixed prop="ponum" align="center" label="订单编号" width="150"></el-table-column>
                <el-table-column prop="date" align="center" sortable="custom" label="订单日期"
                                 width="150"></el-table-column>
                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{getStatusText(scope)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="money" align="center" sortable label="订单金额（¥）" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="对账日期" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="对账金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="已开票金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="未开票金额" width="150"></el-table-column>
                <el-table-column prop="payDate" align="center" label="已付款金额" width="150"></el-table-column>
                <el-table-column fixed="right" align="center" label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-view"></i>查看
                        </el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-edit"></i>编辑
                        </el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i
                                class="el-icon-delete"></i>对账
                        </el-button>
                    </template>
                </el-table-column>
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
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
        data() {
            return {
                tableConfig: TABLE,
                tableData: [
                    {
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
            exportTable() {

            },
            reloadTable() {

            },
            getStatusText(scope) {
                switch (scope.row.status) {
                    case 1:
                        return '对账中'
                    case 2:
                        return '未开票'
                    case 3:
                        return '部分付款'
                }
            },
            handleCurrentChange(page) {
                console.log(page);
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .overdraft-list
        background #ffffff
        .index-table
            padding 10px
            .pagination
                margin 20px 0
</style>