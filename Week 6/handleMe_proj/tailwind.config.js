module.exports = {
    purge: ['./dist/**/*.html', './dist/**/*.js', './views/**/*.handlebars'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'git-gray': '#24292e',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
