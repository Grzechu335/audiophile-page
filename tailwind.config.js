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
            gridTemplateAreas: {
                'gallery-layout-wide': [
                    'first first third third third',
                    'second second third third third',
                ],
                'gallery-layout-slim': ['first', 'second', 'third', 'third'],
                'checkout-layout-wide': ['label first', 'label second'],
                'checkout-layout-slim': ['label', 'first', 'second'],
            },
            gridTemplateColumns: {
                'checkout-layout-wide': '1fr 1fr',
                'checkout-layout-slim': '1fr',
            },
        },
        variants: {
            gridTemplateAreas: ['responsive'],
        },
    },
    plugins: [
        require('tailwindcss-breakpoints-inspector'),
        require('@savvywombat/tailwindcss-grid-areas'),
    ],
}
