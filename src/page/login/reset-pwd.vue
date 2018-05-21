<template>
    <div class="login">
        <div class="login-box page-w block-center flex">
            <div class="login-bg">
                <img src="@/common/img/login-bg.png" alt="">
            </div>
            <div class="login-from">
                <div class="login-from-title tc bold">首次登录请重置密码</div>
                <div class="from">
                    <div class="group block-center">
                        <el-input placeholder="请输入密码"
                                  type="password"
                                  prefix-icon="el-icon-search"
                                  v-model="pwd"></el-input>
                    </div>
                    <div class="group block-center">
                        <el-input
                                placeholder="请确认密码"
                                type="password"
                                prefix-icon="el-icon-search"
                                v-model="pwdTwo">
                        </el-input>
                    </div>
                    <div class="group block-center tc">
                        <el-button @click="reset"
                                   class="w-100 login-btn"
                                   type="primary"
                                   :loading="loding.show">{{loding.text}}
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reser-pwd",
        data() {
            return {
                loding: {
                    show: null,
                    text: '确定'
                },
                isLoding: null,
                isAutoLogin: false,
                pwd: '',
                pwdTwo: ''
            }
        },
        methods: {
            reset() {
                this.loding.show = true;
                this.loding.text = '正在重置密码中...';
                setTimeout(() => {
                    this.$router.push('/');
                },2000)
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/variable"
    .login-box
        padding 20px 0
        .login-bg img
            width 500px
            margin-top 40px
        .login-from
            width 360px
            height 340px
            margin 50px 0 0 100px
            background $color-white
            .login-from-title
                color $color-main
                font-size $font-size-large
                margin-top 20px
            .group
                width 80%
                margin-top 20px
                .get-pwd
                    font-size $font-size-medium
</style>