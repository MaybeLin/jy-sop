<template>
    <div class="page-w block-center block-mg create-invoice">
        <page-title>PO选择</page-title>
        <div class="table-bg table-pd index-table">
            <div class="form-group flex flex-y-center block-child-mg">
                <span class="form-name">PO单号</span>
                <el-input class="form-group-input" placeholder="请输入PO单"></el-input>
                <el-button class="search-btn" @click="search" type="primary" icon="el-icon-search">查询</el-button>
            </div>
            <el-table @select="select" @select-all="select" class="block-child-mg" ref="multipleTable" :data="poList"
                      style="width: 100%">
                <el-table-column type="selection" label="全选" width="55"></el-table-column>
                <el-table-column prop="oid" label="订单编号"></el-table-column>
                <el-table-column prop="totalmoney" label="订单金额" align="center"></el-table-column>
                <el-table-column prop="reconciliation_date" label="对账日期"></el-table-column>
                <el-table-column prop="reconciliation_money" label="对账金额"></el-table-column>
                <el-table-column prop="yikaipiaomoney" label="已开票金额"></el-table-column>
                <el-table-column prop="kekaipiaomoney" label="可开票金额"></el-table-column>
            </el-table>
            <!--选中订单的商品明细-->
            <div class="form-group flex flex-y-center block-child-mg">
                <span class="form-name">物料明细</span>
            </div>
            <el-table class="block-child-mg" ref="multipleTable" :data="product" style="width: 100%">
                <el-table-column label="序号" type="index"></el-table-column>
                <el-table-column prop="product_name" label="产品名称" align="center"></el-table-column>
                <el-table-column prop="product_ spec" label="规格型号" align="center"></el-table-column>
                <el-table-column prop="measurement_unit" label="计量单位" align="center"></el-table-column>
                <el-table-column label="数量" align="center">
                    <template slot-scope="scope">
                        <el-popover @show="setEditVal(scope)" placement="top" class="shoushi"
                                    v-model="scope.row.popover">
                            <el-input autofocus="true" v-model="editVal"></el-input>
                            <div class="tr  block-child-mg">
                                <el-button size="small" @click="scope.row.popover = false">取消</el-button>
                                <el-button type="primary" @click="editNumber(scope)" size="small">确认</el-button>
                            </div>
                            <div slot="reference" class="name-wrapper">
                                {{ scope.row.godown_num }}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="ordergoods_num" label="已入库数量" align="center"></el-table-column>
                <el-table-column prop="notgodown_num" label="未入库数量" align="center"></el-table-column>
                <el-table-column prop="price" label="单价(含税)" align="right"></el-table-column>
                <el-table-column prop="totalmoney" label="金额(含税)" align="right">
                    <template slot-scope="scope">
                        {{ scope.row.godown_num * scope.row.price}}
                    </template>
                </el-table-column>
            </el-table>
            <div class="next tr block-child-mg">
                <el-button class="search-btn" @click="next" type="primary" size="small">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title';
    import {addInvoiceList, poProduct, createInvoice} from 'api/invoice';

    export default {
        name: "create-invoice",
        data() {
            return {
                editVal: '',
                poList: null,
                product: null
            };
        },
        created() {
            this.getAddInvoiceList();
        },
        methods: {
            //选中某一张po单获取物料
            getpoProduct(id) {
                poProduct(id).then(res => {
                    this.product = res.data.list;
                }).catch(error => {
                    console.log(error);
                });
            },
            //选中po单后
            select(selection) {
                let poId = '';
                selection.forEach(item => {
                    poId += item.oid + ',';
                });
                this.getpoProduct(poId);
            },
            getAddInvoiceList() {
                addInvoiceList(1).then(res => {
                    this.poList = res.data.list;
                });
            },
            search() {

            },
            productFormat() {
                let pooid = {};
                this.product.forEach((item, index) => {
                    if (pooid.hasOwnProperty(item.pooid)) {
                        pooid[item.pooid].list.push({
                            detail_id: item.id,
                            number: item.godown_num
                        });
                    } else {
                        pooid[item.pooid] = {};
                        pooid[item.pooid].list = [];
                        pooid[item.pooid].list.push({
                            detail_id: item.id,
                            number: item.godown_num
                        });
                    }
                });
                return pooid;
            },
            next() {
                //下一步 id放到url获取info
                let params = this.productFormat();
                createInvoice(params).then(res => {
                    this.$router.push({
                        path: '/invoice/createDetails',
                        query: {
                            params_id: res.data.params_id
                        }
                    });
                });
            },
            setEditVal(item) {
                this.editVal = item.row.godown_num;
            },
            editNumber(item) {
                if (this.editVal > item.row.less_number) {
                    this.$message.error(`数量不可大于剩余开票数量！当前剩余数量为${item.row.less_number}`);
                    return;
                }
                item.row.godown_num = this.editVal;
                item.row.popover = false;
            }
        },
        components: {
            pageTitle
        }
    };
</script>

<style scoped lang="stylus">
    .create-invoice
        .form-name
            width 80px
        .search-btn
            margin-left 20px
</style>