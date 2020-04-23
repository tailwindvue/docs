<template>
    <tw-content>
        <tw-heading id="types"
                    variant="h2"
                    text="Types" />

        <tw-tabbed-code-demo>
            <tw-tab name="H1">
                <tw-code-demo language="vuejs"
                              caption="H1">
                    <tw-heading variant="h1">
                        Heading One
                    </tw-heading>

                    <template #code>
                        {{ h1 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H2">
                <tw-code-demo language="vuejs"
                              caption="H2">
                    <tw-heading variant="h2">
                        Heading Two
                    </tw-heading>

                    <template #code>
                        {{ h2 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H3">
                <tw-code-demo language="vuejs"
                              caption="H3">
                    <tw-heading variant="h3">
                        Heading Three
                    </tw-heading>

                    <template #code>
                        {{ h3 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H4">
                <tw-code-demo language="vuejs"
                              caption="H4">
                    <tw-heading variant="h4">
                        Heading Four
                    </tw-heading>

                    <template #code>
                        {{ h4 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H5">
                <tw-code-demo language="vuejs"
                              caption="H5">
                    <tw-heading variant="h5">
                        Heading Five
                    </tw-heading>

                    <template #code>
                        {{ h5 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H6">
                <tw-code-demo language="vuejs"
                              caption="H6">
                    <tw-heading variant="h6">
                        Heading Six
                    </tw-heading>

                    <template #code>
                        {{ h6 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="All">
                <tw-code-demo language="vuejs"
                              caption="All Alerts">

                    <tw-heading variant="h1">
                        Heading One
                    </tw-heading>
                    <tw-heading variant="h2">
                        Heading Two
                    </tw-heading>
                    <tw-heading variant="h3">
                        Heading Three
                    </tw-heading>
                    <tw-heading variant="h4">
                        Heading Four
                    </tw-heading>
                    <tw-heading variant="h5">
                        Heading Five
                    </tw-heading>
                    <tw-heading variant="h6">
                        Heading Five
                    </tw-heading>

                    <template #code>
                        {{ h1 }}
                        {{ h2 }}
                        {{ h3 }}
                        {{ h4 }}
                        {{ h5 }}
                        {{ h6 }}
                    </template>
                </tw-code-demo>
            </tw-tab>
        </tw-tabbed-code-demo>
    </tw-content>
</template>

<script>
    import { h1, h2, h3, h4, h5, h6 } from './snippets';

    export default {
        name: 'HeadingsTypes',

        data() {
            return {
                h1,
                h2,
                h3,
                h4,
                h5,
                h6
            };
        },
    };
</script>
