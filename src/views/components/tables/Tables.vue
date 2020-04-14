<template>
    <tw-content>
        <tw-heading text="Tables" />

        <TablesIntroduction />
        <TablesBasicUsage />
        <ThemeClasses component="table" />
    </tw-content>
</template>

<script>
    import TablesBasicUsage from './TablesBasicUsage';
    import ThemeClasses from '../../../components/ThemeClasses';
    import TablesIntroduction from './TablesIntroduction';

    export default {
        name: 'Tables',

        components: {
            TablesIntroduction,
            ThemeClasses,
            TablesBasicUsage,
        },
    };
</script>
