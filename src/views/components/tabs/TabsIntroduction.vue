<template>
    <tw-content>

        <tw-heading id="introduction" type="h2" text="Introduction"/>

        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Component</tw-table-heading>
                <tw-table-heading>Default Tag</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>Tabs</tw-table-column>
                <tw-table-column>Tabs.vue</tw-table-column>
                <tw-table-column>tw-tabs</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>Tab</tw-table-column>
                <tw-table-column>Tab.vue</tw-table-column>
                <tw-table-column>tw-tab</tw-table-column>
            </tw-table-row>
        </tw-table>

    </tw-content>
</template>

<script>
    export default {
        name: 'TabsIntroduction'
    };
</script>

