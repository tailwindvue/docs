<template>
    <div>
        <tw-heading id="theme" type="h2" text="Theme"/>
        <tw-table>
            <template #header>
                <tw-table-heading>Key</tw-table-heading>
                <tw-table-heading>Classes</tw-table-heading>
            </template>

            <tw-table-row v-for="(componentClasses, name) in flattenedTheme[component]" :key="name">
                <tw-table-column>
                    {{ name }}
                </tw-table-column>
                <tw-table-column>
                    <tw-badge class="mr-2 my-1" v-for="item in componentClasses.split(' ')" :text="item" :key="item"/>
                </tw-table-column>
            </tw-table-row>
        </tw-table>
    </div>
</template>

<script>
    import theme from '@tailwindvue/tailwindvue/src/stubs/theme';

    export default {
        name: 'ThemeClasses',

        computed: {
            flattenedTheme() {
                for (let [componentName, component] of Object.entries(this.theme)) {
                    for (let [key, classes] of Object.entries(component)) {
                        if (!classes.length) {
                            this.theme[componentName][key] = 'None';
                        }

                        if (typeof classes === 'object') {
                            delete this.theme[componentName][key];

                            for (let [classesKey, classesValue] of Object.entries(classes)) {
                                this.theme[componentName][key + ' / ' + classesKey] = classesValue;
                            }
                        }
                    }
                }

                return this.theme;
            },
        },

        props: {
            component: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                theme
            };
        },
    };
</script>
