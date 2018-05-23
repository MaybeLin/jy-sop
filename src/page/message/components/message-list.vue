<template>
    <div class="message-list fr">
        <page-title bg="#ffffff" color="#222222">订单消息(共{{getLen}}条)</page-title>
        <div class="message-list-box">
            <el-checkbox :indeterminate="isIndeterminate"
                         v-model="seleAll"
                         @change="handleCheckAllChange"
            >全选
            </el-checkbox>
            <el-button :disabled="seleDefault.length > 0 ? false : true" @click="getCheck" type="primary" plain size="small">标为已读</el-button>
            <el-button :disabled="seleDefault.length > 0 ? false : true" @click="getCheck" type="primary" plain size="small">删除消息</el-button>
            <el-checkbox-group  v-model="seleDefault" @change="handleCheckedCitiesChange">
                <el-checkbox class="message-list-item"
                             v-for="item in messageList"
                             :label="item.msg_id"
                             :key="item.msg_id"
                             :status="item.status">
                    <span class="fl" :class="[item.status == 0 ? 'bold' : '']">{{item.title}}-</span>
                    <span class="fl text-over" style="width: 600px">{{item.cont}}</span>
                    <span :class="[item.status == 0 ? 'bold' : '']">{{item.date}}</span>
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="tc pagination">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    page-size="10"
                    layout="total,prev, pager, next, jumper"
                    :total="messageList.length"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import pageTitle from '@/components/page-title'
    export default {
        name: "message-list",
        data() {
            return {
                seleAll: false,
                seleDefault: [],
                isIndeterminate: false,
                messageList: [
                    {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '5月3日',
                        msg_id: 9999,
                        status: 0,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 2,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 3,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 4,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 5,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 6,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 7,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 8,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 9,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 10,
                        status: 1,
                    }, {
                        title: '动态贴现功能上线通知！',
                        cont: 'Hi,jam,为帮助你提前回笼资金，改善金融结构，实现资金平衡，我们上线了动态贴现功能，具体详情点击查看。',
                        date: '昨天20:08',
                        msg_id: 11,
                        status: 1,
                    }
                ]
            }
        },
        computed: {
            getLen() {
                return this.messageList.length;
            }
        },
        methods: {
            handleCurrentChange(page) {
                console.log(page);
            },
            getCheck(){
              console.log(this.seleDefault);
            },
            handleCheckAllChange(val) {
                if (val) {
                    this.messageList.forEach((item) => {
                        this.seleDefault.push(item.msg_id);
                    })
                } else {
                    this.seleDefault = [];
                }
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.seleAll = checkedCount === this.messageList.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.messageList.length;
            }
        },
        components: {
            pageTitle
        }
    }
</script>

<style scoped lang="stylus">

    .message-list
        width 890px
        height 100%
        background #ffffff
        margin-left 10px
        .message-list-box
            padding 10px 20px
            border-top 1px solid #eeeeee
            .message-list-item
                margin-top 20px
            .message-list-item[status="1"]
                color #8b8b8b
            .el-checkbox + .el-checkbox
                margin-left 0
    .pagination
        margin-top 30px
</style>