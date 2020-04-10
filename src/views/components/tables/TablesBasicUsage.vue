<template>
    <tw-content>

        <tw-heading id="basic-usage" type="h2" text="Basic Usage"/>

        <p>There are two ways to create a table:</p>

        <tw-heading type="h3" text="Using an array of objects" number="1"/>

        <p>
            You can pass an array of objects into the table component. The component will use the keys of the first
            object
            to generate the table headings. Each object will then be rendered as a table row.
        </p>

        <tw-code-demo language="vuejs" caption="Basic table usage">
            <tw-table :items="items"/>

            <template #code>
                {{ tableBasicUsageObject }}
            </template>
        </tw-code-demo>

        <tw-heading type="h3" text="Using the table components" number="2"/>

        <p>
            Alternatively, you can use the table heading, row and column components directly in the heading and default
            slots.
        </p>

        <tw-code-demo language="vuejs" caption="Basic table usage with the default slot">
            <tw-table>
                <template #header>
                    <tw-table-row>
                        <tw-table-heading>Jane</tw-table-heading>
                        <tw-table-heading>Bennett</tw-table-heading>
                        <tw-table-heading>36</tw-table-heading>
                    </tw-table-row>
                </template>

                <tw-table-row>
                    <tw-table-column>Jane</tw-table-column>
                    <tw-table-column>Bennett</tw-table-column>
                    <tw-table-column>36</tw-table-column>
                </tw-table-row>

                <tw-table-row>
                    <tw-table-column>John</tw-table-column>
                    <tw-table-column>Smith</tw-table-column>
                    <tw-table-column>43</tw-table-column>
                </tw-table-row>
            </tw-table>

            <template #code>
                {{ tableBasicUsageSlot }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    export default {
        name: 'TableBasicUsage',

        data() {
            return {
                items: [
                    { firstName: 'Jane', lastName: 'Bennett', age: 36 },
                    { firstName: 'John', lastName: 'Smith', age: 24 },
                    { firstName: 'Peter', lastName: 'Jones', age: 43 },
                ],

                tableBasicUsageObject: `
                    <template>
                        <tw-table :items="items"/>
                    </template>

                    \<script\>
                        export default() {
                            data() {
                                return {
                                    items: [
                                        { firstName: 'Jane', lastName: 'Bennett', age: 36 },
                                        { firstName: 'John', lastName: 'Smith', age: 24 },
                                        { firstName: 'Peter', lastName: 'Jones', age: 43 },
                                    ],
                                }
                            }
                        }
                    \<\/script\>
                `,

                tableBasicUsageSlot: `
                    <tw-table>
                        <template #header>
                            <tw-table-row>
                                <tw-table-heading>Jane</tw-table-heading>
                                <tw-table-heading>Bennett</tw-table-heading>
                                <tw-table-heading>36</tw-table-heading>
                            </tw-table-row>
                        </template>

                        <tw-table-row>
                            <tw-table-column>Jane</tw-table-column>
                            <tw-table-column>Bennett</tw-table-column>
                            <tw-table-column>36</tw-table-column>
                        </tw-table-row>

                        <tw-table-row>
                            <tw-table-column>John</tw-table-column>
                            <tw-table-column>Smith</tw-table-column>
                            <tw-table-column>43</tw-table-column>
                        </tw-table-row>
                    </tw-table>
                `
            };
        },
    };
</script>
