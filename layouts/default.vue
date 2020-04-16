<template>
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
        <nuxt />
    </tw-app>
</template>

<script>
    import Sidebar from '../components/Sidebar';
    import Navbar from '../components/Navbar';
    import JumpTo from '../components/JumpTo';
    import Banner from '../components/Banner';
    import Footer from '../components/Footer';

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

