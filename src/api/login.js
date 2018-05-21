import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/user/login',
        methods: 'POST',
        data: {
            username,
            password
        }
    })
}