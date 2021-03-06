import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from '@/router';

import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

// 初始化 vue
export default new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
