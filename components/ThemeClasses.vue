<template>
    <tw-content v-if="theme">
        <tw-heading id="theme"
                    variant="h2"
                    text="Theme" />

        <ThemeElement :name="component"
                      :element="theme" />
    </tw-content>
</template>

<script>
    import Theme from '@tailwindvue/tailwindvue/src/stubs/theme';
    import forEach from 'lodash.foreach';
    import ThemeElement from './ThemeElement';

    export default {
        name: 'ThemeClasses',
        components: { ThemeElement },
        props: {
            component: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                theme: Theme[this.component],
            };
        },

        created() {
            // this.getClasses(Theme[this.component]);
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

                    return this.theme[this.component + ' > ' + (prefix ? prefix + ' > ' + key : key)] = value.split(' ');
                });
            }
        },
    };
</script>
