<template>
    <div>
        <div class="overdraft-list block-mg">
            <page-title :showLoad="true" :showExport="true" @export-tabel="exportTable" @reload-table="reloadTable">发票列表
            </page-title>
            <div class="index-table table-bg table-pd">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="ponum" align="left" label="发票编号" width="150"></el-table-column>
                    <el-table-column prop="date" align="center" sortable="custom" label="开票日期"
                                     width="150"></el-table-column>
                    <el-table-column prop="date" align="center" sortable="custom" label="关联PO单号"
                                     width="150"></el-table-column>
                    <el-table-column prop="money" align="right" sortable label="应付日期" width="150"></el-table-column>
                    <el-table-column prop="payDate" align="center" label="金额(¥)" width="150"></el-table-column>
                    <el-table-column align="center" label="状态" width="150" prop="status"
                                     :filters="filters"
                                     :filter-method="filterHandler">
                        <template slot-scope="scope">
                            <span>{{getStatusText(scope)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" align="left" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button  @click="handleClick(scope.row,1)" type="text" size="small"><i class="el-icon-view"></i>查看</el-button>
                            <el-button v-if="scope.row.status == 1" @click="handleClick(scope.row,2)" type="text" size="small"><i class="el-icon-plus"></i>发票信息</el-button>
                            <el-button v-if="scope.row.status == 3" @click="handleClick(scope.row,3)" type="text" size="small"><i class="el-icon-plus"></i>提前支付</el-button>
                            <el-button v-if="scope.row.status == 4" @click="handleClick(scope.row,4)" type="text" size="small"><i class="el-icon-plus"></i>编辑</el-button>
                            <el-button v-if="scope.row.status == 5" @click="handleClick(scope.row,5)" type="text" size="small"><i class="el-icon-plus"></i>寄送信息</el-button>
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
        <add-invoic-call-back :invoicShow.sync="addInvoicStatus.invoic" ></add-invoic-call-back>
        <add-invoic-logistics :logisticsShow.sync="addInvoicStatus.logistics"></add-invoic-logistics>
    </div>
</template>

<script>
    import {TABLE} from 'api/config';
    import pageTitle from '@/components/page-title';
    import addInvoicCallBack from '../add-invoice-status/add-invoic-callback';
    import addInvoicLogistics from '../add-invoice-status/add-invoic-logistics';

    export default {
        name: "pay-order-list",
        data() {
            return {
                filters: [
                    {text: '开票中', value: 1},
                    {text: '已开票', value: 2},
                    {text: '已确认', value: 3},
                    {text: '不通过', value: 4},
                    {text: '寄送中', value: 5},
                ],
                addInvoicStatus: {
                    invoic: false, //发票信息
                    logistics: false //物流信息
                },
                tableConfig: TABLE,
                //status 1 开票中 2 已开票 3 已确认 4不通过 5寄送中 6 其他
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
            filterHandler(value, row, column) {
                const property = column['property'];

            },
            handleClick(row,type) {
                switch (type){
                    case 1:
                        this.$emit('show-details',row.ponum);
                        return;
                    case 2:
                        this.addInvoicStatus.invoic = true;
                        return;
                    case 5:
                        this.addInvoicStatus.logistics = true;
                        return;
                }
            },
            handleCurrentChange(page) {
                console.log(page);
            },
            exportTable() {

            },
            getStatusText(scope) {
                switch (scope.row.status) {
                    case 1:
                        return '开票中'
                    case 2:
                        return '已开票'
                    case 3:
                        return '已确认'
                    case 4:
                        return '不通过'
                    case 5:
                        return '寄送中'
                    case 6:
                        return '其他'
                }
            },
            reloadTable() {

            },
        },
        components: {
            pageTitle,
            addInvoicCallBack,
            addInvoicLogistics
        }
    }
</script>

<style scoped lang="stylus">
    .overdraft-list
        .pagination
            margin 20px 0
</style>