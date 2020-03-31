<template>
    <div class="flex">
        <div class="w-1/5">
            <Nav/>
        </div>
        <div class="w-4/5">
            <tw-heading>Panels</tw-heading>
            <tw-panel>
                <template v-slot:header>
                    Panels
                </template>

                Bla Bla
            </tw-panel>
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
