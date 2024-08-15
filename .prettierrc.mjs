export default {
    plugins: ['prettier-plugin-astro'],
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    useTabs: true,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};