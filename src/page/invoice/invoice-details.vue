<template>
    <div class="create-details page-w block-center block-mg">
        <page-title>发票详情</page-title>
        <div class="table-bg table-pd clearfix">
            <div class="details-text">
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">开票日期：</span>
                        <span class="form-text">{{coreInfo.invoice_time}}</span>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">购货单位：</span>
                        <span class="form-text">{{coreInfo.enterprise_name}}</span>
                    </div>
                </div>
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">纳税人识别号：</span>
                        <span class="form-text">{{coreInfo.invoice_number}}</span>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">开户行、开户银行：</span>
                        <span class="form-text">【{{coreInfo.bank_name}}】{{coreInfo.bank_code}}</span>
                    </div>
                </div>
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">地址：</span>
                        <span class="form-text">{{coreInfo.contacts_addr}}</span>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">电话：</span>
                        <span class="form-text">{{coreInfo.invoice_mobile}}</span>
                    </div>
                </div>
            </div>
            <div class="details-table">
                <el-table class="block-child-mg" ref="multipleTable" :data="shopList" style="width: 100%">
                    <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
                    <el-table-column align="center" prop="product_name" label="货物或应税劳务名称"></el-table-column>
                    <el-table-column align="center" prop="product_spec" label="规格型号"></el-table-column>
                    <el-table-column align="center" prop="measurement_unit" label="计量单位"></el-table-column>
                    <el-table-column align="center" prop="num" label="数量"></el-table-column>
                    <el-table-column align="center"  label="单价">
                        <template slot-scope="scope">
                            {{scope.row.price | moneyFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column class-name="table-tr" align="right" label="金额" width="120">
                        <template slot-scope="scope">
                            {{scope.row.totalmoney | moneyFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="tax_rate" label="税率(%)" width="120">
                        <template slot-scope="scope">
                            {{parseFloat(scope.row.tax_rate) * 100}}
                        </template>
                    </el-table-column>
                    <el-table-column align="right"  label="税额" width="120">
                        <template slot-scope="scope">
                            {{scope.row.tax_money | moneyFormat}}
                        </template>
                    </el-table-column>
                </el-table>
                <div class="zongji flex">
                    <div class="flex-1">合计</div>
                    <div style="width: 120px" class="tr">{{total.total_money | moneyFormat}}</div>
                    <div style="width: 120px"></div>
                    <div style="width: 120px" class="tr">{{total.total_txtmoney | moneyFormat}}</div>
                </div>
                <div class="zongji flex">
                    <div class="flex-1">价税合计</div>
                    <div style="width: 800px" class="tc">{{allMoneyDaXie}}</div>
                    <div style="width: 120px" class="tr">{{total.total_money + total.total_txtmoney | moneyFormat}}</div>
                </div>
            </div>
            <div class="make flex flex-y-center block-mg">
                <div>备注</div>
                <div class="block-child-mg-left" style="width: 300px">
                    <el-input type="textarea" :rows="2" :disabled="true" value="我是备注的信息"></el-input>
                </div>
            </div>
            <div class="create-up flex flex-y-center block-mg ">
                <div>附件</div>
                <div class="block-child-mg-left">
                    <a :href="'http://' + coreInfo.attachment">{{coreInfo.attachment}}</a>
                </div>
            </div>
            <div class="make flex flex-y-center block-mg">
                <div>发票状态</div>
                <div class="block-child-mg-left" style="width: 300px">{{coreInfo.invoice_status}}</div>
            </div>
            <div class="make flex flex-y-center block-mg">
                <div>付款日期</div>
                <div class="block-child-mg-left" style="width: 300px">待客户确认</div>
            </div>
            <div class="make flex flex-y-center block-mg">
                <div>税务系统验证</div>
                <div class="block-child-mg-left" style="width: 300px">已开票，信息无误，状态正常</div>
            </div>
            <div class="form-btn fr">
                <el-button size="small" type="primary" icon="el-icon-check">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title';
    import {convertCurrency} from '@/common/js/number';
    import {getInvoiceDetail} from 'api/invoice';

    const API = process.env.API_ROOT + '/up';
    export default {
        name: "create-details",
        data() {
            return {
                invoiceId: null,
                api: API,
                coreInfo: {}, //开票信息
                shopList: [], //物料信息
                total: {
                    total_money: '--',
                    total_txtmoney: '--'
                }
            };
        },
        computed:{
            allMoneyDaXie(){
                return convertCurrency(this.total.total_money + this.total.total_txtmoney);
            }
        },
        created() {
            this.getInvoiceId();
        },
        mounted() {
            this.getInvoiceDetail();
        },
        methods: {
            getInvoiceDetail() {
                getInvoiceDetail(this.invoiceId).then(res => {
                    this.shopList = res.data.list;
                    this.coreInfo = res.data.core_info;
                    this.total.total_money = parseFloat(res.data.total_money);
                    this.total.total_txtmoney = parseFloat(res.data.total_txtmoney);
                })
            },
            getInvoiceId() {
                this.invoiceId = this.$route.query.invoiceid;
                if (this.invoiceId === undefined) {
                    this.$router.push({
                        path: '/invoice'
                    });
                }
            }
        },
        components: {
            pageTitle
        }
    };
</script>

<style scoped lang="stylus">
    .form-group
        .form-name
            width 140px
        .form-text
            width 220px
    .zongji > div
        padding 0 10px
        line-height 35px
</style>