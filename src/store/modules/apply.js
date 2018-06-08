import Vue from 'Vue';
import {applyStep} from 'api/apply';

const apply = {
    state: {
        applyData: {}
    },
    mutations: {
        SET_APPLY_DATA: (state, data) => {
            state.applyData = data;
        },
        SET_APPLY_DATA_KEY: (state, data) => {
            state.applyData[data.key] = data.value;
        },
        SET_APPLY_DATA_ZKL: (state, zkl) => {
            state.applyData.zkl = zkl;
        },
        SET_APPLY_DATA_MONEY: (state, money) => {
            state.applyData.money = money;
        }
    },
    actions: {
        getApplyStep({commit}, invoiceId) {
            return new Promise((resolve) => {
                applyStep(invoiceId).then(res => {
                    res.data.money = '';
                    res.data.zkl = '';
                    res.data.beforeDay = '';
                    res.data.date = '';
                    commit('SET_APPLY_DATA', res.data);
                    resolve();
                });
            });
        },
        getApplyAsyncKey({commit},data) {
            return new Promise((resolve) => {
                commit('SET_APPLY_DATA_KEY', data);
                resolve();
            });
        }
    }
};
export default apply;