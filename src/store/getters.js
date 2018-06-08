const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    isSetNav: state => state.nav.isSetNav,
    nav: state => state.nav.navAll,
    addRouter: state => state.nav.addRouter,
    applyData: state => state.apply.applyData,
    applyMoney: state => state.apply.money
};
export default getters;
