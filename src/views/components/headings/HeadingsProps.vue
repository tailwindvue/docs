<template>
    <tw-content>

        <tw-heading id="props"
                    type="h2"
                    text="Props" />

        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Type</tw-table-heading>
                <tw-table-heading>Required</tw-table-heading>
                <tw-table-heading>Permitted Values</tw-table-heading>
                <tw-table-heading>Description</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>theme</tw-table-column>
                <tw-table-column>Object</tw-table-column>
                <tw-table-column>No</tw-table-column>
                <tw-table-column>Any</tw-table-column>
                <tw-table-column>Classes to be applied to the component</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>type</tw-table-column>
                <tw-table-column>String</tw-table-column>
                <tw-table-column>yes</tw-table-column>
                <tw-table-column>h1, h2, h3, h4, h5, h6</tw-table-column>
                <tw-table-column>The header type</tw-table-column>
            </tw-table-row>
        </tw-table>

    </tw-content>
</template>

<script>
    export default {
        name: 'HeadingsProps'
    };
</script>

