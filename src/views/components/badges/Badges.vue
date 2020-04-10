<template>
    <tw-content>

        <tw-heading text="Badges"/>

        <BadgesIntroduction/>
        <BadgesBasicUsage/>
        <BadgesTypes/>
        <ThemeClasses component="badge"/>

    </tw-content>
</template>

<script>
    import BadgesBasicUsage from './BadgesBasicUsage';
    import BadgesIntroduction from './BadgesIntroduction';
    import BadgesTypes from './BadgesTypes';
    import ThemeClasses from '../../../components/ThemeClasses';

    export default {
        name: 'Badge',

        components: { ThemeClasses, BadgesTypes, BadgesIntroduction, BadgesBasicUsage },
    };
</script>
