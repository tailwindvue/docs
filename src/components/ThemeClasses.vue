<template>
    <tw-content v-if="theme">
        <tw-heading id="theme" type="h2" text="Theme"/>
        <tw-table>
            <template #header>
                <tw-table-heading>Key</tw-table-heading>
                <tw-table-heading>Classes</tw-table-heading>
            </template>

            <tw-table-row v-for="(classes, key) in theme" :key="key">
                <tw-table-column>
                    {{ key }}
                </tw-table-column>
                <tw-table-column>
                    <tw-badge class="mr-2 my-1" v-for="oneClass in classes" :text="oneClass" :key="oneClass"/>
                </tw-table-column>
            </tw-table-row>
        </tw-table>
    </tw-content>
</template>

<script>
    import { Theme } from '@tailwindvue/tailwindvue';
    import { forEach } from 'lodash';

    export default {
        name: 'ThemeClasses',

        created() {
            this.getClasses(Theme[this.component]);
        },

        props: {
            component: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                theme: {},
            };
        },

        methods: {
            getClasses(object, prefix = null) {
                forEach(object, (value, key) => {
                    if (value === '') {
                        return this.theme[key] = ['None'];
                    }

                    if (typeof value === 'object') {
                        return this.getClasses(value, key);
                    }

                    return this.theme[(prefix ? prefix + '.' + key : key)] = value.split(' ');
                });
            }
        },
    };
</script>
