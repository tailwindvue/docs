<template>
    <tw-content>

        <tw-heading id="basic-usage" type="h2" text="Basic Usage"/>

        <tw-code-demo language="vuejs" caption="Basic Panel Usage">
            <tw-panel>
                <template #header>
                    Panel Heading
                </template>

                Panel Body
            </tw-panel>

            <template #code>
                {{ panelBasicUsage }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    export default {
        name: 'PanelsBasicUsage',

        data() {
            return {
                panelBasicUsage: `
                    <tw-panel>
                        <template #header>
                            Panel Heading
                        </template>

                        Panel Body

                    </tw-panel>
                `
            };
        },
    };
</script>
