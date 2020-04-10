<template>
    <div>
        <tw-heading type="h2" text="Introduction"/>
        <p>
            The badge component allows you to display text in a badge in one of five styles.
        </p>
        <tw-table :items="details"/>
    </div>
</template>

<script>
    export default {
        name: 'BadgeIntroduction',

        data() {
            return {
                details: [
                    { name: 'Badge', component: 'Badge.vue', defaultTag: 'tw-badge' },
                ],
            };
        },
    };
</script>
