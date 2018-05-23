<template>
    <el-dialog @close="$emit('update:logisticsShow', false)" width="30%" title="纸质发票寄送信息" :visible.sync="visible" :show="logisticsShow">
        <el-form :model="invoice.form" label-width="80px">
            <el-form-item label="寄送方式">
                <el-select v-model="invoice.form.value"  placeholder="请选择寄送方式">
                    <el-option label="随货送达" value="1"></el-option>
                    <el-option label="快递" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="快递单号">
                <el-input v-model="invoice.form.oddNumber" placeholder="选填"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="invoice.form.mobile" placeholder="选填"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" size="small" @click="succ">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "add-invoic-callback",
        props: {
            logisticsShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: this.logisticsShow,
                invoice: {
                    form: {
                        value: '1',
                        oddNumber: '',
                        mobile: ''
                    }
                }
            }
        },
        watch: {
            show () {
                this.visible = this.show;
            }
        },
        methods:{
            succ(){
                console.log(this.invoice.form)
            }
        }
    }
</script>

<style scoped>

</style>