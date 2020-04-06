<template>
    <div>
        <tw-heading>Headings</tw-heading>

        This component allows you to add a page heading. Here are the available options:

        <tw-code-demo language="vuejs" caption="Headings Demo">
            <tw-heading type="h1">H1</tw-heading>
            <tw-heading type="h2">H2</tw-heading>
            <tw-heading type="h3">H3</tw-heading>
            <tw-heading type="h4">H4</tw-heading>
            <tw-heading type="h5">H5</tw-heading>

            <template v-slot:code>
                {{ code }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    export default {
        name: 'Headings',

        data() {
            return {
                code: `
                    <tw-heading type="h1">H1</tw-heading>
                    <tw-heading type="h2">H2</tw-heading>
                    <tw-heading type="h3">H3</tw-heading>
                    <tw-heading type="h4">H4</tw-heading>
                    <tw-heading type="h5">H5</tw-heading>
                `
            };
        },
    };
</script>
