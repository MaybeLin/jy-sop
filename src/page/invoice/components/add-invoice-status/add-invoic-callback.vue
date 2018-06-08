<template>
    <el-dialog @close="$emit('update:invoicShow', false)" width="30%" title="纸质发票信息" :visible.sync="visible" :show="invoicShow">
        <el-form :model="invoice.form" label-width="80px">
            <el-form-item label="发票代码">
                <el-input v-model="invoice.form.id"></el-input>
            </el-form-item>
            <el-form-item label="发票号码">
                <el-input v-model="invoice.form.num"></el-input>
            </el-form-item>
            <el-form-item label="开票日期">
                <el-input v-model="invoice.form.num"></el-input>
            </el-form-item>
            <el-form-item label="开票人">
                <el-input v-model="invoice.form.people"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" size="small" >确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "add-invoic-callback",
        props: {
            invoicShow: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                visible: this.invoicShow,
                invoice: {
                    form: {
                        id: '',
                        num: '',
                        people: ''
                    }
                }
            }
        },
        watch: {
            invoicShow () {
                this.visible = this.invoicShow;
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>