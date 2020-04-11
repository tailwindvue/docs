export default [
    {
        path: '/installation',
        name: 'Installation',
        component: () => import(/* webpackChunkName: "installation" */ '../views/getting-started/installation/Installation')
    },
    {
        path: '/requirements',
        name: 'Requirements',
        component: () => import(/* webpackChunkName: "requirements" */ '../views/getting-started/requirements/Requirements')
    },
];
