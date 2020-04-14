<template>
    <div v-if="headings.length">
        <div class="block uppercase mt-4 text-sm text-gray-500 font-medium">
            Jump To
        </div>
        <div class="cursor-pointer normal-case font-normal text-gray-600 hover:text-gray-800"
             :key="heading.anchor"
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
            '$route'() {
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
