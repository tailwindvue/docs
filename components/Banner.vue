<template>
    <div v-if="isHome">
        <div class="container mx-auto px-4 lg:py-6 lg:px-10 flex justify-center bg-green-900 background bg-48 bg-center md:rounded-b-lg shadow-xl xl:mb-4">
            <div class="w-full text-center xl:w-2/3 p-8 xl:p-20 bg-white my-4 xl:m-20 shadow-xl rounded-lg">
                <div class="text-2xl md:text-4xl font-thin">
                    A complete Vue.js component library
                </div>
                <div class="text-xl md:text-3xl tracking-wider text-green-600 font-light">
                    with configurable Tailwind CSS themes
                </div>
                <div class="md:text-xl md:font-light text-gray-500 mt-6 tracking-wide">
                    Tailwind Vue is a complete Vue.js component library styles exclusively with Tailwind CSS utility
                    classes. Use the default theme for quick prototyping then add several themes for total
                    customisation.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',

        computed: {
            isHome() {
                return this.$route.path === '/';
            }
        }
    };
</script>

<style scoped>
    .background {
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23f7fafc' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
</style>

