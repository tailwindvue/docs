<template>
    <div>
        <tw-heading>Badges</tw-heading>

        <BadgesIntroduction/>
        <BadgesBasicUsage/>
        <BadgesTypes/>
    </div>
</template>

<script>
    import BadgesBasicUsage from './BadgesBasicUsage';
    import BadgesIntroduction from './BadgesIntroduction';
    import BadgesTypes from './BadgesTypes';

    export default {
        name: 'Badge',

        components: { BadgesTypes, BadgesIntroduction, BadgesBasicUsage },
    };
</script>
