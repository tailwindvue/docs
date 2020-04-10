<template>
    <div>
        <tw-heading id="introduction" type="h2" text="Introduction"/>
        <p>
            This component renders an alert. There are five default styles for the
            alert component: default, danger, info, warning and success. It can
            also display an icon and a button to hide it when it is clicked.
        </p>
        <tw-table :items="details"/>
    </div>
</template>

<script>
    export default {
        name: 'AlertsIntroduction',

        data() {
            return {
                details: [
                    { name: 'Alert', component: 'Alert.vue', defaultTag: 'tw-alert' },
                ],
            };
        },
    };
</script>
