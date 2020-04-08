import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GettingStarted from './getting-started'
import Components from './components'

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
    routes
});

export default router;
