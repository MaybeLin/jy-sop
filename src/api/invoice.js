import request from '@/common/js/request';
import {TABLE} from './config';

//获取发票列表
export function getList(page, data) {
    data.page = page;
    data.pagesize = TABLE.pageSize;
    return request({
        url: '/invoice/invoice_list',
        method: 'POST',
        isQs: 999,
        data: data
    });
}

//创建发票可以选择的po单列表
export function addInvoiceList() {
    return request({
        url: '/invoice/add_invoice_list',
        method: 'POST'
    });
}

//创建发票选中po单后获取物料明细
export function poProduct(id) {
    return request({
        url: '/invoice/po_product',
        method: 'POST',
        data: {
            pooid: id
        }
    });
}

//发票预生成
export function createInvoice(json) {
    return request({
        url: '/invoice/create_invoice',
        method: 'POST',
        isQs: 999,
        data: {
            params: json
        }
    });
}

//获取发票预生成信息
export function getInvoiceInfo(params_id) {
    return request({
        url: '/invoice/create_invoice',
        method: 'POST',
        data: {
            params_id
        }
    });
}

//开发票
export function docreateInvoice(params_id, kaipiao_date) {
    return request({
        url: '/invoice/docreateinvoice',
        method: 'POST',
        data: {
            params_id,
            kaipiao_date
        }
    });
}

//获取发票详情
export function getInvoiceDetail(invoice_id) {
    return request({
        url: '/invoice/invoice_detail',
        method: 'POST',
        data: {
            invoice_id
        }
    });
}

//发票导出
export function invoiceDownload(data) {
    return request({
        url: '/invoice/invoice_download',
        method: 'POST',
        isQs: 999,
        data: data
    });
}



