import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/installation',
        name: 'Installation',
        component: () => import(/* webpackChunkName: "installation" */ '../views/Installation')
    },
    {
        path: '/headings',
        name: 'Headings',
        component: () => import(/* webpackChunkName: "headings" */ '../views/Headings')
    },
    {
        path: '/panels',
        name: 'Panels',
        component: () => import(/* webpackChunkName: "panels" */ '../views/Panels')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
