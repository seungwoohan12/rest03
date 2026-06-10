/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ─────────────────────────────────────────────────────────
        // 5-color brand palette
        //  1. deep-navy  #0B1D3A  최심 다크 (다크모드 배경)
        //  2. dark-blue  #1E3A8A  주 브랜드 컬러 (다크블루)
        //  3. royal-blue #2563EB  CTA / 인터랙티브 (로열블루)
        //  4. sky-cyan   #0EA5E9  포인트 / 뱃지 (스카이 사이언)
        //  5. ice-white  #F0F9FF  라이트 배경 (아이스 화이트)
        // ─────────────────────────────────────────────────────────
        brand: {
          DEFAULT:      '#1E3A8A',   // 2 dark-blue
          deep:         '#0B1D3A',   // 1 deep-navy
          navy:         '#122347',   // deep-navy와 dark-blue 사이
          royal:        '#2563EB',   // 3 royal-blue
          'royal-light':'#3B82F6',   // royal-blue 밝은 버전
          sky:          '#0EA5E9',   // 4 sky-cyan
          'sky-light':  '#38BDF8',   // sky-cyan 밝은 버전
          ice:          '#F0F9FF',   // 5 ice-white
          'ice-dark':   '#E0F2FE',   // ice-white 어두운 버전
        },
        // 다크모드 표면 색상 (카드 등)
        surface: {
          dark:  '#122347',
          'dark-2': '#1A2E56',
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
