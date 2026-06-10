/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS 변수 기반 — 팔레트 5종 전환 지원
        // rgb(var(--x) / <alpha-value>) 형식: bg-brand-royal/50 등 opacity 변형 지원
        brand: {
          DEFAULT:       'rgb(var(--brand) / <alpha-value>)',
          deep:          'rgb(var(--brand-deep) / <alpha-value>)',
          navy:          'rgb(var(--brand-navy) / <alpha-value>)',
          royal:         'rgb(var(--brand-royal) / <alpha-value>)',
          'royal-light': 'rgb(var(--brand-royal-light) / <alpha-value>)',
          sky:           'rgb(var(--brand-sky) / <alpha-value>)',
          'sky-light':   'rgb(var(--brand-sky-light) / <alpha-value>)',
          ice:           'rgb(var(--brand-ice) / <alpha-value>)',
          'ice-dark':    'rgb(var(--brand-ice-dark) / <alpha-value>)',
        },
        surface: {
          dark:     'rgb(var(--surface-dark) / <alpha-value>)',
          'dark-2': 'rgb(var(--surface-dark-2) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1400px',
      },
      animation: {
        'gradient-x': 'gradientX 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}