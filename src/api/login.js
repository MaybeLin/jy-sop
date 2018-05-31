import request from '@/common/js/request'

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

export function getInfo() {
    return request({
        url: '/user/getuserinfo',
        method: 'POST'
    })
}