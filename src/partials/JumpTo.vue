<template>
    <div v-if="headings.length" class="sticky top-0 pt-5 text-right">
        <div class="block uppercase mt-4 text-sm text-gray-500 font-medium">
            Jump To
        </div>
        <div class="cursor-pointer normal-case font-normal text-gray-600 hover:text-gray-800"
             :to="heading.anchor"
             v-for="heading in headings"
             @click="scrollIntoView(heading)">
            {{ heading.innerText }}
        </div>
    </div>
</template>

<script>
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
            updateHeadings() {
                this.headings = Array.from(document.querySelectorAll('*[id]'));
            },

            scrollIntoView(heading) {
                heading.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        },
    };
</script>
