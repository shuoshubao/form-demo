import Vue from 'vue';
import MTD from '@ss/mtd-vue';
import DMC from '@mt-material/datafe-dmc';
import VueRouter from 'vue-router';
import '@ss/mtd-vue/lib/theme-chalk/index.css';
import router from '@/router';

import App from './App.vue';

Vue.use(MTD);
Vue.use(DMC);
Vue.use(VueRouter);

// 初始化 vue
export default new Vue({
    router,
    render: h => h(App)
}).$mount('#app_root_vue');
