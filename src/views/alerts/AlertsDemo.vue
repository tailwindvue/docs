<template>
    <tw-code-demo language="vuejs" caption="Alerts Demo">
        <tw-alert class="mt-4">
            A <strong>default</strong> alert.
        </tw-alert>

        <tw-alert class="mt-4" type="info">
            An <strong>info</strong> alert.
        </tw-alert>

        <tw-alert class="mt-4" type="warning">
            A <strong>warning</strong> alert.
        </tw-alert>

        <tw-alert class="mt-4" type="danger">
            A <strong>danger</strong> alert.
        </tw-alert>

        <tw-alert class="mt-4" type="success">
            A <strong>success</strong> alert.
        </tw-alert>

        <template v-slot:code>
            {{ code }}
        </template>
    </tw-code-demo>
</template>

<script>
    export default {
        name: 'AlertsDemo',

        data() {
            return {
                code: `
                    <tw-alert class="mt-4">
                        A <strong>default</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4" type="info">
                        An <strong>info</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4" type="warning">
                        A <strong>warning</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4" type="danger">
                        A <strong>danger</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4" type="success">
                        A <strong>success</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ code }}
                    </template>
                `
            };
        },


    };
</script>
