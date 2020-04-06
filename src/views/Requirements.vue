<template>
    <div>
        <tw-heading>Requirements</tw-heading>

        <p>
            Before you begin, let's review a list of requirements that you will need to make use of TailwindVue.
        </p>

        <div class="mt-4">
            <span class="h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">1</span>
            Install Tailwind CSS
        </div>

        <tw-alert class="mt-4" type="info">
            <strong>Tailwind CSS not come bundled with Tailwind Vue</strong> in order to reduce the size of the
            TailwindVue package and to better allow you full control over tailwind configuration.
        </tw-alert>

        <p class="mt-4">
            Make sure Tailwind CSS is installed in your application by following the great instructions available in the
            Tailwind CSS documentation:
            <a class="block mt-4 underline" href="https://tailwindcss.com/docs/installation/">
                https://tailwindcss.com/docs/installation/
            </a>
        </p>

        <div class="mt-4">
            <span class="h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">2</span>
            Add some important classes
        </div>

        <p class="mt-4">
            Some layout components require the <code>html</code> and <code>body</code> tags to have some tailwind
            utility classes added to them:
        </p>

        <ul class="mt-4 ml-4 list-disc">
            <li>Add the <code>min-h-screen</code> class to the <code>html</code> tag.</li>
            <li>Add the <code>min-h-screen</code> class to the <code>body</code> tag.</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Requirements',
    };
</script>
