<template>
    <tw-navbar>
        <template v-slot:left>
            <div class="flex items-baseline text-gray-900">
                <router-link to="/">
                    <img class="h-6" src="../assets/logo.svg" alt="TailwindVue Logo">
                </router-link>
            </div>
        </template>
        <template v-slot:right>
            <a class="text-2xl text-gray-500 hover:text-gray-800 mr-4" href="https://www.github.com/tailwindvue">
                <i class="fab fa-github"></i>
            </a>
            <a class="text-2xl text-gray-500 hover:text-gray-800"
               href="https://www.npmjs.com/package/@tailwindvue/tailwindvue">
                <i class="fab fa-npm"></i>
            </a>
        </template>
    </tw-navbar>
</template>

<script>
    export default {
        name: 'Navbar'
    };
</script>
