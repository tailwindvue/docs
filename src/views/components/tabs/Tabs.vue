<template>
    <tw-content>
        <tw-heading>Tabs</tw-heading>

        <TabsIntroduction />
        <TabsBasicUsage />
        <ThemeClasses component="tabs" />
    </tw-content>
</template>

<script>
    import ThemeClasses from '../../../components/ThemeClasses';
    import TabsIntroduction from './TabsIntroduction';
    import TabsBasicUsage from './TabsBasicUsage';

    export default {
        name: 'Tabs',

        components: {
            TabsBasicUsage,
            TabsIntroduction,
            ThemeClasses
        },
    };
</script>
