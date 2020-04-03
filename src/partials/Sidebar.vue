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
                { label: 'Headings', routerLink: '/headings' },
                { label: 'Alerts', routerLink: '/alerts' },
                { label: 'Panels', routerLink: '/panels' },
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
