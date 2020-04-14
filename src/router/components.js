export default [
    {
        path: '/alerts',
        name: 'Alerts',
        component: () => import(
            /* webpackChunkName: "alerts" */
            '../views/components/alerts/Alerts')
    },
    {
        path: '/badges',
        name: 'Badges',
        component: () => import(
            /* webpackChunkName: "badges" */
            '../views/components/badges/Badges')
    },
    {
        path: '/headings',
        name: 'Headings',
        component: () => import(
            /* webpackChunkName: "headings" */
            '../views/components/headings/Headings')
    },
    {
        path: '/panels',
        name: 'Panels',
        component: () => import(
            /* webpackChunkName: "panels" */
            '../views/components/panels/Panels')
    },
    {
        path: '/tables',
        name: 'Tables',
        component: () => import(
            /* webpackChunkName: "tables" */
            '../views/components/tables/Tables')
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: () => import(
            /* webpackChunkName: "tabs" */
            '../views/components/tabs/Tabs')
    },
];
