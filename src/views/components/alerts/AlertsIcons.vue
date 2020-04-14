<template>
    <tw-content>

        <tw-heading id="icons" type="h2" text="Icons"/>

        <p>You can use a slot called icon to add an icon to your alert.</p>

        <tw-code-demo language="vuejs" caption="Basic alert usage">
            <tw-alert>
                <template #icon>
                    <i class="fas fa-lg fa-pencil"/>
                </template>
                An alert with an icon.
            </tw-alert>

            <template #code>
                {{ alertWithIcon }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    import { alertWithIcon } from './snippets';

    export default {
        name: 'AlertsIcons',

        data() {
            return {
                alertWithIcon
            };
        },
    };
</script>
