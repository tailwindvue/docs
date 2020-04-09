<template>
    <tw-sidebar class="md:sticky md:top-8" :items="items"/>
</template>

<script>
    import GettingStarted from '../router/getting-started';
    import Components from '../router/components';

    const items = [
        { name: 'Home', path: '/' },
        {
            name: 'Getting Started',
            items: GettingStarted
        },
        {
            name: 'Components',
            items: Components
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
