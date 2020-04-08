<template>
    <div>
        <tw-heading>Alerts</tw-heading>

        <tw-heading type="h2">Types</tw-heading>

        You can choose from a number of different alert types.

        <AlertsDemo/>

        <tw-heading type="h2">Icons</tw-heading>

        You can use a slot called icon to add an icon to your alert.

        <tw-alert class="mt-4">
            <template v-slot:icon><i class="fas fa-lg fa-pencil"></i></template>
            An alert with an icon.
        </tw-alert>

        <tw-heading type="h2">Dismissable Alerts</tw-heading>

        <tw-alert ref="dismissable" class="mt-4" :dismissable="true" @dismissed="alertDismissed=!alertDismissed">
            You can dismiss this alert by clicking the button on the right <i class="fas fa-fw fa-arrow-right"></i>
        </tw-alert>

        <div v-if="alertDismissed">
            You can take action when an alert is dismissed by listening for a dismissed event.

            <span @click="showAlert($refs.dismissable)">Bring the alert back.</span>
        </div>

        <tw-heading type="h2">Self-Hiding Alerts</tw-heading>

        <div v-if="alertSelfHidden" @click="showAlert($refs.selfHidden)">Bring the alert back.</div>
        <div v-else @click="duration=3">Start the demo</div>

        <tw-alert ref="selfHidden" class="mt-4" :duration="duration" @dismissed="alertSelfHidden=!alertSelfHidden">
            This alert will disappear after 3 seconds after you start the demo.
        </tw-alert>

    </div>
</template>

<script>
    import AlertsDemo from './AlertsDemo';

    export default {
        name: 'Alerts',

        components: {
            AlertsDemo
        },

        data() {
            return {
                alertDismissed: false,
                alertSelfHidden: false,
                duration: false,
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
