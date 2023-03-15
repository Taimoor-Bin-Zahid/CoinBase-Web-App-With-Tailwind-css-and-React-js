/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#007aff',
        'my-purple': '#6f42c1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
