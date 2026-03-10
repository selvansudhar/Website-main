/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1e293b',
        muted: '#64748b',
        subtle: '#94a3b8',
        border: '#e2e8f0',
        'border-light': '#f1f5f9',
        bg: '#ffffff',
        'bg-off': '#fcfdfe',
        'bg-accent': 'rgb(245, 244, 255)',
        'bg-blue-light': '#f0f7ff',
        primary: '#4353ff',
        'primary-dark': '#3442e6',
        purple: '#8b5cf6',
        blue: {
          DEFAULT: '#0d75ec',
          dark: '#0a5bc4',
        },
        red: {
          DEFAULT: '#ff0015',
          dark: '#d60012',
        },
        green: '#22c55e',
        emerald: '#10b981',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
        bricolage: ['var(--font-bricolage-var)', 'sans-serif'],
        instrument: ['var(--font-instrument-var)', 'serif'],
        jakarta: ['var(--font-jakarta-var)', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 2px 8px rgba(0, 0, 0, 0.04)',
        sm: '0 4px 20px rgba(0, 0, 0, 0.03)',
        md: '0 10px 30px rgba(0, 0, 0, 0.06)',
        lg: '0 20px 40px rgba(0, 0, 0, 0.06)',
        xl: '0 40px 100px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
        blue: '0 8px 24px rgba(67, 83, 255, 0.3)',
        red: '0 10px 25px rgba(214, 0, 18, 0.2)',
      },
      borderRadius: {
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        pill: '100px',
      },
    },
  },
  plugins: [],
};
