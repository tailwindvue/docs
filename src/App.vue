<template>
    <div id="app">
        <tw-app>
            <template v-slot:sidebar>
                <Nav/>
            </template>

            <router-view/>
        </tw-app>
    </div>
</template>

<script>
    import Nav from '@/partials/Nav';

    export default {
        name: 'App',

        components: {
            Nav
        },
    };
</script>
