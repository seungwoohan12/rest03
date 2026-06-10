import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, company } from '../data/site'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered,    setHovered]    = useState(null)
  const [scrolled,   setScrolled]   = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 모바일 패널 — 라우트 변경 시 닫기
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const headerBase = [
    'sticky top-0 z-50 w-full transition-all duration-300',
    scrolled || hovered
      ? 'shadow-lg bg-white/95 dark:bg-brand-deep/95 backdrop-blur'
      : 'bg-white dark:bg-brand-deep',
  ].join(' ')

  return (
    <header className={headerBase} onMouseLeave={() => setHovered(null)}>

      {/* ─── 메인 바 ──────────────────────────────── */}
      <div className="mx-auto flex h-20 max-w-container items-center justify-between border-b border-brand-ice-dark px-4 dark:border-white/10 md:px-10 lg:px-20">

        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-royal text-white text-base font-black group-hover:bg-brand-royal-light transition">
            AI
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand dark:text-white">
            {company.name}
          </span>
        </Link>

        {/* 데스크탑 GNB */}
        <ul className="hidden items-stretch lg:flex">
          {nav.map((item) => (
            <li
              key={item.label}
              className="group flex items-center"
              onMouseEnter={() => setHovered(item.label)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    'px-5 py-7 text-[0.95rem] font-semibold transition-colors',
                    isActive
                      ? 'text-brand-royal dark:text-brand-sky'
                      : 'text-neutral-700 hover:text-brand-royal dark:text-neutral-300 dark:hover:text-brand-sky',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 우측 액션 버튼들 */}
        <div className="flex items-center gap-2">
          {/* 다크/라이트 토글 */}
          <button
            type="button"
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-brand-ice hover:text-brand-royal dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-brand-sky"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* 문의하기 (데스크탑) */}
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand-royal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-royal-light lg:inline-flex"
          >
            문의하기
          </Link>

          {/* 햄버거 (모바일) */}
          <button
            type="button"
            aria-label="메뉴 열기"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-neutral-300 transition" />
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-neutral-300 transition" />
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-neutral-300 transition" />
          </button>
        </div>
      </div>

      {/* ─── 메가 드롭다운 (데스크탑) ──────────── */}
      <div
        className={[
          'hidden overflow-hidden border-b bg-white/95 backdrop-blur transition-all duration-200 dark:bg-brand-deep/95 lg:block',
          'border-brand-ice-dark dark:border-white/10',
          hovered ? 'max-h-48 opacity-100' : 'max-h-0 border-b-0 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-container justify-end gap-0 px-20">
          {nav.map((item) => (
            <ul
              key={item.label}
              className="flex w-40 flex-col gap-2 py-6"
              onMouseEnter={() => setHovered(item.label)}
            >
              {hovered === item.label &&
                item.children.map((c) => (
                  <li key={c.label + c.to}>
                    <Link
                      to={c.to}
                      className="block text-center text-sm text-neutral-600 transition hover:font-semibold hover:text-brand-royal dark:text-neutral-400 dark:hover:text-brand-sky"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ─── 모바일 슬라이드 패널 ─────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-white p-6 shadow-2xl dark:bg-brand-navy">
            {/* 패널 헤더 */}
            <div className="mb-8 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-royal text-sm font-black text-white">AI</span>
                <span className="text-lg font-extrabold text-brand dark:text-white">{company.name}</span>
              </Link>
              <button
                type="button"
                aria-label="메뉴 닫기"
                className="text-2xl leading-none text-neutral-400"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* 다크모드 토글 */}
            <button
              onClick={toggleTheme}
              className="mb-6 flex w-full items-center justify-between rounded-xl bg-brand-ice px-4 py-3 text-sm font-semibold text-brand dark:bg-white/10 dark:text-white"
            >
              <span>{isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}</span>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* 메뉴 목록 */}
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.label} className="border-b border-neutral-100 pb-1 dark:border-white/10">
                  <Link
                    to={item.to}
                    className="block py-3 text-base font-bold text-neutral-900 hover:text-brand-royal dark:text-white dark:hover:text-brand-sky"
                  >
                    {item.label}
                  </Link>
                  <ul className="mb-2 flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.label + c.to}>
                        <Link
                          to={c.to}
                          className="block py-1.5 pl-4 text-sm text-neutral-500 hover:text-brand-royal dark:text-neutral-400 dark:hover:text-brand-sky"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* 문의하기 버튼 */}
            <Link
              to="/contact"
              className="btn-primary mt-6 w-full justify-center"
            >
              문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
