module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['jaf-domus', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#B50E1A',
        'navy': '#002C59'
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
