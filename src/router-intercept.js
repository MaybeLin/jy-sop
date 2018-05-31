import router from './router'
import store from './store'
import {Message} from 'element-ui'
import {getToken} from '@/common/js/auth' // getToken from cookie
import {nav, rolesNav} from "@/components/header/config";

router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
        } else {
            if (store.getters.roles == '') {
                store.dispatch('userInfo').then( res => {
                    console.log(res);
                    const role_id = res.data.role_id;
                    store.dispatch('pushNav', role_id).then(() => {
                        next();
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

