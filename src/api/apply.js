import request from '@/common/js/request';
import {TABLE} from './config';
//获取贴现列表
export function applyList(page,data) {
    data.page = page;
    data.pagesize = TABLE.pageSize;
    return request({
        url: '/apply/apply_list',
        method: 'POST',
        isQs: 999,
        data: data
    });
}

//获取贴现信息
export function applyStep(invoice_id) {
    return request({
        url: '/apply/apply_step',
        method: 'POST',
        data: {
            invoice_id
        }
    });
}

//申请贴现
export function doapplyStep({invoice_id, advance_time, advance_day, advance_rate, advance_money}) {
    return request({
        url: '/apply/doapply_step',
        method: 'POST',
        data: {
            invoice_id,
            advance_money,
            advance_rate,
            advance_day,
            advance_time
        }
    });
}