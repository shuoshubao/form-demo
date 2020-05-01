import VueRouter from 'vue-router';

const Form = () => import('@/views/form/Index.vue');
const FormTable = () => import('@/views/form-table/Index.vue');
const Composite = () => import('@/views/composite/Index.vue');
const Readme = () => import('@/views/readme/Index.vue');

export default new VueRouter({
    routes: [
        {
            name: 'index',
            path: '*',
            component: Form
        },
        {
            name: 'form',
            path: '/form',
            component: Form
        },
        {
            name: 'form-table',
            path: '/form-table',
            component: FormTable
        },
        {
            name: 'composite',
            path: '/composite',
            component: Composite
        },
        {
            name: 'readme',
            path: '/readme',
            component: Readme
        }
    ]
});
