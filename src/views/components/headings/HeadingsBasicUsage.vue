<template>
    <tw-content>

        <tw-heading id="basic-usage" type="h2" text="Basic Usage"/>

        <p>
            You pass the heading through the default slot:
        </p>

        <tw-code-demo language="vuejs" caption="H1">
            <tw-heading>A heading.</tw-heading>

            <template #code>
                {{ basicUsageSlot }}
            </template>
        </tw-code-demo>

        <p>
            Or you can use the text prop:
        </p>

        <tw-code-demo language="vuejs" caption="H1">
            <tw-heading text="Another Heading"/>

            <template #code>
                {{ basicUsageText }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    import { basicUsageSlot, basicUsageText } from './snippets';

    export default {
        name: 'HeadingsBasicUsage',

        data() {
            return {
                basicUsageSlot,
                basicUsageText
            };
        },
    };
</script>
