<template>
    <tw-content>

        <tw-heading id="introduction"
                    type="h2"
                    text="Introduction" />

        <p>
            This component will display a badge in one of the configurable styles: default, info, warning, danger and
            success. Every badge can also be displayed in the sizes predefined here: small, medium and large.
        </p>

        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Component</tw-table-heading>
                <tw-table-heading>Default Tag</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>Badge</tw-table-column>
                <tw-table-column>Badge.vue</tw-table-column>
                <tw-table-column>tw-badge</tw-table-column>
            </tw-table-row>
        </tw-table>

    </tw-content>
</template>

<script>
    export default {
        name: 'BadgeIntroduction',
    };
</script>
