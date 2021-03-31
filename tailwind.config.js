const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
            colors: {
                orange: colors.orange,
                teal: colors.teal,
                cyan: colors.cyan,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}