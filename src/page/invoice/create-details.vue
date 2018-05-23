<template>
    <div class="create-details page-w block-center block-mg">
        <page-title>发票新增</page-title>
        <div class="table-bg table-pd clearfix">
            <div class="details-text">
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">开票日期：</span>
                        <el-date-picker
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">购货单位：</span>
                        <span class="form-text">洁丽雅毛巾有限公司</span>
                    </div>
                </div>
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">纳税人识别号：</span>
                        <span class="form-text">1234567880865</span>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">开户行、开户银行：</span>
                        <span class="form-text">【招商】622717271829</span>
                    </div>
                </div>
                <div class="flex">
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">地址：</span>
                        <span class="form-text">陕西省临汾是ok县31-2-103</span>
                    </div>
                    <div class="form-group flex flex-y-center block-child-mg">
                        <span class="form-name ">电话：</span>
                        <span class="form-text">0045-18291002</span>
                    </div>
                </div>
            </div>
            <div class="details-table">
                <el-table show-summary :summary-method="getSummaries" class="block-child-mg" ref="multipleTable" :data="tableData3" style="width: 100%">
                    <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
                    <el-table-column align="center" prop="name" label="货物或应税劳务名称" ></el-table-column>
                    <el-table-column align="center" prop="type" label="规格型号"></el-table-column>
                    <el-table-column align="center" prop="unit" label="计量单位"></el-table-column>
                    <el-table-column align="center" label="数量">
                        <template slot-scope="scope">
                            <el-popover @show="setEditVal(scope)" placement="top" class="shoushi"
                                        v-model="scope.row.popover">
                                <el-input autofocus="true" v-model="editVal"></el-input>
                                <div class="tr  block-child-mg">
                                    <el-button size="small" @click="scope.row.popover = false">取消</el-button>
                                    <el-button type="primary" @click="editNumber(scope)" size="small">确认</el-button>
                                </div>
                                <div slot="reference" class="name-wrapper">
                                    {{ scope.row.number }}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column header-cell-class-name="aaaa" align="center" prop="price" label="单价"></el-table-column>
                    <el-table-column class-name="table-tr" align="center" prop="money" label="金额" >
                        <template slot-scope="scope">
                            <div v-text="scope.row.number ? (scope.row.number * scope.row.price).toLocaleString() : (scope.row.money).toLocaleString()"></div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="raio" label="税率(%)"></el-table-column>
                    <el-table-column align="center" prop="raioMoney" label="税额"></el-table-column>
                </el-table>
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
                            drag
                            :action="api"
                            multiple>
                        <div class="el-upload__text">点击上传(附件不超过20m)</div>
                    </el-upload>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button size="small" type="primary" icon="el-icon-check">保存</el-button>
                <el-button @click="search" size="small" type="primary" plain icon="el-icon-printer">存草稿</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'
    import { convertCurrency } from '@/common/js/number'
    const API = process.env.API_ROOT + '/up';
    export default {
        name: "create-details",
        data() {
            return {
                api: API,
                editVal: '',
                tableData3: [
                    {
                        id:1,
                        type: '#34',
                        unit: '个',
                        number: 1000,
                        raio: 16,
                        price: 1000,
                        money: 1000000,
                        raioMoney: '1,600'
                    }, {
                        id:2,
                        type: '#36',
                        unit: '条',
                        number: 1000,
                        raio: 16,
                        price: 3,
                        money: 3000,
                        raioMoney: '1,600'
                    }, {
                        id:3,
                        raio: 16,
                        money: -1000,
                        raioMoney: '1,600'
                    }],
            }
        },
        mounted(){
          this.pushTable();
        },
        methods: {
            pushTable(){
                // console.log(this.$refs.multipleTable)
            },
            //合计 计算金额的和
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                        return;
                    }
                    if (column.property == 'money' || column.property == 'raioMoney') {
                        const values = data.map(item => {
                            return item[column.property];
                        });
                        sums[index] = values.reduce((prev,curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        },0).toLocaleString()
                    }
                })
                return sums;
            },
            setEditVal(item) {
                this.editVal = item.row.number;
            },
            editNumber(item) {
                item.row.number = this.editVal;
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .form-group
        .form-name
            width 140px
        .form-text
            width 220px
</style>