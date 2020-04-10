<template>
    <tw-content>

        <tw-heading id="introduction" type="h2" text="Introduction"/>

        <p>
            The heading component enables you to display text in one of six heading styles. You can set the heading type
            by passing a type prop. Each heading made semantically correct by adding the appropriate heading tag.
        </p>

        <tw-table>
            <template #header>
                <tw-table-heading>Name</tw-table-heading>
                <tw-table-heading>Component</tw-table-heading>
                <tw-table-heading>Default Tag</tw-table-heading>
            </template>

            <tw-table-row>
                <tw-table-column>Heading</tw-table-column>
                <tw-table-column>Heading.vue</tw-table-column>
                <tw-table-column>tw-heading</tw-table-column>
            </tw-table-row>
        </tw-table>

    </tw-content>
</template>

<script>
    export default {
        name: 'HeadingsIntroduction'
    };
</script>
