<template>
    <tw-content>

        <tw-heading id="types"
                    variant="h2"
                    text="Types" />

        <tw-tabbed-code-demo>
            <tw-tab name="Default">
                <tw-code-demo language="html"
                              caption="Default Badge">
                    <tw-badge text="Badge" />

                    <template #code>
                        {{ defaultBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Info">
                <tw-code-demo language="html"
                              caption="Info Badge">
                    <tw-badge variant="info"
                              text="Badge" />

                    <template #code>
                        {{ infoBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Warning">
                <tw-code-demo language="html"
                              caption="Warning Badge">
                    <tw-badge variant="warning"
                              text="Badge" />

                    <template #code>
                        {{ warningBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Danger">
                <tw-code-demo language="html"
                              caption="Danger Badge">
                    <tw-badge variant="danger"
                              text="Badge" />

                    <template #code>
                        {{ dangerBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Success">
                <tw-code-demo language="html"
                              caption="Success Badge">
                    <tw-badge variant="success"
                              text="Badge" />

                    <template #code>
                        {{ successBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="All">
                <tw-code-demo language="html"
                              caption="All Alerts">

                    <div class="mb-4">
                        <tw-badge text="Badge" />
                    </div>
                    <div class="mb-4">
                        <tw-badge variant="info"
                                  text="Badge" />
                    </div>
                    <div class="mb-4">
                        <tw-badge variant="warning"
                                  text="Badge" />
                    </div>
                    <div class="mb-4">
                        <tw-badge variant="danger"
                                  text="Badge" />
                    </div>
                    <div class="mb-4">
                        <tw-badge variant="success"
                                  text="Badge" />
                    </div>

                    <template #code>
                        {{ defaultBadge }}
                        {{ infoBadge }}
                        {{ warningBadge }}
                        {{ dangerBadge }}
                        {{ successBadge }}
                    </template>
                </tw-code-demo>
            </tw-tab>
        </tw-tabbed-code-demo>

    </tw-content>
</template>

<script>
    import { defaultBadge, infoBadge, warningBadge, dangerBadge, successBadge } from './snippets';

    export default {
        name: 'BadgeTypes',

        data() {
            return {
                defaultBadge,
                infoBadge,
                warningBadge,
                dangerBadge,
                successBadge
            };
        },
    };
</script>
