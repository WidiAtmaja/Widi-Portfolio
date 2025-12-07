/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Mencakup semua file di dalam folder src
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [],
};
