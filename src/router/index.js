import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
//baseRouter 不需要权限的路由
//asyncRouterMap 需要权限的路由
//pageError 404页面路由 由于404必须要在路由数组最后一个 单独抽出来 权限路由整合完成后push进去
//路由参数 id 每个页面id 和 meda id 一一对应 对应到页面上就是当前页面的焦点
//路由整合在store/nav里面
export const baseRouter = [
    {path: '/404', component: () => import('@/page/404'), hidden: true},
    {
        path: '/login',
        name: '登录',
        type: 1,
        id: 1,
        component: () => import('@/page/login/login'),
        meta: {id: 1}
    },
    {
        path: '/resetPwd',
        name: '重置密码',
        component: () => import('@/page/login/reset-pwd'),
        hidden: true
    },
    {
        path: '/',
        name: '首页',
        id: 5,
        type: 2,
        component: () => import('@/page/index'),
        meta: {id: 5}
    },
    {
        path: '/purchaseOrder',
        name: '采购订单',
        id: 6,
        type: 2,
        component: () => import('@/page/purchase-order'),
        meta: {id: 6}
    },
    {
        path: '/purchaseOrder/details',
        name: '订单详情',
        id: 6,
        component: () => import('@/page/purchase-order/order-details'),
        meta: {id: 6},
        hidden: true
    },
    //发票
    {
        path: '/invoice',
        name: '发票管理',
        type: 2,
        id: 7,
        component: () => import('@/page/invoice'),
        meta: {id: 7}
    },
    {
        path: '/invoice/invoiceDetails',
        name: '发票详情',
        id: 7,
        component: () => import('@/page/invoice/invoice-details'),
        meta: {id: 7},
        hidden: true
    },
    {
        path: '/invoice/createPoSele',
        name: '发票创建',
        id: 7,
        component: () => import('@/page/invoice/create-po-sele'),
        meta: {id: 7},
        hidden: true
    },
    {
        path: '/invoice/createDetails',
        name: '发票创建详情',
        id: 7,
        component: () => import('@/page/invoice/create-details'),
        meta: {id: 7},
        hidden: true
    },
    {
        path: '/due',
        name: '应收账款',
        id: 10,
        type: 2,
        component: () => import('@/page/due-money'),
        meta: {id: 10}
    },
    {
        path: '/message',
        name: '消息',
        component: () => import('@/page/message'),
        hidden: true
    },
    {
        path: '/setting',
        name: '设置',
        id: 2,
        type: 1,
        component: () => import('@/page/setting'),
        meta: {id: 2}
    }
];
export const asyncRouterMap = [
    {
        path: '/plan',
        name: '资金计划',
        id: 9,
        type: 2,
        component: () => import('@/page/money-plan'),
        meta: {id: 9}
    },
    {
        path: '/applyMoney',
        name: '贴现申请',
        type: 2,
        id: 8,
        component: () => import('@/page/apply-money'),
        meta: {id: 8}
    },
    {
        path: '/beforeMoney',
        name: '贴现申请',
        id: 8,
        component: () => import('@/page/before-money'),
        meta: {id: 8},
        hidden: true
    }
];
export const pageError = [{path: '*', redirect: '/404', hidden: true}];
export default new Router({
    routes: baseRouter
});
