/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If using Vite
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use monospace as requested, but consider a cleaner sans-serif for body text
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'], // Example: using Inter
        mono: ['monospace'], // Keep monospace available
      },
      colors: {
        // Example dark theme color palette
        'primary': '#1a1a2e', // Deep blue/purple
        'secondary': '#16213e', // Slightly lighter blue
        'accent': '#0f3460',   // Accent blue
        'highlight': 'rgb(49, 235, 111)', // Highlight color (e.g., pink/red)
        'text-primary': '#e0e0e0', // Light gray text
        'text-secondary': '#a0a0a0', // Darker gray text
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

