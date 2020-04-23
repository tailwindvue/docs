export const installPackage = `
# yarn
yarn add @tailwindvue/tailwindvue

# npm
npm install --save @tailwindvue/tailwindvue
`;

export const installPlugin = `
import Vue from 'vue';
import TailwindVue from '@tailwindvue/tailwindvue';

// Add all components
Vue.use(TailwindVue);
`;

export const installComponents = `
import Vue from 'vue';
import { Heading, Panel } from '@tailwindvue/tailwindvue';

// Add some components
Vue.use(Heading);
Vue.use(Panel);
`;
