<template>
    <div>
        <tw-heading>Headings</tw-heading>

        <tw-heading type="h2">Introduction</tw-heading>

        <table>
            <tr>
                <td>Name</td>
                <td>Heading</td>
            </tr>
            <tr>
                <td>Component</td>
                <td>Heading.vue</td>
            </tr>
            <tr>
                <td>Tag</td>
                <td>tw-heading</td>
            </tr>
        </table>

        <tw-heading type="h2">Types</tw-heading>

        There are 6 heading types: h1 - h6.

        <HeadingsDemo/>
    </div>
</template>

<script>
    import HeadingsDemo from './HeadingsDemo';

    export default {
        name: 'Headings',

        components: {
            HeadingsDemo
        },
    };
</script>
