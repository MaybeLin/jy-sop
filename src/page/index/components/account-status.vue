<template>
    <div class="accoun-status flex">
        <div class="accoun-status-box flex-1" v-for="item in list">
            <router-link :to="getRouter(item)">
                <div class="line" :style="{background:item.color}"></div>
                <div class="details flex flex-y-center">
                    <div class="details-num tc" :style="{color:item.color}">{{item.num}}<span v-text="item.money ? '笔': '条'"></span></div>
                    <div class="details-text flex-1">
                        <div>{{item.title}}</div>
                        <div class="bold shoushi hover-color" v-if="item.money">{{item.money}}</div>
                        <div v-if="item.type == 5">
                            <router-link class="bold hover-color" to="/message/leaveMessage">立即查看回复</router-link>
                        </div>
                        <div v-if="item.type == 6">
                            <router-link class="bold hover-color" to="/message/announcement">公告{{item.announcementNum}}</router-link>
                            <router-link class="bold hover-color" to="/message/msg">消息{{item.msgNum}}</router-link>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: "account-status",
        props: {
            list: {
                type: Array
            }
        },
        data() {
            return {
            }
        },
        methods: {
            getRouter(item) {
                switch(item.type){
                    case 1:
                       return '/a'
                    case 2:
                        return '/b'
                    case 3:
                        return '/c'
                    case 4:
                        return '/d'
                    case 5:
                        return '/e'
                    case 6:
                        return '/f'
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .accoun-status
        margin-top 40px
        .accoun-status-box
            height 104px
            background #ffffff
            margin-right 10px
            &:last-child
                margin-right 0
            .line
                height 4px
            .details
                height 100px
                .details-num
                    padding 0 20px
                    font-size $font-size-large-plus
                    >span
                        font-size $font-size-small
                .details-text
                    color $color-sup
                    font-size $font-size-small
</style>