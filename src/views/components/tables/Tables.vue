<template>
    <div>
        <tw-heading>Tables</tw-heading>
        <tw-heading type="h2">Introduction</tw-heading>
        <tw-heading type="h3">Components</tw-heading>
        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Component</tw-table-heading>
                <tw-table-heading>Default Tag</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>Table</tw-table-column>
                <tw-table-column>Table.vue</tw-table-column>
                <tw-table-column>tw-table</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>Table Heading</tw-table-column>
                <tw-table-column>TableHeading.vue</tw-table-column>
                <tw-table-column>tw-table-heading</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>Table Row</tw-table-column>
                <tw-table-column>TableRow.vue</tw-table-column>
                <tw-table-column>tw-table-row</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>Table Column</tw-table-column>
                <tw-table-column>TableColumn.vue</tw-table-column>
                <tw-table-column>tw-table-column</tw-table-column>
            </tw-table-row>
        </tw-table>

        <TablesBasicUsage/>

        <tw-heading type="h2">Props</tw-heading>
        <tw-table :items="props"/>

        <ThemeClasses component="table"/>
    </div>
</template>

<script>
    import TablesBasicUsage from './TablesBasicUsage';
    import ThemeClasses from '../../../components/ThemeClasses';

    export default {
        name: 'Tables',

        components: {
            ThemeClasses,
            TablesBasicUsage,
        },

        data() {
            return {
                props: [
                    { name: 'theme', type: 'Object', description: 'Classes to be applied to the component' },
                    { name: 'items', type: 'Array', description: 'An array of objects to be tabularised' },
                    { name: 'showHeader', type: 'Boolean', description: 'Show or hide the table header' },
                ],
            };
        },
    };
</script>
