<template>
    <div>
        <tw-heading>Tables</tw-heading>
        <tw-table :items="details"/>

        <tw-heading type="h2">Basic Usage</tw-heading>
        <TableBasicExample/>

        <tw-heading type="h2">Props</tw-heading>
        <tw-table :items="props"/>

        <tw-heading type="h2">Theme</tw-heading>
        <tw-table :items="theme"/>
    </div>
</template>

<script>
    import TableBasicExample from './TablesBasicExample';

    export default {
        name: 'Table',

        components: {
            TableBasicExample,
        },

        data() {
            return {
                details: [
                    { name: 'Heading', component: 'Heading.vue', defaultTag: 'tw-heading' },
                ],
                props: [
                    { name: 'theme', type: 'Object', description: 'Classes to be applied to the component' },
                    { name: 'items', type: 'Array', description: 'An array of objects to be tabularised' },
                    { name: 'showHeader', type: 'Boolean', description: 'Show or hide the table header' },
                ],
                theme: [
                    {
                        name: 'component',
                        description: 'The component div',
                        default: 'bg-white rounded-md border'
                    },
                    {
                        name: 'headerRounding',
                        description: 'A div that fixes table rounding issues',
                        default: 'py-1 bg-gray-200 rounded-t-md border-red-900 w-full'
                    },
                    {
                        name: 'wrapper',
                        description: 'A div that immediately surrounds the table',
                        default: 'overflow-x-scroll'
                    },
                    {
                        name: 'table',
                        description: 'The table',
                        default: 'table-auto w-full overflow-scroll'
                    },
                    {
                        name: 'thead',
                        description: 'The table header',
                        default: 'border-b border-b-2 bg-gray-200 uppercase text-xs text-gray-600'
                    },
                    {
                        name: 'th',
                        description: 'A table header column',
                        default: 'pt-2 pb-3 px-3 font-medium tracking-widest'
                    },
                    {
                        name: 'tr',
                        description: 'A table row',
                        default: 'first:border-t-0 border-t'
                    },
                    {
                        name: 'td',
                        description: 'A table column',
                        default: 'p-3 text-center'
                    },
                ]
            };
        },
    };
</script>
