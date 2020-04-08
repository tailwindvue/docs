<template>
    <div>
        <tw-heading text="Headings"/>

        <!-- Introduction -->

        <tw-heading type="h2" text="Introduction"/>
        <p>
            The heading component enables you to display text in one of six heading styles. You can set the heading type
            by passing a type prop. Each heading made semantically correct by adding the appropriate heading tag.
        </p>
        <tw-table class="mt-4" :items="items"/>

        <!-- Basic Usage  -->
        <tw-heading type="h2" text="Basic Usage"/>
        <p>
            You pass the heading through the default slot:
        </p>

        <tw-code-demo class="mt-4" language="vuejs" caption="H1">
            <tw-heading>A heading.</tw-heading>

            <template v-slot:code>
                {{ basicUsageSlot }}
            </template>
        </tw-code-demo>

        <p class="mt-4">
            Or you can use the text prop:
        </p>

        <tw-code-demo class="mt-4" language="vuejs" caption="H1">
            <tw-heading text="Another Heading"/>

            <template v-slot:code>
                {{ basicUsageText }}
            </template>
        </tw-code-demo>

        <tw-heading type="h2" text="Heading Types"/>
        <p class="mt-4">There are 6 heading types: h1 - h6.</p>
        <HeadingsDemo class="mt-4"/>

        <tw-heading type="h2" text="Props"/>
        <tw-table :items="props"/>
    </div>
</template>

<script>
    import HeadingsDemo from './HeadingsDemo';

    export default {
        name: 'Headings',

        components: {
            HeadingsDemo
        },

        data() {
            return {
                basicUsageSlot: `
                    <tw-heading>Heading One</tw-heading>
                `,
                basicUsageText: `
                    <tw-heading text="Another Heading"/>
                `,
                items: [
                    { name: 'Heading', component: 'Heading.vue', defaultTag: 'tw-heading' },
                ],
                props: [
                    {
                        name: 'theme',
                        type: 'Object',
                        required: 'No',
                        allowedValues: 'Any',
                        description: 'Classes to be applied to the component'
                    },
                    {
                        name: 'type',
                        type: 'String',
                        required: 'no',
                        allowedValues: 'h1, h2, h3, h4, h5, h6',
                        description: 'The header type'
                    },
                ],
            };
        },
    };
</script>
