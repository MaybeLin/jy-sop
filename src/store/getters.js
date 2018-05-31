const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    isSetNav: state => state.nav.isSetNav,
    nav: state => state.nav.navAll,
}
export default getters
