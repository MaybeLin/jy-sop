<template>
    <div class="login">
        <div class="login-box page-w block-center flex">
            <div class="login-bg">
                <img src="@/common/img/login-bg.png" alt="">
            </div>
            <div class="login-from">
                <div class="login-from-title tc bold">供应商协同门户</div>
                <div class="from">
                    <div class="group block-center">
                        <el-input placeholder="请输入用户账号"
                                  prefix-icon="el-icon-search"
                                  v-model="loginForm.user"></el-input>
                    </div>
                    <div class="group block-center">
                        <el-input
                                type="password"
                                placeholder="请输入用户密码"
                                prefix-icon="el-icon-search"
                                v-model="loginForm.pwd">
                        </el-input>
                    </div>
                    <div class="group block-center flex just-center">
                        <el-checkbox v-model="isAutoLogin">记住我</el-checkbox>
                        <router-link to="/foo" class="get-pwd"><u>忘记密码?</u></router-link>
                    </div>
                    <div class="group block-center tc">
                        <el-button @click="login"
                                   class="w-100 login-btn"
                                   type="primary"
                                   :loading="loding.show">{{loding.text}}
                        </el-button>
                    </div>
                    <!--<div class="group tc block-center">-->
                        <!--<router-link to="/foo" class="get-pwd"><u>没有账号?立即注册</u></router-link>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-page",
        data() {
            return {
                loding: {
                    show: null,
                    text: '登录'
                },
                isLoding: null,
                isAutoLogin: false,
                loginForm:{
                    user: '',
                    pwd: ''
                },
            }
        },
        methods: {
            login() {
                this.$store.dispatch('Login', this.loginForm).then((res) => {
                    if(res.data == '1') { //首次登录
                        this.$router.push({ path: '/resetPwd' })
                    } else {
                        this.$router.push({ path: '/' })
                    }
                })
                // this.loding.show = true;
                // this.loding.text = '正在登录中...';
                // setTimeout(() => {
                //     this.$router.push('/');
                // },2000)
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