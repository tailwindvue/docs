<template>
    <div>
        <tw-heading>Badge</tw-heading>

        <BadgeIntroduction/>
        <BadgeBasicUsage/>
        <BadgeTypes/>
    </div>
</template>

<script>
    import BadgeBasicUsage from './BadgeBasicUsage';
    import BadgeIntroduction from './BadgeIntroduction';
    import BadgeTypes from './BadgeTypes';

    export default {
        name: 'Badge',

        components: { BadgeTypes, BadgeIntroduction, BadgeBasicUsage },
    };
</script>
