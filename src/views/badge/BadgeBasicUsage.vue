<template>
    <div>
        <tw-heading type="h2" text="Basic Usage"/>

        <p class="mt-4">
            You pass the badge text through the default slot:
        </p>

        <tw-code-demo class="mt-4" language="vuejs" caption="Basic badge usage with slot">
            <tw-badge>Badge</tw-badge>

            <template v-slot:code>
                {{ basicUsageSlot }}
            </template>
        </tw-code-demo>

        <p class="mt-4">
            Or you can use the text prop:
        </p>

        <tw-code-demo class="mt-4" language="vuejs" caption="Basic badge usage with text prop">
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
