import Vue from 'vue';
import VueRouter from 'vue-router';
import GettingStarted from './getting-started';
import Components from './components';
import { scrollBehavior } from './utilities';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    },
    ...Components,
    ...GettingStarted
];

// noinspection JSUnusedGlobalSymbols
const router = new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes
});

export default router;
