import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GettingStarted from './getting-started';
import Components from './components';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    ...Components,
    ...GettingStarted
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes
});

export default router;
