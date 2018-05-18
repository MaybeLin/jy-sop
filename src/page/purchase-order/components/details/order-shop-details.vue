<template>
    <div class="order-shop-details block-mg">
        <page-title>表体信息</page-title>
        <div class="index-table table-pd table-bg">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" align="left" label="序号"></el-table-column>
                <el-table-column prop="name" align="center" label="产品名称"></el-table-column>
                <el-table-column prop="type" align="center" label="规格型号" width="100"></el-table-column>
                <el-table-column prop="unit" align="center" label="计量单位"></el-table-column>
                <el-table-column prop="num" align="center" label="数量"></el-table-column>
                <el-table-column prop="storageNum" align="center" label="已入库数量"></el-table-column>
                <el-table-column prop="notStorageNum" align="center" label="未入库数量"></el-table-column>
                <el-table-column prop="price" align="center" label="单价（含税）"></el-table-column>
                <el-table-column prop="totalPrice" align="center" label="金额（含税）"></el-table-column>
            </el-table>
        </div>
        <div class="set-po-status fr">
            <el-button @click="through" size="small" type="danger" icon="el-icon-check">通过</el-button>
            <el-button @click="showThrough" size="small" type="warning" icon="el-icon-remove-outline">不通过</el-button>
            <el-button @click="back" size="small">返回</el-button>
        </div>
        <!--点击不通过弹框-->
        <el-dialog width="30%" title="不通过原因" :visible.sync="notThrough.show">
            <el-form  :model="notThrough.form" label-width="140px">
                <el-form-item label="请选择不通过原因" >
                    <el-select v-model="notThrough.form.value"  placeholder="请选择不通过原因">
                        <el-option label="金额有误" value="1"></el-option>
                        <el-option label="数量有误" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="填写不通过原因">
                    <el-input
                            v-model="notThrough.form.text"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button  type="primary" size="small" @click="notThroughSucc('not')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'

    export default {
        name: "order-shop-details",
        data() {
            return {
                notThrough: {
                    show: false,
                    form: {
                        name: '',
                        value: '',
                        text: ''
                    }
                },
                tableData: [
                    {
                        id: 1,
                        name: '飞机',
                        type: '#34',
                        unit: '个',
                        num: 300,
                        storageNum: 100,
                        notStorageNum: 200,
                        price: 100,
                        totalPrice: 200
                    }
                ]
            };
        },
        methods: {
            back(){
              this.$emit('back');
            },
            through(){
              this.$emit('through');
            },
            noThrough(){
               this.$emit('not-through',this.notThrough.form);
            },
            showThrough() {
                this.notThrough.show = true;
            },
            notThroughSucc() {
               if(this.notThrough.form.value == '') {
                   this.$message.error('请选择不通过原因！');
                   return;
               }
                const loading = this.$loading();
                setTimeout(() => {
                    this.notThrough.show = false;
                    this.$message.success('改po单状态已更新！');
                    loading.close();
                }, 2000);
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    .set-po-status {
        margin-right 20px
        margin-top 20px
    }
</style>