<template>
    <div class="overdraft-list block-mg">
        <page-title>选择可提前支付发票</page-title>
        <div class="index-table table-bg table-pd clearfix">
            <el-table show-summary :summary-method="getSummaries" class="block-child-mg" ref="multipleTable" :data="tableData3" style="width: 100%">
                <el-table-column type="selection" label="全选" width="60"></el-table-column>
                <el-table-column prop="invoice" label="发票号"></el-table-column>
                <el-table-column prop="date" label="开票日期"></el-table-column>
                <el-table-column prop="paydate" label="提前付款日期"></el-table-column>
                <el-table-column prop="advance_day" label="提前天数(天)"></el-table-column>
                <el-table-column prop="invoice_money" label="发票金额(¥)"></el-table-column>
                <el-table-column prop="raio" label="折扣率"></el-table-column>
                <el-table-column prop="raio_money" label="折扣金额"></el-table-column>
                <el-table-column prop="raio_pay" label="折扣后应付款"></el-table-column>
            </el-table>
            <div class="form-btn fr block-child-mg">
                <el-button @click="search" size="small" type="danger" icon="el-icon-check">我要提前支付</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title';

    export default {
        name: "pay-order-list",
        data() {
            return {
                //status 1 开票中 2 已开票 3 已确认 4不通过 5寄送中 6 其他
                tableData3: [
                    {
                        invoice: 'PO123456789',
                        date: '2018-05-31',
                        paydate: '2018-05-31',
                        invoice_money: 2000,
                        advance_day: 10,
                        raio: 16,
                        raio_money: 2000,
                        raio_pay: 2000
                    }, {
                        invoice: 'PO123456789',
                        date: '2018-05-31',
                        paydate: '2018-05-31',
                        invoice_money: 2000,
                        advance_day: 10,
                        raio: 16,
                        raio_money: 2000,
                        raio_pay: 2000
                    }],
            }
        },
        methods: {
            handleCurrentChange(){

            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                        return;
                    }
                    if (column.property == 'invoice_money' || column.property == 'raio_money' || column.property == 'raio_pay') {
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