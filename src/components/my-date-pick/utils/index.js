//获取今天
export function getToDay() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}
//一个月有多少天
export function getMonthLen(year, month) {
    return new Date(year, month, 0).getDate();
}
