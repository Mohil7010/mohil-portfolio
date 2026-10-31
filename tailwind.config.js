/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#08070d', panel: '#100e18', violet: '#a78bfa', electric: '#c4b5fd' }, fontFamily: { display: ['Space Grotesk', 'sans-serif'], mono: ['DM Mono', 'monospace'] } } },
  plugins: []
}
