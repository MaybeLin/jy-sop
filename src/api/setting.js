import request from '@/common/js/request';

//修改供应商信息
export function updateSupplier(data) {
    return request({
        url: '/suppliermanager/updatesupplier',
        method: 'POST',
        data: {
            contacts_name: data.contacts_name,
            contacts_email: data.contacts_email,
            contacts_mobile: data.contacts_mobile
        }
    });
}

//获取供应商信息
export function supplierManagerInfo() {
    return request({
        url: '/suppliermanager/supplierManagerInfo',
        method: 'POST'
    });
}