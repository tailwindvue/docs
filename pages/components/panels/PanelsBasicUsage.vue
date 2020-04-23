<template>
    <tw-content>

        <tw-heading id="basic-usage"
                    variant="h2"
                    text="Basic Usage" />

        <tw-code-demo language="html"
                      caption="Basic Panel Usage">
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
    import { panelBasicUsage } from './snippets';

    export default {
        name: 'PanelsBasicUsage',

        data() {
            return {
                panelBasicUsage,
            };
        },
    };
</script>
