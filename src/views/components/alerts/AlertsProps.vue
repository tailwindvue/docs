<template>
    <tw-content>

        <tw-heading id="props" type="h2">Props</tw-heading>

        <tw-heading type="h3">Dismissable</tw-heading>

        <p>
            You can take action when an alert is dismissed by listening for a dismissed event.
        </p>

        <div v-if="alertDismissed">
            <span @click="showAlert($refs.dismissable)">Bring the alert back.</span>
        </div>

        <tw-code-demo language="vuejs" caption="A dismissable alert">
            <tw-alert ref="dismissable" :dismissable="true" @dismissed="alertDismissed=!alertDismissed">
                You can dismiss this alert by clicking the button on the right <i class="fas fa-fw fa-arrow-right"></i>
            </tw-alert>

            <div v-if="alertDismissed">
                The alert was dismissed.
            </div>

            <template #code>
                {{ dismissableAlert }}
            </template>
        </tw-code-demo>

        <tw-heading type="h3" text="Duration"/>

        <div v-if="alertSelfHidden" @click="showAlert($refs.selfHidden)">Bring the alert back.</div>
        <div v-else @click="duration=3">Start the demo</div>

        <tw-code-demo language="vuejs" caption="An alert that will disappear after a certain duration">
            <tw-alert ref="selfHidden" :duration="duration" @dismissed="alertSelfHidden=!alertSelfHidden">
                This alert will disappear after 3 seconds after you start the demo.
            </tw-alert>

            <template #code>
                {{ durationAlert }}
            </template>
        </tw-code-demo>

    </tw-content>
</template>

<script>
    export default {
        name: 'AlertsProps',

        data() {
            return {
                alertDismissed: false,
                alertSelfHidden: false,
                duration: false,

                dismissableAlert: `
                    <tw-alert :dismissable="true" @dismissed="dismissedHandler">
                        A dismissable alert.
                    </tw-alert>
                `,

                durationAlert: `
                    <tw-alert :duration="duration">
                        An alert that disappears after a certain duration.
                    </tw-alert>
                `
            };
        },

        methods: {
            showAlert(alert) {
                this.alertDismissed = false;
                this.alertSelfHidden = false;
                alert.$data.visible = true;
            }
        },
    };
</script>
