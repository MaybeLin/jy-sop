<template>
    <div class="create-details page-w block-center block-mg">
        <page-title>发票新增</page-title>
        <div class="table-bg table-pd clearfix index-table">
            <div class="details-text">
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">开票日期：</span>
                        <el-date-picker v-model="kaipiaoDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
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
                    <el-table-column align="center" prop="number" label="数量"></el-table-column>
                    <el-table-column align="center"  label="单价">
                        <template slot-scope="scope">
                            {{scope.row.price | moneyFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column class-name="table-tr" align="right" label="金额" width="120">
                        <template slot-scope="scope">
                            {{scope.row.money | moneyFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="rate" label="税率(%)" width="120"></el-table-column>
                    <el-table-column align="right"  label="税额" width="120">
                        <template slot-scope="scope">
                            {{scope.row.txt_money | moneyFormat}}
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
                    <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="create-up flex flex-y-center block-mg ">
                <div>上传<br>附件</div>
                <div class="block-child-mg-left">
                    <el-upload
                            class="upload"
                            name="attach"
                            drag
                            :action="api"
                            multiple>
                        <div class="el-upload__text">点击上传(附件不超过20m)</div>
                    </el-upload>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button @click="kaipiao" size="small" type="primary" icon="el-icon-check">保存</el-button>
                <el-button @click="" size="small" type="primary" plain icon="el-icon-printer">存草稿</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title';
    import {convertCurrency} from '@/common/js/number';
    import {getInvoiceInfo, docreateInvoice} from 'api/invoice';

    const API = process.env.API_ROOT + '/invoice/upload_attach';
    export default {
        name: "create-details",
        data() {
            return {
                paramsId: null, //po单选中后的id
                remark: null, //备注
                api: API,
                kaipiaoDate: null, //开票日期
                coreInfo: {}, //开票信息
                shopList: [], //物料信息
                total: {
                    total_money: '--',
                    total_txtmoney: '--'
                }
            };
        },
        created() {
            this.getParamsId();
        },
        mounted() {
            this.getInvoiceInfo();
        },
        computed:{
            allMoneyDaXie(){
                return convertCurrency(this.total.total_money + this.total.total_txtmoney);
            }
        },
        methods: {
            kaipiao() {
                if (!this.kaipiaoDate) {
                    this.$message.error('请选择开票日期!');
                    return;
                }
                docreateInvoice(this.paramsId, this.kaipiaoDate).then(res => {
                    console.log(res);
                });
            },
            getInvoiceInfo() {
                getInvoiceInfo(this.paramsId).then(res => {
                    this.shopList = res.data.list;
                    this.coreInfo = res.data.core_info;
                    this.total.total_money = parseFloat(res.data.total_money);
                    this.total.total_txtmoney = parseFloat(res.data.total_txtmoney);
                });
            },
            getParamsId() {
                this.paramsId = this.$route.query.params_id;
                this.api += `?params_id=${this.paramsId}`;
                if (this.paramsId === undefined) {
                    this.$router.push({
                        path: '/invoice/createPoSele'
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