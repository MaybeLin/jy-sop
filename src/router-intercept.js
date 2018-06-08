import router from './router'
import store from './store'
import {getToken} from '@/common/js/auth' // getToken from cookie

router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
        } else {
            if (store.getters.roles == '') {
                store.dispatch('userInfo').then( discount => {
                    store.dispatch('pushNav', discount).then(() => {
                        router.addRoutes(store.getters.addRouter) // 动态添加可访问路由表
                        next({ ...to, replace: true });
                    });
                })
            } else {
                next();
            }
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login') // 否则全部重定向到登录页
        }
    }
})

