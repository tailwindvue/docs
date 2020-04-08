import Alerts from '../views/components/alerts/Alerts';
import Badges from '../views/components/badges/Badges';
import Headings from '../views/components/headings/Headings';
import Panel from '../views/components/panels/Panels';
import Tables from '../views/components/tables/Tables';
import Tabs from '../views/components/tabs/Tabs';

export default [
    {
        path: '/alerts',
        name: 'Alerts',
        component: Alerts
    },
    {
        path: '/headings',
        name: 'Headings',
        component: Headings
    },

    {
        path: '/tables',
        name: 'Tables',
        component: Tables
    },
    {
        path: '/badges',
        name: 'Badges',
        component: Badges
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: Tabs
    },
    {
        path: '/panels',
        name: 'Panels',
        component: Panel
    },
];
