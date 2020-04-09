import Alerts from '../views/components/alerts/Alerts';
import Badges from '../views/components/badges/Badges';
import Headings from '../views/components/headings/Headings';
import Panel from '../views/components/panels/Panels';
import Tables from '../views/components/tables/Tables';
import Tabs from '../views/components/tabs/Tabs';

export default [
    { path: '/alerts', name: 'Alerts', component: Alerts },
    { path: '/badges', name: 'Badges', component: Badges },
    { path: '/headings', name: 'Headings', component: Headings },
    { path: '/panels', name: 'Panels', component: Panel },
    { path: '/tables', name: 'Tables', component: Tables },
    { path: '/tabs', name: 'Tabs', component: Tabs },
];
