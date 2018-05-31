import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/404', component: () => import('@/page/404')},
        {
            path: '/login',
            name: '登录',
            component: () => import('@/page/login/login'),
            meta: {id: 1}
        },
        {
            path: '/resetPwd',
            name: '重置密码',
            component: () => import('@/page/login/reset-pwd'),
        },
        {
            path: '/',
            name: '首页',
            component: () => import('@/page/index'),
            meta: {id: 5}
        },
        {
            path: '/purchaseOrder',
            name: '采购订单',
            component: () => import('@/page/purchase-order'),
            meta: {id: 6}
        },
        {
            path: '/purchaseOrder/details',
            name: '订单详情',
            component: () => import('@/page/purchase-order/order-details'),
            meta: {id: 6},
        },
        //发票
        {
            path: '/invoice',
            name: '发票管理',
            component: () => import('@/page/invoice'),
            meta: {id: 7}
        },
        {
            path: '/invoice/invoiceDetails',
            name: '发票详情',
            component: () => import('@/page/invoice/invoice-details'),
            meta: {id: 7}
        },
        {
            path: '/invoice/createPoSele',
            name: '发票创建',
            component: () => import('@/page/invoice/create-po-sele'),
            meta: {id: 7}
        },
        {
            path: '/invoice/createDetails',
            name: '发票创建详情',
            component: () => import('@/page/invoice/create-details'),
            meta: {id: 7}
        },
        {
            path: '/beforemoney',
            name: '贴现申请',
            component: () => import('@/page/before-money'),
            meta: {id:8}
        },
        {
            path: '/plan',
            name: '资金计划',
            component: () => import('@/page/money-plan'),
            meta: {id: 9}
        },
        {
            path: '/due',
            name: '应收账款',
            component: () => import('@/page/due-money'),
            meta: {id: 10}
        },
        {
            path: '/message',
            name: '消息',
            component: () => import('@/page/message'),
        },
        {
            path: '/setting',
            name: '设置',
            component: () => import('@/page/setting'),
            meta: {id: 2}
        },
        { path: '*', redirect: '/404'}
    ]
})
