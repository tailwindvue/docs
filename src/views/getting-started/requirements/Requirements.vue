<template>
    <tw-content>
        <tw-heading>Requirements</tw-heading>

        <p>
            Before you begin, let's review a list of requirements that you will need to make use of TailwindVue.
        </p>

        <tw-heading type="h3"
                    text="Install Tailwind CSS"
                    number="1" />

        <tw-alert type="info">
            <template v-slot:icon>
                <i class="fas fa-lg fa-lightbulb" /></template>
            <strong>Tailwind CSS is bundled with Tailwind Vue</strong> in order to reduce the size of the
            TailwindVue package and to better allow you full control over tailwind configuration.
        </tw-alert>

        <p>
            Make sure Tailwind CSS is installed in your application by following the great instructions available in the
            Tailwind CSS documentation:
            <a class="block mt-4 underline"
               href="https://tailwindcss.com/docs/installation/">
                https://tailwindcss.com/docs/installation/
            </a>
        </p>

        <tw-heading type="h3"
                    text="Add important classes"
                    number="2" />

        <p class="mt-4">
            Some layout components require the <code>html</code> and <code>body</code> tags to have some tailwind
            utility classes added to them:
        </p>

        <ul class="mt-4 ml-4 list-disc">
            <li>Add the <code>min-h-screen</code> class to the <code>html</code> tag.</li>
            <li>Add the <code>min-h-screen</code> class to the <code>body</code> tag.</li>
        </ul>

        <hr class="mt-8">
        <div class="text-right mt-4">
            <router-link to="/installation">
                Installation <i class="fas fa-arrow-right fa-fw" />
            </router-link>
        </div>

    </tw-content>
</template>

<script>
    export default {
        name: 'Requirements',
    };
</script>
