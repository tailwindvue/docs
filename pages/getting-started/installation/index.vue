<template>
    <tw-content>
        <tw-heading>Installation</tw-heading>

        <tw-heading type="h3"
                    text="Install the Library"
                    number="1" />

        <p>Start by adding the component library to your project.</p>

        <tw-code language="bash"
                 caption="Installing the package">
            {{ installPackage }}
        </tw-code>

        <tw-heading type="h3"
                    text="Install Tailwind Vue"
                    number="2" />

        <p>
            Next, install Tailwind Vue into your application. You can all all the components at once:
        </p>

        <tw-code class="mt-4"
                 language="javascript"
                 caption="Install the TailwindVue plugin to add all components">
            {{ installPlugin }}
        </tw-code>

        <p>
            or install individual components:
        </p>

        <tw-code language="javascript"
                 caption="Import individual components">
            {{ installComponents }}
        </tw-code>

        <hr class="mt-8">
        <div class="mt-4">
            <tw-link to="/getting-started/requirements">
                <i class="fas fa-arrow-left fa-fw" /> Requirements
            </tw-link>
        </div>
    </tw-content>
</template>

<script>
    import { installPackage, installPlugin, installComponents } from './snippets';

    export default {
        name: 'Installation',

        data() {
            return {
                installPackage,
                installPlugin,
                installComponents
            };
        },
    };
</script>
