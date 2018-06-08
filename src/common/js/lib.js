//表格导出 不支持接口返回url前端控制导出 后台自己下载到本地 data的传递参数
export function exportTable(url,data) {
    let str = '?';
    for(let i in data) {
        str += `${i}=${data[i]}&`;
    }
    window.open(url+str);
}