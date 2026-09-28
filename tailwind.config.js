/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'] },
      colors: { navy: { 950: '#0a1120', 900: '#0f1a2e', 800: '#16233b', 700: '#213252' } },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(14,165,233,.25)',
        lift: '0 18px 40px -14px rgba(14,165,233,.35)',
      },
    },
  },
  plugins: [],
}
