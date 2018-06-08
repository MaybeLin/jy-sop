import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
import nav from './modules/nav';
import apply from './modules/apply';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        nav,
        apply
    },
    getters
});

export default store;