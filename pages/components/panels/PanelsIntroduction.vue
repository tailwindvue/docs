<template>
    <tw-content>

        <tw-heading id="introduction"
                    variant="h2"
                    text="Introduction" />

        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Component</tw-table-heading>
                <tw-table-heading>Default Tag</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>Panel</tw-table-column>
                <tw-table-column>Panel.vue</tw-table-column>
                <tw-table-column>tw-panel</tw-table-column>
            </tw-table-row>
        </tw-table>

    </tw-content>
</template>

<script>
    export default {
        name: 'PanelsIntroduction'
    };
</script>
