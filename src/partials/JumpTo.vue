<template>
    <div v-if="headings.length" class="md:sticky md:top-8 text-right">
        <div class="block uppercase mt-4 text-sm text-gray-500 font-medium">
            Jump To
        </div>
        <div class="cursor-pointer normal-case font-normal text-gray-600 hover:text-gray-800"
             :to="heading.anchor"
             v-for="heading in headings"
             @click="scrollIntoView(heading)">
            {{ getLabel(heading) }}
        </div>
    </div>
</template>

<script>
    import { startCase } from 'lodash';

    export default {
        name: 'JumpTo',

        mounted() {
            this.updateHeadings();
        },

        watch: {
            '$route'(to, from) {
                this.updateHeadings();
            }
        },

        data() {
            return {
                headings: []
            };
        },

        methods: {
            getLabel(heading) {
                return startCase(heading.getAttribute('id').replace('-', ' '));
            },

            updateHeadings() {
                this.headings = Array.from(document.querySelectorAll('*[id]'));
            },

            scrollToTop() {
                this.scrollIntoView(document.getElementById('#top'));
            },

            async scrollIntoView(heading) {
                await heading.scrollIntoView({ behavior: 'smooth' });
            }
        },
    };
</script>
