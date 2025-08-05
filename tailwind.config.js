/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082',         // Deep Indigo
        accent: '#A972FF',          // Soft Neon Purple
        'light-surface': '#F5F7FA', // Soft Gray
        'dark-bg': '#1E1E2F',      // Dark Slate
        success: '#10B981',         // Emerald Green
        warning: '#F59E0B',         // Amber Yellow
        'text-light': '#333333',    // Charcoal
        'text-dark': '#F1F1F1',     // White Smoke
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}