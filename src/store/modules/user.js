import {login, getInfo,loginout} from '@/api/login';
import {setToken,removeToken} from '@/common/js/auth';
const env = process.env;
const user = {
    state: {
        token: '',
        name: '',
        roles: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve) => {
                login(userInfo.user, userInfo.pwd).then(res => {
                    if (env.NODE_ENV == 'development') {
                        setToken(res.data.suppliersess_id);
                    }
                    commit('SET_TOKEN', res.data.suppliersess_id);
                    resolve(res);
                }).catch(error => {
                    console.log(error)
                })
            })
        },
        userInfo({commit}) {
            return new Promise((resolve) => {
                getInfo().then(res => {
                    commit('SET_ROLES', res.data.supplierdatalist.ext.on_discount);
                    commit('SET_NAME', res.data.user_name);
                    resolve(res.data.supplierdatalist.ext.on_discount);
                }).catch(error => {
                    console.log(error);
                })
            })
        },
        autoOut({ commit }){
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve()
            })
        },
        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                loginout().then(res => {
                    console.log(res);
                    commit('SET_TOKEN', '');
                    removeToken();
                    resolve()
                })
            })
        }
    },
    getters: {}
}
export default user;
