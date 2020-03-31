<template>
    <div class="flex">
        <div class="w-1/5">
            <Nav/>
        </div>
        <div class="w-4/5">
            <tw-heading>Installation</tw-heading>

            <p>
                ...
            </p>
        </div>
    </div>
</template>

<script>
    import Nav from '@/partials/Nav';

    export default {
        name: 'Home',

        components: {
            Nav
        },
    };
</script>
