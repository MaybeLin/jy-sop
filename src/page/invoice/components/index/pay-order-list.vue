<template>
    <div>
        <div class="overdraft-list block-mg">
            <page-title :showLoad="true" :showExport="true" @export-tabel="exportTable" @reload-table="reloadTable">发票列表
            </page-title>
            <div class="index-table table-bg table-pd">
                <el-table :data="invoiceList" style="width: 100%">
                    <el-table-column fixed prop="id" align="left" label="发票编号" width="80"></el-table-column>
                    <el-table-column prop="invoice_time" align="center" label="开票日期"
                                     width="150"></el-table-column>
                    <el-table-column prop="poids" align="center" label="关联PO单号"
                                     width="150"></el-table-column>
                    <el-table-column prop="invoice_time" align="right" label="应付日期" width="150"></el-table-column>
                    <el-table-column prop="invoice_money" align="center" label="金额(¥)" width="150"></el-table-column>
                    <el-table-column align="center" label="状态" width="180" prop="status"
                                     :filters="filters"
                                     :filter-method="filterHandler">
                        <template slot-scope="scope">
                            <!--invoice_status_number发票状态           0开票中 1已开票 2 寄送中 3 已确认 4不通过-->
                            <!--pay_status           支付状态           0未支付 1已支付 默认0-->
                            <!--paper_invoice_status 是否收到纸质发票    0未收到 1收到   默认0-->
                            <span v-if="scope.row.invoice_status_number != '2'">{{scope.row.invoice_status}}</span>
                            <span v-if="scope.row.invoice_status_number != '3' && scope.row.paper_invoice_status == '1'">未确认</span>
                            <span v-if="scope.row.invoice_status_number == '1'">未寄送</span>
                            <span v-if="parseInt(scope.row.invoice_status_number) > 1"
                                  v-text="scope.row.paper_invoice_status == '1' ? '已收票' : '未收票'"></span>
                            <span>{{getPayStatus(scope.row)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" align="left" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row,1)" type="text" size="small"><i
                                    class="el-icon-view"></i>查看
                            </el-button>
                            <el-button v-if="scope.row.invoice_status_number == '1'" @click="handleClick(scope.row,5)"
                                       type="text"
                                       size="small"><i class="el-icon-plus"></i>寄送
                            </el-button>
                            <el-button v-if="scope.row.invoice_status_number == 3" @click="handleClick(scope.row,3)"
                                       type="text"
                                       size="small"><i class="el-icon-plus"></i>提前支付
                            </el-button>
                            <el-button v-if="scope.row.invoice_status_number == 4" @click="handleClick(scope.row,4)"
                                       type="text"
                                       size="small"><i class="el-icon-plus"></i>编辑
                            </el-button>
                            <el-button v-if="scope.row.pay_status == '1'" @click="handleClick(scope.row,4)" type="text"
                                       size="small"><i class="el-icon-plus"></i>提前支付
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="tc pagination">
                    <el-pagination
                            @current-change="getPage"
                            :current-page="1"
                            :page-size="tableConfig.pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="tableConfig.len"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <add-invoic-call-back :invoicShow.sync="addInvoicStatus.invoic"></add-invoic-call-back>
        <add-invoic-logistics :logisticsShow.sync="addInvoicStatus.logistics"></add-invoic-logistics>
    </div>
</template>

<script>
    import {TABLE} from 'api/config';
    import pageTitle from '@/components/page-title';
    import addInvoicCallBack from '../add-invoice-status/add-invoic-callback';
    import addInvoicLogistics from '../add-invoice-status/add-invoic-logistics';
    import {getList, invoiceDownload} from 'api/invoice';
    import {exportTable} from '@/common/js/lib';
    import axios from 'axios';

    export default {
        name: "pay-order-list",
        props: {
            searchForm: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            searchFormUp: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                filters: [
                    {text: '开票中', value: 1},
                    {text: '已开票', value: 2},
                    {text: '已确认', value: 3},
                    {text: '不通过', value: 4},
                    {text: '寄送中', value: 5}
                ],
                addInvoicStatus: {
                    invoic: false, //发票信息弹框
                    logistics: false //物流信息弹框
                },
                tableConfig: {
                    pagesize: TABLE.pageSize,
                    len: 0
                },
                //status 1 开票中 2 已开票 3 已确认 4不通过 5寄送中 6 其他
                invoiceList: []
            };
        },
        created() {
            this.setForm(1);
        },
        watch: {
            searchFormUp() {
                this.setForm(1);
            }
        },
        methods: {
            setForm(page) {
                let data = this.searchForm;
                this.getInvoiceList({
                    page,
                    data
                });
            },
            getInvoiceList({page, data}) {
                getList(page, data).then(res => {
                    this.tableConfig.len = parseInt(res.data.total_count);
                    this.invoiceList = res.data.list;
                });
            },
            filterHandler(value, row, column) {
                const property = column['property'];
            },
            handleClick(row, type) {
                switch (type) {
                    case 1:
                        this.$emit('show-details', row.id);
                        break;
                    case 5:
                        this.addInvoicStatus.logistics = true;
                        break;
                    case 2:
                        this.addInvoicStatus.invoic = true;
                        break;
                    case 3:
                        this.$emit('apply-money', row.id);
                        break;

                }
            },
            //获取分页 第几页
            getPage(page) {
                this.setForm(page);
            },
            //导出
            exportTable() {
                exportTable('http://supplier.jyblcsop.cn/invoice/invoice_download', this.searchForm);
            },
            getPayStatus(row) {
                switch (row.pay_status) {
                    case '0':
                        return '未支付';
                    case '1':
                        return '已支付';
                }
            },
            reloadTable() {

            }
        },
        components: {
            pageTitle,
            addInvoicCallBack,
            addInvoicLogistics
        }
    };
</script>

<style scoped lang="stylus">
    .overdraft-list
        .pagination
            margin 20px 0
</style>