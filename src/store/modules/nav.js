import {setToken} from '@/common/js/auth';
import {nav, rolesNav} from "@/components/header/config";

const navs = {
    state: {
        navAll: nav
    },
    mutations: {
        SET_NAV: (state, addNav) => {
            state.navAll = addNav;
        },
        SETNAV_STATUS: (state, status) => {
            state.isSetNav = status;
        }
    },
    actions: {
        pushNav({commit}, roles) {
            return new Promise((resolve, reject) => {
                if (roles == '1') {
                    let newNav = nav.concat(rolesNav);
                    commit('SET_NAV', newNav);
                } else {
                    commit('SET_NAV', nav);
                }
                resolve();
            })
        }
    }
}
export default navs;
