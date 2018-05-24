<template>
    <div class="my-date-pick">
        <div class="my-date-pick-title flex just-center">
            <div>
                <i @click="getDate(1)" class="el-icon-d-arrow-left shoushi hover-color"></i>
                <i @click="getDate(2)" class="el-icon-arrow-left block-child-mg-left shoushi hover-color"></i>
            </div>
            <div>
                <p @click="" class="bold index-year-month">{{calendarDate.year}}年{{calendarDate.month}}月</p>
            </div>
            <div>
                <i @click="getDate(4)" class="el-icon-arrow-right shoushi hover-color"></i>
                <i @click="getDate(3)" class="el-icon-d-arrow-right block-child-mg-left shoushi hover-color"></i>
            </div>
        </div>
        <table>
            <tr>
                <th v-for="item in day">{{item}}</th>
            </tr>
            <tr v-for="(item,key) in dateArr">
                <td v-for="(day,index) in item"
                    :class="getClass(day)"
                    @click="seleDay(day,key,index)">
                    <p v-if="day.type == 1">{{day.today == 1 ? '今' : day.day}}</p>
                    <p v-if="day.type == 1 && day.money" class="money">¥{{day.money}}</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {getToDay, getMonthLen} from "./utils";

    export default {
        name: "my-date-pick",
        props: {
            moneyDate: {
                type: Array,
                default: [],
            }
        },
        data() {
            return {
                day: ['日', '一', '二', '三', '四', '五', '六'],
                activeKi: {
                    k: null,
                    i: null
                },
                dateArr: [],
                today: getToDay(),
                calendarDate: {
                    year: null,
                    month: null,
                    date: null,
                    day: null
                }
            }
        },
        mounted() {
            this.getIndexMonth();
        },
        methods: {
            seleDay(day,k,i) {
                if (day.type == 1 && day.money) {
                    if (this.activeKi.k != null) this.dateArr[this.activeKi.k][this.activeKi.i].active = 0;
                    this.activeKi.k = k;
                    this.activeKi.i = i;
                    day.active = 1;
                }
            },
            getClass(day) {
                if (day.type == 1) {
                    if (day.active == 1) return 'available active shoushi hover-color';
                    if (day.today == 1) return 'available today shoushi hover-color';
                    return 'available hover-color shoushi';
                }
                if (day.type == 2) return 'prev-month';
                if (day.type == 3) return 'next-month';
            },
            getDate(type) {
                //type 1 上一年 2上个月 3下一年 4下个月
                let y, m;
                switch (type) {
                    case 1:
                        y = this.calendarDate.year - 1;
                        m = this.calendarDate.month - 1;
                        break
                    case 2:
                        m = this.calendarDate.month == 2 ? 12 : this.calendarDate.month - 2;
                        y = this.calendarDate.month == 2 ? this.calendarDate.year - 1 : this.calendarDate.year;
                        break
                    case 3:
                        y = this.calendarDate.year + 1;
                        m = this.calendarDate.month - 1;
                        break
                    case 4:
                        m = this.calendarDate.month;
                        y = this.calendarDate.year;
                        break
                }
                this.getIndexMonth(y, m);
            },
            getMonth(type) {
                //type 1 当月 2 上月 3下月
                let year = this.calendarDate.year;
                let month = this.calendarDate.month;
                if (type == 2) {
                    if (this.calendarDate.month == 1) {
                        month = 12;
                        year = this.calendarDate.year - 1;
                    } else {
                        month = this.calendarDate.month - 1;
                    }
                }
                return getMonthLen(year, month);
            },
            getIndexMonth(year, month) {
                let dateO = new Date();
                if (year && month) dateO = new Date(year, month);
                this.dateArr = [];
                this.calendarDate.year = dateO.getFullYear();
                this.calendarDate.month = dateO.getMonth() + 1;
                this.calendarDate.date = dateO.getDate();
                this.calendarDate.day = dateO.getDay();
                this.calendarDate.beginDay = new Date(this.calendarDate.year, this.calendarDate.month - 1, 1).getDay();
                let indexLen = this.getMonth();
                let lastLen = this.getMonth(2);
                let indexArr = [];
                for (let d = lastLen - this.calendarDate.beginDay + 1; d <= lastLen; d++) {
                    let m = this.calendarDate.month == 1 ? 12 : this.calendarDate.month - 1;
                    let y = this.calendarDate.month == 1 ? this.calendarDate.year - 1 : this.calendarDate.year;
                    indexArr.push({
                        date: `${y}-${m}-${d}`,
                        day: d,
                        type: 2
                    })
                }
                for (let d = 1; d <= indexLen; d++) {
                    let today = `${this.calendarDate.year}-${this.calendarDate.month}-${d}` == this.today ? 1 : 0;
                    indexArr.push({
                        date: `${this.calendarDate.year}-${this.calendarDate.month}-${d}`,
                        day: d,
                        type: 1,
                        today,
                        active: 0
                    })
                }
                for (let d = 1; d <= 42 - indexLen - this.calendarDate.beginDay; d++) {
                    let m = this.calendarDate.month == 12 ? 1 : this.calendarDate.month + 1;
                    let y = this.calendarDate.month == 12 ? this.calendarDate.year + 1 : this.calendarDate.year;
                    indexArr.push({
                        date: `${y}-${m}-${d}`,
                        day: d,
                        type: 3,
                        active: 0
                    })
                }
                //渲染哪一天 多少 金钱
                indexArr.forEach((dateGroup) => {
                    this.moneyDate.forEach((item) => {
                        if (dateGroup.date == item.date) {
                            dateGroup['money'] = item.money;
                        }
                    })
                })
                let split = 7;
                for (let i = 1; i < split; i++) {
                    if (i == 8) return;
                    let len = i * split;
                    var str = (i - 1) * split;
                    if (i == 1) str = 0;
                    let splitArr = indexArr.slice(str, len);
                    this.dateArr.push(splitArr);
                }

            }
        }
    }
</script>

<style scoped lang="stylus">
    .my-date-pick
        width 320px;
        overflow hidden;
        color #606266;
        border 1px solid #e4e7ed;
        box-shadow 0 2px 12px 0 rgba(0, 0, 0, .1);
        background rgb(233, 247, 255);
        border-radius 4px;
        margin 5px 0;
        padding 10px 20px;
        font-size 12px
        line-height 30px
        .index-year-month
            font-size 16px
            padding 0 5px;
            line-height 22px;
            text-align center;
            cursor pointer;
            color #606266;
        table
            width 100%
            text-align center
            th
                padding 5px;
                border-bottom 1px solid #ffffff;
            tr
                td
                    width 32px;
                    height 30px;
                    padding 4px 0;
                    position relative
                    .money
                        position absolute
                        bottom 2px
                        left 50%
                        transform translateX(-50%)
                        line-height 10px
                        color rgb(252, 99, 103)
                td.prev-month, td.next-month
                    color #c0c4cc
                td.active
                    background #ffffff
                    color rgb(252, 99, 103)
                    border-radius 4px
                td.today
                    color #4caee5


</style>