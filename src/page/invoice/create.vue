<template>
    <div class="page-w block-center block-mg create-invoice">
        <page-title>PO选择</page-title>
        <div class="table-bg table-pd">
            <div class="form-group flex flex-y-center block-child-mg">
                <span class="form-name">PO单号</span>
                <el-input class="form-group-input" placeholder="请输入PO单"></el-input>
                <el-button class="search-btn" @click="search" type="primary" icon="el-icon-search">查询</el-button>
            </div>
            <el-table class="block-child-mg" ref="multipleTable" :data="tableData3" style="width: 100%">
                <el-table-column type="selection" label="全选" width="55"></el-table-column>
                <el-table-column prop="poNum" label="订单编号"></el-table-column>
                <el-table-column prop="poMoney" label="订单金额"></el-table-column>
                <el-table-column prop="compareDate" label="对账日期"></el-table-column>
                <el-table-column prop="compareMoney" label="对账金额"></el-table-column>
                <el-table-column prop="occupyMoney" label="已开票金额"></el-table-column>
                <el-table-column prop="surplusMoney" label="可开票金额"></el-table-column>
            </el-table>
            <!--选中订单的商品明细-->
            <div class="form-group flex flex-y-center block-child-mg">
                <span class="form-name">物料明细</span>
            </div>
            <el-table class="block-child-mg" ref="multipleTable" :data="tableData3" style="width: 100%">
                <el-table-column prop="poNum" label="订单编号"></el-table-column>
                <el-table-column label="订单金额" align="center">
                    <template slot-scope="scope">
                        <el-popover @show="setEditVal(scope)" placement="top" class="shoushi" v-model="scope.row.popover">
                            <el-input autofocus="true" v-model="editVal"></el-input>
                            <div class="tr  block-child-mg">
                                <el-button size="small" @click="scope.row.popover = false">取消</el-button>
                                <el-button type="primary" size="small">确认</el-button>
                            </div>
                            <div slot="reference" class="name-wrapper">
                                {{ scope.row.poMoney }}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="compareDate" label="对账日期"></el-table-column>
                <el-table-column prop="compareMoney" label="对账金额"></el-table-column>
                <el-table-column prop="occupyMoney" label="已开票金额"></el-table-column>
                <el-table-column prop="surplusMoney" label="可开票金额"></el-table-column>
            </el-table>
            <div class="next tr block-child-mg">
                <el-button class="search-btn" @click="search" type="primary" size="small">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'

    export default {
        name: "create-invoice",
        data() {
            return {
                editVal: '',
                show: false,
                tableData3: [
                    {
                        poNum: 'PO123456789',
                        poMoney: 66322323,
                        compareDate: '2018-04-05',
                        compareMoney: 4000,
                        occupyMoney: 2000,
                        surplusMoney: 2000
                    }, {
                        poNum: 'PO123456789',
                        poMoney: 445666,
                        compareDate: '2018-04-05',
                        compareMoney: 4000,
                        occupyMoney: 2000,
                        surplusMoney: 2000
                    }, {
                        poNum: 'PO123456789',
                        poMoney: 421,
                        compareDate: '2018-04-05',
                        compareMoney: 4000,
                        occupyMoney: 2000,
                        surplusMoney: 2000
                    }, {
                        poNum: 'PO123456789',
                        poMoney: 123,
                        compareDate: '2018-04-05',
                        compareMoney: 4000,
                        occupyMoney: 2000,
                        surplusMoney: 2000
                    }],
                multipleSelection: []
            }
        },
        methods: {
            setEditVal(item){
                this.editVal = item.row.poMoney;
            },
            search() {

            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .create-invoice
        .form-name
            width 80px
        .search-btn
            margin-left 20px
</style>