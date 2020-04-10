<template>
    <tw-content>
        <tw-heading>Installation</tw-heading>

        <tw-heading type="h3" text="Install the Library" number="1"/>

        <p>Start by adding the component library to your project.</p>

        <tw-code language="bash" caption="Installing the package">
            <pre>
                # yarn
                yarn add @tailwindvue/tailwindvue

                # npm
                npm install --save @tailwindvue/tailwindvue
            </pre>
        </tw-code>

        <tw-heading type="h3" text="Install Tailwind Vue" number="2"/>

        <p>
            Next, install Tailwind Vue into your application. You can all all the components at once:
        </p>

        <tw-code class="mt-4" language="javascript" caption="Install the TailwindVue plugin to add all components">
            <pre>
                import Vue from 'vue;
                import TailwindVue from '@tailwindvue/tailwindvue';

                // Add all components
                Vue.use(TailwindVue);
            </pre>
        </tw-code>

        <p>
            or install individual components:
        </p>

        <tw-code language="javascript" caption="Import individual components">
            <pre>
                import Vue from 'vue';
                import { Heading, Panel } from '@tailwindvue/tailwindvue';

                // Add some components
                Vue.use(Heading);
                Vue.use(Panel);
            </pre>
        </tw-code>

        <hr class="mt-8">
        <div class="mt-4">
            <router-link to="/requirements">
                <i class="fas fa-arrow-left fa-fw"></i> Requirements
            </router-link>
        </div>
    </tw-content>
</template>

<script>
    export default {
        name: 'Installation',
    };
</script>
