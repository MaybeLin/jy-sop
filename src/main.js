import Vue from 'vue';
import App from './App'; //首页模版
import router from './router'; //路由

import ElementUI from 'element-ui'; //ui组件
import 'element-ui/lib/theme-chalk/index.css';//ui-css
import './common/stylus/index.styl'
import VueLazy from 'vue-lazyload'; //懒加载图片
Vue.config.productionTip = false;
Vue.use(ElementUI); //使用ui组件
//使用懒加载
Vue.use(VueLazy, {
    preLoad: 1.3,
    attempt: 1
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
