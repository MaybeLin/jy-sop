import {setToken} from '@/common/js/auth';
import {baseRouter, asyncRouterMap, pageError} from "@/router";

const navs = {
    state: {
        nav: baseRouter,
        addRouter: [] //路由根据这个整合
    },
    mutations: {
        SET_NAV: (state, {nav,roles}) => {
            //可以贴现 把权限路由和404 concat 在concat到基础路由
            if (roles == 1) {
                state.addRouter = nav.concat(pageError);
                state.nav = baseRouter.concat(state.addRouter);
            } else {
                //不可以贴现 只concat 404路由
                state.addRouter = pageError;
                state.nav = baseRouter.concat(state.addRouter);
            }
        }
    },
    actions: {
        pushNav({commit}, roles) {
            return new Promise((resolve) => {
                if (roles == '1') {
                    commit('SET_NAV', {
                        'nav': asyncRouterMap,
                        roles: 1
                    });
                } else {
                    commit('SET_NAV', {
                        roles: 0
                    });
                }
                resolve();
            });
        }
    }
};
export default navs;
