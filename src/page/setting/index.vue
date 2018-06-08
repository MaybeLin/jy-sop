<template>
    <div class="page-w block-mg block-center setting">
        <page-title bg="#e0e0e0" color="#4b4b4b">设置</page-title>
        <div class="form-block clearfix">
            <div class="purchase-order-form-list form-pd">
                <div class="flex purchase-order-form-item">
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">联系人</span>
                        <el-input class="form-group-input" v-model="settingForm.person" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">联系电话</span>
                        <el-input class="form-group-input" v-model="settingForm.mobile" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="form-group flex flex-y-center">
                        <span class="form-name">email</span>
                        <el-input class="form-group-input" v-model="settingForm.email" placeholder="请输入内容"></el-input>
                    </div>
                </div>
            </div>
            <div class="form-btn fr">
                <el-button @click="update" size="small" type="danger" icon="el-icon-plus">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title';
    import {updateSupplier, supplierManagerInfo} from '@/api/setting';

    export default {
        name: "setting",
        data() {
            return {
                settingForm: {
                    mobile: '',
                    email: '',
                    person: ''
                }
            };
        },
        created() {
            this.suppInfo();
        },
        methods: {
            suppInfo() {
                supplierManagerInfo().then(res => {
                    console.log(res);
                });
            },
            update() {
                updateSupplier(this.settingForm).then(res => {
                    console.log(res);
                });
            }
        },
        components: {
            pageTitle
        }
    };
</script>

<style scoped lang="stylus">
    .setting
        background #ffffff
        .form-btn
            padding 20px 50px
</style>