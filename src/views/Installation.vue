<template>
    <div>
        <tw-heading>Installation</tw-heading>

        <span class="h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">1</span> Install the package

        <tw-code class="mt-4" language="bash" caption="Installing the package">
            <pre>
                # yarn
                yarn add @tailwindvue/tailwindvue

                # npm
                npm install --save @tailwindvue/tailwindvue
            </pre>
        </tw-code>

        <span class="mt-4 h-6 w-6 leading-relaxed mr-1 text-sm bg-green-800 text-white rounded-full inline-block text-center">2</span> Install TailwindVue

        <tw-code class="mt-4" language="javascript" caption="Install the TailwindVue plugin to add all components">
            <pre>
                import Vue from 'vue;
                import TailwindVue from '@tailwindvue/tailwindvue';

                // Add all components
                Vue.use(TailwindVue);
            </pre>
        </tw-code>

        <div class="my-4">
            or
        </div>

        <tw-code class="mt-4" language="javascript" caption="Import individual components">
            <pre>
                import Vue from 'vue';
                import {Heading, Panel} from '@tailwindvue/tailwindvue';

                // Add some components
                Vue.use(Heading);
                Vue.use(Panel);
            </pre>
        </tw-code>
    </div>
</template>

<script>
    export default {
        name: 'Installation',
    };
</script>
