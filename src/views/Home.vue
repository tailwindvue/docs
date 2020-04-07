<template>
    <div>
        <tw-heading>Tailwind Vue</tw-heading>

        <p>
            Welcome to Tailwind Vue, component library made with VueJS and Tailwind CSS to speed up your development.
        </p>

        <tw-alert class="mt-4" type="warning">
            <template v-slot:icon><i class="fas fa-lg fa-exclamation"></i></template>
            This package is under development and is in its very early stages. Feel free to try it and contribute,
            but be aware that it is <strong>not ready for production yet</strong>. Work on this library is ongoing.
            Please check back regularly to
            <a href="https://github.com/tailwindvue/tailwindvue/releases">follow our progress</a>.
        </tw-alert>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>
