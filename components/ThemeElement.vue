<template>
    <details open>
        <summary class="font-bold">
            <span class="cursor-pointer">{{ name }}</span>
        </summary>

        <div v-for="(item, key) in element"
             :key="key"
             class="ml-4">

            <details open>
                <summary>
                    <span class="cursor-pointer">{{ key }}</span>
                </summary>

                <div v-if="key === 'class'"
                     class="p-4 pb-2 my-1 border rounded">
                    <tw-badge v-for="className in item.split(' ')"
                              :key="className"
                              class="mr-2 mb-2">
                        {{ className }}
                    </tw-badge>
                </div>

                <div v-if="key === 'variants'">
                    <details v-for="(variantClasses, variantName) in item"
                             :key="variantName"
                             class="ml-4"
                             open>
                        <summary>
                            <span class="cursor-pointer">
                                {{ variantName }}x
                            </span>
                        </summary>
                        <div class="p-4 my-1 border rounded">
                            <tw-badge v-for="variantClass in variantClasses.split(' ')"
                                      :key="variantClass"
                                      class="mr-2 my-1"
                                      :text="variantClass || 'None'" />
                        </div>
                    </details>
                </div>

                <div v-if="key === 'children'">
                    <ThemeElement v-for="(child, childName) in item"
                                  :key="childName"
                                  class="ml-4"
                                  :name="childName"
                                  :element="child" />
                </div>
            </details>
        </div>
    </details>
</template>

<script>
    export default {
        name: 'ThemeElement',

        components: {
            ThemeElement: this,
        },

        props: {
            name: {
                type: String,
                required: true
            },

            element: {
                type: Object,
                required: true
            },
        },

        data() {
            return {
                isOpen: false
            };
        },
    };
</script>
