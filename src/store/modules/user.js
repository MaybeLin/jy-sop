import {login} from '@/api/login'

const user = {
    state: {

    },
    mutations: {},
    actions: {
        Login({commit}, userInfo) {
           return new Promise((resolve, reject)=>{
               login(userInfo.username,userInfo.password).then(res => {
                   resolve();
               })
           }).catch(error=>{
               reject(error);
           })
        }
    }
}
