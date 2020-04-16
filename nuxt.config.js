import whitelist from '@tailwindvue/tailwindvue/src/utilities/whitelist';
import head from './config/head';

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head,
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@tailwindvue/tailwindvue/dist/tailwindvue.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/tailwindvue'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    /*
    ** Build configuration
    */
    build: {
        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: { version: 3 }
                        }
                    ]
                ];
            }
        },
    },

    purgeCSS: {
        whitelist: () => whitelist.generate(),
    },

    generate: {
        devtools: true
    },
};
