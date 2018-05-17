<template>
    <div class="page-w block-center quick-entry block-mg">
        <page-title >快速访问</page-title>
        <div class="quick-entry-list flex ">
            <div class="flex-1 flex flex-y-center flex-cloumn" v-for="item in entryList">
                <img class="quick-entry-list-icon" src="" v-lazy="item.icon" alt="">
                <div class="bold quick-entry-name">{{item.name}}</div>
                <div class="quick-entry-details" v-html="item.details"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'
    export default {
        name: "quick-entry",
        data() {
            return {
                entryList: [
                    {
                        name: '采购订单',
                        icon: 'https://g1.jyblc.cn/sop/img/index/icon-payorder.png',
                        details: '<span style="color: #d00000">8</span>个新的po单',
                    },{
                        name: '新增发票',
                        icon: 'https://g1.jyblc.cn/sop/img/index/icon-addpiao.png',
                        details: '8个新的po单',
                    },{
                        name: '我的发票',
                        icon: 'https://g1.jyblc.cn/sop/img/index/icon-mypiao.png',
                        details: '8个新的po单',
                    },{
                        name: '资金计划',
                        icon: 'https://g1.jyblc.cn/sop/img/index/icon-moneyjihua.png',
                        details: '<span style="color: #d00000">¥230,987</span>可以<br>申请提前支付',
                    },{
                        name: '我的应收款',
                        icon: 'https://g1.jyblc.cn/sop/img/index/icon-mymoney.png',
                        details: '8个新的po单',
                    }
                ]
            }
        },
        components:{
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .quick-entry
        background $color-white
    .quick-entry-list
        padding  60px 0
        .quick-entry-list-icon
            width 100px
            height 100px
        .quick-entry-name
            font-size $font-size-medium-x
            margin-top 10px
        .quick-entry-details
            font-size $font-size-small
            color $color-sup
            margin-top 10px
</style>