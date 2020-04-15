<template id="app">
    <tw-app id="top">
        <template #header>
            <Navbar />
        </template>
        <template #left>
            <Sidebar />
        </template>
        <template #right>
            <JumpTo />
        </template>
        <template #banner>
            <Banner />
        </template>
        <template #footer>
            <Footer />
        </template>
        <router-view />
    </tw-app>
</template>

<script>
    import Sidebar from './partials/Sidebar';
    import Navbar from './partials/Navbar';
    import JumpTo from './partials/JumpTo';
    import Banner from './partials/Banner';
    import Footer from './partials/Footer';

    export default {
        name: 'App',

        components: {
            Footer,
            Banner,
            JumpTo,
            Sidebar,
            Navbar
        },
    };
</script>

