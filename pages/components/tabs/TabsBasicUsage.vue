<template>
    <tw-content>

        <tw-heading id="basic-usage"
                    type="h2"
                    text="Basic Usage" />

        <tw-code-demo language="vuejs"
                      caption="Basic tab usage">

            <tw-tabs>
                <tw-tab class="pt-4 text-center"
                        name="One">One
                </tw-tab>
                <tw-tab class="pt-4 text-center"
                        name="Two">Two
                </tw-tab>
                <tw-tab class="pt-4 text-center"
                        name="Three">Three
                </tw-tab>
            </tw-tabs>

            <template #code>
                {{ tabsBasicUsage }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    import { tabsBasicUsage } from './snippets';

    export default {
        name: 'TabsBasicUsage',

        data() {
            return {
                tabsBasicUsage
            };
        },
    };
</script>
