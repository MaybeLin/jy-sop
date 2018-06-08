<template>
    <div class="page-w block-mg block-center before-money">
        <page-title>提前支付申请</page-title>
        <step-one></step-one>
        <step-two :stat="stat"></step-two>
        <step-three></step-three>
        <div class="but tr">
            <el-button @click="doapplySteps" type="danger" icon="el-icon-check" size="small">提交申请</el-button>
        </div>
    </div>
</template>

<script>
    import StepOne from './components/step-1';
    import StepTwo from './components/step-2';
    import StepThree from './components/step-3';
    import pageTitle from '@/components/page-title';
    import {mapState} from 'vuex';
    import {doapplyStep} from 'api/apply';

    export default {
        name: "before-money",
        data() {
            return {
                invoiceId: '',
                stat: 0
            };
        },
        computed: {
            ...mapState({
                applyData: state => state.apply.applyData
            })
        },
        created() {
            this.getInvoiceId();
        },
        methods: {
            doapplySteps() {
                if(this.applyData.money == '') {
                    this.$message.error('请选择贴现日期');
                    return;
                }
                doapplyStep({
                    invoice_id: this.invoiceId,
                    advance_time: this.applyData.date,
                    advance_day: this.applyData.beforeDay,
                    advance_rate: this.applyData.zkl,
                    advance_money: (parseFloat(parseFloat(this.applyData.invoice_money).toFixed(2)) - this.applyData.money).toFixed(2)
                }).then(res => {
                    this.$router.push('/applyMoney');
                });
            },
            getInvoiceId() {
                this.invoiceId = this.$route.query.invoiceid;
                if (this.invoiceId === undefined) {
                    this.$router.push('/applyMoney');
                    return;
                }
                this.getApplyStep();
            },
            getApplyStep() {
                this.$store.dispatch('getApplyStep', this.invoiceId).then(() => {
                    this.stat = 1;
                });
            }
        },
        components: {
            pageTitle,
            StepOne,
            StepTwo,
            StepThree
        }
    };
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .before-money
        background $color-white

    .but
        padding 20px 50px
</style>