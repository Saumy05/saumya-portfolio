/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slateNight: '#0f172a',
        accent: '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.4), 0 12px 30px -12px rgba(56, 189, 248, 0.45)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.13), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.1), transparent 30%), linear-gradient(to bottom, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 1))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
