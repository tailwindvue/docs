<template>
    <tw-content>

        <tw-heading>Panels</tw-heading>

        <PanelsIntroduction />
        <PanelsBasicUsage />
        <ThemeClasses component="panel" />

    </tw-content>
</template>

<script>
    import ThemeClasses from '../../../components/ThemeClasses';
    import PanelsIntroduction from './PanelsIntroduction';
    import PanelsBasicUsage from './PanelsBasicUsage';

    export default {
        name: 'Panels',

        components: {
            PanelsBasicUsage,
            PanelsIntroduction,
            ThemeClasses
        },
    };
</script>
