/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ncrst: {
          grey: '#777675',
          gold: '#FFD332',
          green: '#009E85',
          blue: '#312783',
          yellow: "#F59E0B",
          'grey-light': '#f8f8f8',
          'grey-dark': '#5a5958',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'body': '1.5',
        'heading': '1.2',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        'page': '12rem',
      }
    },
  },
  plugins: [],
}