module.exports = {
    important: true,
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: false, //true for production build
        content: [
            '../**/templates/*.html',
            '../**/templates/**/*.html'
        ]
    },
    theme: {
        extend: {},
        colors: {
            primary: '#d34c27',
            secondary: '#b2b2b1',
        }
    },
    variants: {},
    plugins: [],
}