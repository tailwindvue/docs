<template>
    <tw-content>

        <tw-heading id="basic-usage"
                    variant="h2"
                    text="Basic Usage" />

        <tw-code-demo language="vuejs"
                      caption="Basic alert usage">
            <tw-alert>
                A basic alert.
            </tw-alert>

            <template #code>
                {{ basicAlert }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    import { basicAlert } from './snippets';

    export default {
        name: 'AlertsBasicUsage',

        data() {
            return {
                basicAlert
            };
        },
    };
</script>
