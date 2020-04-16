<template>
    <div v-if="headings.length"
         class="sticky top-24">
        <div class="block uppercase mt-4 text-sm text-gray-500 font-medium">
            Jump To
        </div>
        <div v-for="heading in headings"
             :key="heading.anchor"
             class="cursor-pointer normal-case font-normal text-gray-600 hover:text-gray-800"
             :to="heading.anchor"
             @click="scrollIntoView(heading)">
            {{ getLabel(heading) }}
        </div>
    </div>
</template>

<script>
    import startCase from 'lodash/startCase';

    export default {
        name: 'JumpTo',

        data() {
            return {
                headings: []
            };
        },

        watch: {
            '$route'() {
                this.updateHeadings();
            }
        },

        mounted() {
            this.updateHeadings();
        },

        methods: {
            getLabel(heading) {
                return startCase(heading.getAttribute('id').replace('-', ' '));
            },

            updateHeadings() {
                this.headings = Array.from(document.querySelectorAll('*[id]:not(#__nuxt):not(#__layout'));
            },

            scrollIntoView(element) {
                const offset = 75;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },
    };
</script>
