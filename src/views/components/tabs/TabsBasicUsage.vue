<template>
    <tw-content>

        <tw-heading id="basic-usage" type="h2" text="Basic Usage"/>

        <tw-code-demo language="vuejs" caption="Basic tab usage">

            <tw-tabs>
                <tw-tab class="pt-4 text-center" name="One">One</tw-tab>
                <tw-tab class="pt-4 text-center" name="Two">Two</tw-tab>
                <tw-tab class="pt-4 text-center" name="Three">Three</tw-tab>
            </tw-tabs>

            <template #code>
                {{ tabsBasicUsage }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    export default {
        name: 'TabsBasicUsage',

        data() {
            return {
                tabsBasicUsage: `
                    <tw-tabs>
                        <tw-tab name="One">One</tw-tab>
                        <tw-tab name="Two">Two</tw-tab>
                        <tw-tab name="Three">Three</tw-tab>
                    </tw-tabs>
                `
            };
        },
    };
</script>
