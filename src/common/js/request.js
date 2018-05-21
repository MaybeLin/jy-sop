import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import {RES_CODE} from "@/api/config";
// 创建axios实例
const service = axios.create({
    baseURL: process.env.API_ROOT, // api的base_url
    timeout: 15000 // 请求超时时间
})
console.log(process.env);
// request拦截器
service.interceptors.request.use(config => {
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== RES_CODE) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            })

            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                })
            }
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error);
    }
)

export default service;
