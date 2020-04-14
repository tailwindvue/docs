module.exports = {
    theme: {
        extend: {
            inset: {
                '24': '6rem',
            }
        },
    },
    variants: {
        cursor: ['responsive', 'hover', 'focus', 'group-hover'],
        visibility: ['responsive', 'hover', 'focus', 'group-hover'],
        margin: ['direct-children', 'default', 'responsive'],
        borderWidth: ['responsive', 'first', 'hover', 'focus'],
    },
    plugins: [
        require('@tailwindvue/direct-children-plugin'),
    ]
};
