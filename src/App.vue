<template id="app">
    <tw-app id="top">
        <template #header>
            <Navbar/>
        </template>
        <template #left>
            <Sidebar/>
        </template>
        <template #right>
            <Headings/>
        </template>

        <router-view/>
    </tw-app>
</template>

<script>
    import Sidebar from './partials/Sidebar';
    import Navbar from './partials/Navbar';
    import Headings from './partials/JumpTo';

    export default {
        name: 'App',

        components: {
            Headings,
            Sidebar,
            Navbar
        },
    };
</script>
