<template>
    <tw-content>

        <tw-heading id="types"
                    variant="h2"
                    text="Types" />

        <p>You can choose from a number of different alert types.</p>

        <tw-tabbed-code-demo>
            <tw-tab name="Default">
                <tw-code-demo variant="ejs"
                              caption="Default Alert">
                    <tw-alert>
                        A <strong>default</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ defaultAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Info">
                <tw-code-demo language="html"
                              caption="Info Alert">
                    <tw-alert variant="info">
                        An <strong>info</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ infoAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Warning">
                <tw-code-demo language="html"
                              caption="Warning Alert">
                    <tw-alert variant="warning">
                        A <strong>warning</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ warningAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Danger">
                <tw-code-demo language="html"
                              caption="Danger Alert">
                    <tw-alert variant="danger">
                        A <strong>danger</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ dangerAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Success">
                <tw-code-demo language="html"
                              caption="Success Alert">
                    <tw-alert variant="success">
                        A <strong>success</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ successAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="All">
                <tw-code-demo language="html"
                              caption="All Alerts">
                    <tw-alert class="mt-4">
                        A <strong>default</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4"
                              variant="info">
                        An <strong>info</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4"
                              variant="warning">
                        A <strong>warning</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4"
                              variant="danger">
                        A <strong>danger</strong> alert.
                    </tw-alert>

                    <tw-alert class="mt-4"
                              variant="success">
                        A <strong>success</strong> alert.
                    </tw-alert>

                    <template #code>
                        {{ defaultAlert }}
                        {{ infoAlert }}
                        {{ warningAlert }}
                        {{ dangerAlert }}
                        {{ successAlert }}
                    </template>
                </tw-code-demo>
            </tw-tab>
        </tw-tabbed-code-demo>

    </tw-content>
</template>

<script>
    import { defaultAlert, infoAlert, warningAlert, dangerAlert, successAlert } from './snippets';

    export default {
        name: 'AlertsTypes',

        data() {
            return {
                defaultAlert,
                infoAlert,
                warningAlert,
                dangerAlert,
                successAlert
            };
        },
    };
</script>
