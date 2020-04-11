import Vue from 'vue';
import VueRouter from 'vue-router';
import GettingStarted from './getting-started';
import Components from './components';

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

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return { selector: to.hash, offset: { x: 0, y: 70 } };
        }

        return { x: 0, y: 0 };
    },
    routes
});

export default router;
