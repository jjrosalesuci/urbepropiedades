/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './cards/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#060b18',
          900: '#0a1224',
          800: '#12203b',
          700: '#1b2e52',
          100: '#d9e5ff',
        },
        indigoGlow: '#7c8cff',
        blueGlow: '#38bdf8',
      },
      fontFamily: {
        sans: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(12, 20, 38, 0.35)',
        glow: '0 0 0 1px rgba(124, 140, 255, 0.2), 0 20px 60px rgba(56, 189, 248, 0.15)',
      },
      backgroundImage: {
        'radial-premium': 'radial-gradient(circle at top right, rgba(124, 140, 255, 0.16), transparent 44%), radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.14), transparent 42%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
