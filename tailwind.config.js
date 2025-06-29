/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        primary: '#0052CC',
        secondary: '#172B4D',
        accent: '#36B37E',
        neutral: '#F4F5F7',
        error: '#FF5630',
      },
    },
  },
  plugins: [],
};