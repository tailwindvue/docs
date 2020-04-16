<template>
    <tw-content>

        <tw-heading text="Headings" />

        <HeadingsIntroduction />
        <HeadingsBasicUsage />
        <HeadingsTypes />
        <HeadingsProps />
        <ThemeClasses component="heading" />

    </tw-content>
</template>

<script>
    import ThemeClasses from '../../../components/ThemeClasses';
    import HeadingsIntroduction from './HeadingsIntroduction';
    import HeadingsBasicUsage from './HeadingsBasicUsage';
    import HeadingsProps from './HeadingsProps';
    import HeadingsTypes from './HeadingsTypes';

    export default {
        name: 'Headings',

        components: {
            HeadingsTypes,
            HeadingsProps,
            HeadingsBasicUsage,
            HeadingsIntroduction,
            ThemeClasses,
        },
    };
</script>
