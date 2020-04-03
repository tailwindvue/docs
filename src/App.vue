<template id="app">
    <tw-app>
        <template v-slot:header>
            <Navbar/>
        </template>
        <template v-slot:sidebar>
            <Sidebar/>
        </template>

        <router-view/>
    </tw-app>
</template>

<script>
    import Sidebar from './partials/Sidebar';
    import Navbar from './partials/Navbar';

    export default {
        name: 'App',

        components: {
            Sidebar,
            Navbar
        },
    };
</script>
