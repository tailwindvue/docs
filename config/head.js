export default {
    title: 'Tailwind Vue',
    meta: [
        // General
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#4fc08d' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

        // Open Graph
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Tailwind Vue' },
        { property: 'og:description', content: process.env.npm_package_description || '' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Tailwind Vue' },
        { property: 'og:image', content: 'https://public.tailwindvue.com/images/banners/open-graph.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Tailwind Vue' },
        { name: 'twitter:description', content: process.env.npm_package_description || '' },
        { name: 'twitter:image', content: 'https://public.tailwindvue.com/images/banners/twitter.png' },

        // Apple
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

        // Microsoft
        { name: 'msapplication-TileImage', content: '/images/icons/microsoft-icon-144x144.png' },
        { name: 'msapplication-TileColor', content: '#4fc08d' },
        { name: 'msapplication-config', content: 'browserconfig.xml' },
    ],
    link: [
        // Manifest
        { rel: 'manifest', content: '/manifest.json' },

        // Apple Icons
        { rel: 'apple-touch-icon', sizes: '57x57', content: '/images/icons/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', content: '/images/icons/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', content: '/images/icons/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', content: '/images/icons/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', content: '/images/icons/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', content: '/images/icons/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', content: '/images/icons/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', content: '/images/icons/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', content: '/images/icons/apple-icon-180x180.png' },

        // Favicons
        { rel: 'icon', type: 'image/png', href: '/images/icons/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/icons/favicon-192x192.png' },
    ],
    script: [
        { src: 'https://kit.fontawesome.com/a2aaa4324d.js', crossorigin: 'anonymous' }
    ]
};
