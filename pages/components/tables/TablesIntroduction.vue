<template>
    <tw-content>
        <tw-heading id="introduction"
                    type="h2"
                    text="Introduction" />

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
    </tw-content>
</template>

<script>
    export default {
        name: 'TablesIntroduction'
    };
</script>

