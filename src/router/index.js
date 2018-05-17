import Vue from 'vue';
import Router from 'vue-router';

const index = () => import('@/page/index');
const login = () => import('@/page/login/login');
const message = () => import('@/page/message');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/',
            name: '首页',
            component: index,
            meta: {id: 1}
        },
        {
            path: '/purchaseOrder',
            name: '采购订单',
            component: () => import('@/page/purchase-order'),
            meta: {id: 2}
        },
        {
            path: '/message',
            name: '消息',
            component: message,
            meta: {id: 2}
        }
    ]
})
