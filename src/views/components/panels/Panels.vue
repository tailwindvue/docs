<template>
    <tw-content>
        <tw-heading>Panels</tw-heading>
        <tw-panel>
            <template v-slot:header>
                Panels
            </template>

            Bla Bla
        </tw-panel>

        <ThemeClasses component="panel"/>
    </tw-content>
</template>

<script>
    import ThemeClasses from '../../../components/ThemeClasses';

    export default {
        name: 'Panels',
        components: { ThemeClasses },
    };
</script>
