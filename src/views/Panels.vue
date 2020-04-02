<template>
    <div>
        <tw-heading>Panels</tw-heading>
        <tw-panel>
            <template v-slot:header>
                Panels
            </template>

            Bla Bla
        </tw-panel>
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
