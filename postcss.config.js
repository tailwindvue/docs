const whitelist = require('@tailwindvue/tailwindvue/src/utilities/whitelist');
const isInProduction = true; //process.env.NODE_ENV === 'production';

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.vue',
        './src/views/**/*.vue',
        './src/partials/**/*.vue',
        './src/components/**/*.vue'
    ],

    // Exclude all classes used in the Tailwind Vue theme
    whitelist: whitelist.generate(),

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...isInProduction ? [purgecss] : []
    ]
};
