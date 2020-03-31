<template>
    <tw-nav :items="items"/>
</template>

<script>
    export default {
        name: 'Nav',

        data() {
            return {
                items: [
                    { label: 'Home' , url: '/'},
                    { label: 'Headings' , url: '/headings'},
                    { label: 'Panels' , url: '/panels'},
                ]
            };
        },
    };
</script>
