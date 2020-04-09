<template>
    <div>
        <tw-heading type="h2" text="Basic Usage"/>

        <tw-code-demo language="vuejs" caption="Basic alert usage">
            <tw-alert>
                A basic alert.
            </tw-alert>

            <template v-slot:code>
                {{ basicAlert }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    export default {
        name: 'AlertsBasicUsage',

        data() {
            return {
                basicAlert: `
                    <tw-alert>
                        A basic alert.
                    </tw-alert>
                `,
            };
        },
    };
</script>
