<template>
    <tw-sidebar :items="items"/>
</template>

<script>
    const items = [
        { label: 'Home', routerLink: '/' },
        {
            label: 'Getting Started',
            items: [
                { label: 'Requirements', routerLink: '/requirements' },
                { label: 'Installation', routerLink: '/installation' },
            ]
        },
        {
            label: 'Components',
            items: [
                { label: 'Alerts', routerLink: '/alerts' },
                { label: 'Badge', routerLink: '/badge' },
                { label: 'Headings', routerLink: '/headings' },
                { label: 'Panels', routerLink: '/panels' },
                { label: 'Table', routerLink: '/table' },
                { label: 'Tabs', routerLink: '/tabs' },
            ]
        },
    ];

    export default {
        name: 'Sidebar',

        data() {
            return {
                items
            };
        },
    };
</script>
