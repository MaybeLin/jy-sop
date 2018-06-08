import request from '@/common/js/request'
//登录
export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'POST',
        data: {
            FUserName: username,
            FPassWord: password
        }
    })
}
//退出登录
export function loginout() {
    return request({
        url: '/user/loginout',
        method: 'POST'
    })
}

export function checklogin() {
    return request({
        url: '/user/checklogin',
        method: 'POST'
    })
}
//获取用户信息
export function getInfo() {
    return request({
        url: '/user/getuserinfo',
        method: 'POST'
    })
}