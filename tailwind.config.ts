import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F7F1E8',
        sage: '#2C6E49',
        sky: '#A8D0E6',
        sunsetA: '#F6B26B',
        sunsetB: '#C65911',
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
      },
    },
  },
  plugins: [],
};
export default config;