<template>
    <div class="step clearfix">
        <div>
            <p class="title">Step2:选择提前支付日期</p>
            <div class="fl">
                <div class="step-computed">
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">提前入款日期：</span>
                        <span class="step-group-text">{{applyData.date}}</span>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">提前天数：</span>
                        <span class="step-group-text">{{applyData.beforeDay || '--'}}天</span>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">折扣率：</span>
                        <span class="step-group-text">{{applyData.zkl || '--'}}%</span>
                        <el-button @click="showAddZklBox" class="add-raio" type="danger" size="mini"
                                   icon="el-icon-upload2">增加折扣
                        </el-button>
                    </div>
                    <div class="step-two-group block-child-mg">
                        <span class="step-group-name">折扣金额：</span>
                        <span class="step-group-text" v-if="applyData.money">¥{{(applyData.invoice_money - applyData.money).toFixed(2) | moneyFormat}}</span>
                        <span class="step-group-text" v-else>--</span>
                    </div>
                </div>
            </div>
            <div class="fl date-pick">
                <fa-date-pick @seleDay="seleDay" :moneyDate="moneyDate"></fa-date-pick>
                <p class="tc date-pick-desc">选择不同日期 对应不同折扣</p>
            </div>
        </div>
        <el-dialog title="增加折扣" top="10%" :visible.sync="addRaioBox" width="25%" :before-close="setZkMoneyBoxClose">
            <el-form label-width="80px">
                <el-form-item label="折扣率(%)">
                    <el-input @input="getZkl" placeholder="请输入折扣率" v-model="setZkl"></el-input>
                </el-form-item>
                <el-form-item label="折扣金额">
                    <el-input @input="getZkMoney" placeholder="请输入折扣金额" v-model="setZkMoney"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="setZklMoney">确 定</el-button>
                <el-button @click="setZkMoneyBoxClose">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import FaDatePick from '@/components/my-date-pick';

    export default {
        name: "step-2",
        props: {
            //是否获取到日期数据
            stat: {
                type: Number,
                default: 0
            }
        },
        watch: {
            //vuex获取到值 获取日期差
            stat(val) {
                if (val == 1) {
                    this.getDayMoney();
                }
            }
        },
        data() {
            return {
                moneyDate: [],
                addRaioBox: false,
                setZkl: '',
                setZkMoney: ''
            };
        },
        computed: {
            ...mapState({
                applyData: state => state.apply.applyData
            })
        },
        methods: {
            setZklMoney() {
                let defaultMoney = parseFloat(this.getInvoiceZheKouMoney());
                if (this.setZkMoney < defaultMoney){
                    this.$message.error('折扣金额不可小于默认折扣金额!');
                    this.setZkMoney = defaultMoney;
                    this.getZkMoney();
                    return;
                }
                this.$store.commit('SET_APPLY_DATA_ZKL',this.setZkl);
                this.$store.commit('SET_APPLY_DATA_MONEY',this.getInvoiceMoney() - this.setZkMoney);
                this.addRaioBox = false;
            },
            showAddZklBox() {
                this.addRaioBox = true;
            },

            getZkl() {
                let invoiceMoney = this.getInvoiceMoney();
                let zkl = parseFloat((parseFloat(this.setZkl)).toFixed(4));
                this.setZkMoney =  (parseFloat((invoiceMoney * zkl).toFixed(2))).toFixed(2);
                if(this.setZkl == '') this.setZkMoney = '';
            },
            getZkMoney() {
                let invoiceMoney = this.getInvoiceMoney();
                let money = parseFloat(parseFloat(this.setZkMoney).toFixed(2));
                if (money > invoiceMoney) {
                    this.$message.error('折扣金额不可超出发票金额!');
                    this.setZkMoney = invoiceMoney;
                    money = invoiceMoney;
                }
                this.setZkl = (money / invoiceMoney).toFixed(4);
                if(this.setZkMoney == '') this.setZkl = '';
            },
            //点击某一天 回调
            seleDay(row) {
                for (let i in row) {
                    if (i == 'beforeDay' || i == 'zkl' || i == 'money' || i == 'date') {
                        this.$store.dispatch('getApplyAsyncKey', {
                            key: i,
                            value: row[i]
                        }).then(() => {
                            //设置折扣和折扣金额
                            this.setZkl = this.applyData.zkl;
                            this.setZkMoney = (parseFloat(this.applyData.invoice_money) - parseFloat(this.applyData.money)).toFixed(2);
                        });
                    }
                }
            },
            getDayMoney() {
                //应付日期
                let date = new Date(this.applyData.pay_time);
                //今天0点时间戳
                let indexDay = new Date();
                indexDay.setHours(0, 0, 0, 0);
                //距离应付多少天
                let cha = (date.getTime() - indexDay.getTime()) / (86400 * 1000);
                //计算距离每天的值
                for (let i = cha; i >= 1; i--) {
                    let chaDate = new Date(indexDay.getTime() + (86400 * 1000 * (cha - i)));
                    let y = chaDate.getFullYear();
                    let m = chaDate.getMonth() + 1;
                    let d = chaDate.getDate();
                    this.moneyDate.push({
                        beforeDay: i,
                        date: `${y}-${m}-${d}`
                    });
                }
                this.getDaysZhekou();
            },
            getDaysZhekou() {
                let rate = parseFloat((parseFloat(this.applyData.advance_rate) / 100).toFixed(4));
                let invoiceMoney = this.getInvoiceMoney();
                this.moneyDate.forEach(item => {
                    let zkl = parseFloat((item.beforeDay * rate / 360).toFixed(4));
                    item['zkl'] = zkl;
                    item['money'] = (invoiceMoney - (parseFloat((invoiceMoney * zkl).toFixed(2)))).toFixed(2);
                });
            },
            //关闭弹框 恢复默认值
            setZkMoneyBoxClose() {
                this.addRaioBox = false;
                this.setZkl = this.applyData.zkl;
                this.setZkMoney = (parseFloat(this.applyData.invoice_money) - parseFloat(this.applyData.money)).toFixed(2);
            },
            //获取发票金额
            getInvoiceMoney() {
                return parseFloat(parseFloat(this.applyData.invoice_money).toFixed(2));
            },
            //获取折扣金额
            getInvoiceZheKouMoney() {
                return (this.getInvoiceMoney() - parseFloat(parseFloat(this.applyData.money).toFixed(2))).toFixed(2);
            },
        },
        components: {
            FaDatePick
        }
    };
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .step
        padding 0 50px
        .title
            color $color-main
            border-top 1px solid $color-grey
            padding-top 20px
        .step-computed
            font-size $font-size-small
            .step-group-name
                display inline-block
                width 90px
            .step-group-text
                display inline-block
            .add-raio
                margin-left 20px
        .date-pick
            margin-left 100px
            margin-bottom 20px
            .date-pick-desc
                font-size $font-size-small
                color $color-grey
</style>