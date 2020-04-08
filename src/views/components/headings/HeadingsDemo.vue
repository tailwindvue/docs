<template>
    <div>
        <tw-tabbed-code-demo>
            <tw-tab name="H1">
                <tw-code-demo language="vuejs" caption="H1">
                    <tw-heading type="h1">
                        Heading One
                    </tw-heading>

                    <template v-slot:code>
                        {{ h1 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H2">
                <tw-code-demo language="vuejs" caption="H2">
                    <tw-heading type="h2">
                        Heading Two
                    </tw-heading>

                    <template v-slot:code>
                        {{ h2 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H3">
                <tw-code-demo language="vuejs" caption="H3">
                    <tw-heading type="h3">
                        Heading Three
                    </tw-heading>

                    <template v-slot:code>
                        {{ h3 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H4">
                <tw-code-demo language="vuejs" caption="H4">
                    <tw-heading type="h4">
                        Heading Four
                    </tw-heading>

                    <template v-slot:code>
                        {{ h4 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H5">
                <tw-code-demo language="vuejs" caption="H5">
                    <tw-heading type="h5">
                        Heading Five
                    </tw-heading>

                    <template v-slot:code>
                        {{ h5 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="H6">
                <tw-code-demo language="vuejs" caption="H6">
                    <tw-heading type="h6">
                        Heading Six
                    </tw-heading>

                    <template v-slot:code>
                        {{ h6 }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="All">
                <tw-code-demo language="vuejs" caption="All Alerts">

                    <tw-heading type="h1">Heading One</tw-heading>
                    <tw-heading type="h2">Heading Two</tw-heading>
                    <tw-heading type="h3">Heading Three</tw-heading>
                    <tw-heading type="h4">Heading Four</tw-heading>
                    <tw-heading type="h5">Heading Five</tw-heading>
                    <tw-heading type="h6">Heading Five</tw-heading>

                    <template v-slot:code>
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
    </div>
</template>

<script>
    export default {
        name: 'HeadingsDemo',

        data() {
            return {
                h1: `
                    <tw-heading type="h1">
                        Heading One
                    </tw-heading>
                `,

                h2: `
                    <tw-heading type="h2">
                        Heading Two
                    </tw-heading>
                `,

                h3: `
                    <tw-heading type="h3">
                        Heading Three
                    </tw-heading>
                `,

                h4: `
                    <tw-heading type="h4">
                        Heading Four
                    </tw-heading>
                `,

                h5: `
                    <tw-heading type="h5">
                        Heading Five
                    </tw-heading>
                `,

                h6: `
                    <tw-heading type="h6">
                        Heading Six
                    </tw-heading>
                `,
            };
        },
    };
</script>
