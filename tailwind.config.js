/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            md: '689px',
            xl: '1100px',
        },
        colors: {
            'color-orange-dark': '#d87d4a',
            'color-orange-light': '#f8af85',
            'color-gray-dark': '#f1f1f1',
            'color-gray-light': '#fafafa',
            'color-dark': '#101010',
            'color-gray-button': '#4c4c4c',
            'color-black': '#000',
            'color-white': '#fff',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-manrope)'],
            },
        },
    },
    plugins: [require('tailwindcss-breakpoints-inspector')],
}
