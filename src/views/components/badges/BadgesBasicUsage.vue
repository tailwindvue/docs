<template>
    <div>
        <tw-heading type="h2" text="Basic Usage"/>

        <p>
            You pass the badge text through the default slot:
        </p>

        <tw-code-demo language="vuejs" caption="Basic badge usage with slot">
            <tw-badge>Badge</tw-badge>

            <template v-slot:code>
                {{ basicUsageSlot }}
            </template>
        </tw-code-demo>

        <p>
            Or you can use the text prop:
        </p>

        <tw-code-demo language="vuejs" caption="Basic badge usage with text prop">
            <tw-badge text="badge"/>

            <template v-slot:code>
                {{ basicUsageText }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    export default {
        name: 'BadgeBasicUsage',

        data() {
            return {
                basicUsageSlot: `
                    <tw-badge>Badge</tw-badge>
                `,
                basicUsageText: `
                    <tw-badge text="Badge"/>
                `
            };
        },
    };
</script>
