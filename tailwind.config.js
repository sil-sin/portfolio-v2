import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
      colors: {
        'lightBackground': "#6b7280", /* fallback for old browsers */
        'darkBackground': "#e2e8f0",
        'primary': "green",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
