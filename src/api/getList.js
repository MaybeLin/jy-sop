import request from '@/common/js/request'

export function loginTest() {
    return request({
        url: '/user/login',
        method: 'POST',
        data: {
            FUserName: 'admin',
            FPassWord: 'admin'
        }
    })
}