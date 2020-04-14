<template>
    <tw-content>
        <tw-heading text="Alerts" />

        <AlertsIntroduction />
        <AlertsBasicUsage />
        <AlertsTypes />
        <AlertsIcons />
        <AlertsProps />
        <ThemeClasses component="alert" />
    </tw-content>
</template>

<script>
    import AlertsTypes from './AlertsTypes';
    import ThemeClasses from '../../../components/ThemeClasses';
    import AlertsBasicUsage from './AlertsBasicUsage';
    import AlertsIntroduction from './AlertsIntroduction';
    import AlertsIcons from './AlertsIcons';
    import AlertsProps from './AlertsProps';

    export default {
        name: 'Alerts',

        components: {
            AlertsProps,
            AlertsIcons,
            AlertsIntroduction,
            AlertsBasicUsage,
            ThemeClasses,
            AlertsTypes
        },
    };
</script>
