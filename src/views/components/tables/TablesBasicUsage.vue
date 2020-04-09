<template>
    <div>
        <tw-heading type="h2">Basic Usage</tw-heading>

        <p>There are two ways to create a table:</p>

        <span class="h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">1</span>
        You can pass an array of objects into the table component. The component will use the keys of the first object
        to generate the table headings. Each object will then be rendered as a table row.

        <tw-code-demo language="vuejs" caption="Basic table usage">
            <tw-table :items="items"/>

            <template v-slot:code>
                {{ tableBasicUsageObject }}
            </template>
        </tw-code-demo>

        <span class="h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">1</span>
        Alternatively, you can use the table heading, row and column components directly in the heading and default
        slots.

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

            <template v-slot:code>
                {{ tableBasicUsageSlot }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    export default {
        name: 'TableBasicExample',

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
