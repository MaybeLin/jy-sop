import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { startLoading, endLoading } from './loding';
import {RES_CODE,ERR_CODE} from "@/api/config";
import store from '@/store'
import Qs from 'qs'
// 创建axios实例
console.log(process.env)
const service = axios.create({
    baseURL: process.env.API_ROOT, // api的base_url
    timeout: 15000, // 请求超时时间
    // withCredentials: true           // 请求带上cookie
})

// request拦截器
service.interceptors.request.use(config => {
    if (config.isQs != 999) {
        config.data = Qs.stringify(config.data);
        config.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    startLoading();
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        endLoading();
        const res = response.data
        if (res.code !== RES_CODE) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            })
            if (res.code === ERR_CODE.LOGIN_CODE) {
                store.dispatch('FedLogOut').then(() => {
                    location.reload();// 为了重新实例化vue-router对象 避免bug
                })
            }
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        endLoading();
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
