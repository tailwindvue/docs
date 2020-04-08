<template>
    <tw-code-demo language="vuejs" caption="Basic table usage">
        <tw-table :items="items"/>

        <template v-slot:code>
            {{ tableBasicExample }}
        </template>
    </tw-code-demo>
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

                tableBasicExample: `
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
            };
        },
    };
</script>
