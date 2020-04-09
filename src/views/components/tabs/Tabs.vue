<template>
    <div>
        <tw-heading>Tabs</tw-heading>

        <tw-tabs>
            <tw-tab name="one">One</tw-tab>
            <tw-tab name="two" active>Two</tw-tab>
            <tw-tab name="three">Three</tw-tab>
        </tw-tabs>

        <ThemeClasses component="tabs"/>
    </div>
</template>

<script>
    import ThemeClasses from '../../../components/ThemeClasses';
    export default {
        name: 'Tabs',
        components: { ThemeClasses },
    };
</script>
