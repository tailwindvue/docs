<template>
    <tw-content>

        <tw-heading id="basic-usage"
                    type="h2"
                    text="Basic Usage" />

        <p>
            You pass the badge text through the default slot:
        </p>

        <tw-code-demo language="vuejs"
                      caption="Basic badge usage with slot">
            <tw-badge>Badge</tw-badge>

            <template #code>
                {{ basicUsageSlot }}
            </template>
        </tw-code-demo>

        <p>
            Or you can use the text prop:
        </p>

        <tw-code-demo language="vuejs"
                      caption="Basic badge usage with text prop">
            <tw-badge text="badge" />

            <template #code>
                {{ basicUsageText }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    import { basicUsageSlot, basicUsageText } from './snippets';

    export default {
        name: 'BadgeBasicUsage',

        data() {
            return {
                basicUsageSlot,
                basicUsageText
            };
        },
    };
</script>
