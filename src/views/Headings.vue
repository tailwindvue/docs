<template>
    <div class="flex">
        <div class="w-1/5">
            <Nav/>
        </div>
        <div class="w-4/5">
            <tw-heading>Headings</tw-heading>

            This component allows you to add a page heading. Here are the available options:

            <tw-heading type="h1">H1</tw-heading>
            <tw-heading type="h2">H2</tw-heading>
            <tw-heading type="h3">H3</tw-heading>
            <tw-heading type="h4">H4</tw-heading>
            <tw-heading type="h5">H5</tw-heading>
        </div>
    </div>
</template>

<script>
    import Nav from '@/partials/Nav';

    export default {
        name: 'Panels',

        components: {
            Nav
        },
    };
</script>
