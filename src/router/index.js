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
        path: '/requirements',
        name: 'Requirements',
        component: () => import(/* webpackChunkName: "requirements" */ '../views/Requirements')
    },
    {
        path: '/headings',
        name: 'Headings',
        component: () => import(/* webpackChunkName: "headings" */ '../views/headings/Headings')
    },
    {
        path: '/alerts',
        name: 'Alerts',
        component: () => import(/* webpackChunkName: "alerts" */ '../views/alerts/Alerts')
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs/Tabs')
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
