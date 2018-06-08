<template>
    <div class="overdraft-list block-mg">
        <page-title :showLoad="true" :showExport="true" @export-tabel="exportTable" @reload-table="reloadTable">应付款列表
        </page-title>
        <div class="index-table table-bg table-pd">
            <el-table :data="applyListArr" style="width: 100%">
                <el-table-column fixed prop="id" align="left" label="申请编号" width="80"></el-table-column>
                <el-table-column prop="add_time" align="center" sortable="custom" label="申请日期"
                                 width="150"></el-table-column>
                <el-table-column prop="advance_time" align="center" label="提前付款日期" width="100"></el-table-column>
                <el-table-column prop="money" align="center" label="申请方式" width="150">
                    <template slot-scope="scope">
                        <span v-text="scope.row.apply_type === '1' ? '发票' : '资金计划'"></span>
                    </template>
                </el-table-column>
                <el-table-column prop="invoice_money" align="center" label="发票金额" width="150"></el-table-column>
                <el-table-column prop="advance_rate" align="center" label="折扣率" width="150"></el-table-column>
                <el-table-column prop="advance_money" align="center" label="折扣金额" width="150"></el-table-column>
                <el-table-column prop="advance_day" align="center" label="折扣后应付款" width="150"></el-table-column>
                <el-table-column prop="status" align="center" label="状态" width="150"></el-table-column>
                <el-table-column fixed="right" prop="payDate" align="center" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row,1)" type="text" size="small"><i
                                class="el-icon-view"></i>查看
                        </el-button>
                        <el-button v-if="scope.row.status_number === '0'" @click="handleClick(scope.row,1)" type="text"
                                   size="small"><i class="el-icon-plus"></i>提交申请
                        </el-button>
                        <el-button v-if="scope.row.reconciliation_status === '3'" @click="handleClick(scope.row,1)" type="text"
                                   size="small"><i class="el-icon-plus"></i>编辑
                        </el-button>
                        <el-button v-if="scope.row.reconciliation_status === '0' || scope.row.reconciliation_status === '3'" @click="handleClick(scope.row,1)" type="text"
                                   size="small"><i class="el-icon-plus"></i>删除
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
                        :total="total"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {TABLE} from 'api/config';
    import pageTitle from '@/components/page-title';
    import {applyList} from 'api/apply';

    export default {
        name: "pay-order-list",
        props: {
            searchIndex: {
                type: Number,
                default: 0
            },
            searchForm: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        data() {
            return {
                tableConfig: TABLE,
                //status 1 未发起对账 2 对账中 3 已对账 4对账失败 5开票中
                applyListArr: [
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
                    }],
                total: 0
            };
        },
        watch: {
            searchIndex() {
                this.setForm(1);
            }
        },
        created() {
            this.setForm(1);
        },
        methods: {
            setForm(page) {
                this.getApplyList({
                    page,
                    data: this.searchForm
                });
            },
            getApplyList({page, data}) {
                applyList(page, data).then(res => {
                    this.applyListArr = res.data.list;
                    this.total = parseInt(res.data.total_count);
                });
            },
            handleClick(row, type) {
                this.$emit('tableSet', {
                    row,
                    type
                });
            },
            handleCurrentChange(page) {
                this.setForm(page);
            },
            exportTable() {

            },
            getStatusText(scope) {
                switch (scope.row.status) {
                    case 1:
                        return '未发起对账';
                    case 2:
                        return '对账中';
                    case 3:
                        return '已对账';
                    case 4:
                        return '对账失败';
                    case 5:
                        return '开票中';
                }
            },
            reloadTable() {

            }
        },
        components: {
            pageTitle
        }
    };
</script>

<style scoped lang="stylus">
    .overdraft-list
        .pagination
            margin 20px 0
</style>