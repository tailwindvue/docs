<template>
    <div>
        <tw-tabbed-code-demo>
            <tw-tab name="Default">
                <tw-code-demo language="vuejs" caption="Default Alert">
                    <tw-alert>
                        A <strong>default</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ defaultAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Info">
                <tw-code-demo language="vuejs" caption="Info Alert">
                    <tw-alert type="info">
                        An <strong>info</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ infoAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Warning">
                <tw-code-demo language="vuejs" caption="Warning Alert">
                    <tw-alert type="warning">
                        A <strong>warning</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ warningAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Danger">
                <tw-code-demo language="vuejs" caption="Danger Alert">
                    <tw-alert type="danger">
                        A <strong>danger</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ dangerAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Success">
                <tw-code-demo language="vuejs" caption="Success Alert">
                    <tw-alert type="success">
                        A <strong>success</strong> alert.
                    </tw-alert>

                    <template v-slot:code>
                        {{ successAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="All">
                <tw-code-demo language="vuejs" caption="All Alerts">
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
                        {{ defaultAlert }}
                        {{ infoAlert }}
                        {{ warningAlert }}
                        {{ dangerAlert }}
                        {{ successAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>
        </tw-tabbed-code-demo>
    </div>
</template>

<script>
    export default {
        name: 'AlertsDemo',

        data() {
            return {
                defaultAlert: `
                    <tw-alert>
                        A default alert.
                    </tw-alert>
                `,

                infoAlert: `
                    <tw-alert type="info">
                        An info alert.
                    </tw-alert>
                `,

                warningAlert: `
                    <tw-alert type="warning">
                        A warning alert.
                    </tw-alert>
                `,

                dangerAlert: `
                    <tw-alert type="danger">
                        A danger alert.
                    </tw-alert>
                `,

                successAlert: `
                    <tw-alert type="success">
                        A success alert.
                    </tw-alert>
                `,
            };
        },


    };
</script>
