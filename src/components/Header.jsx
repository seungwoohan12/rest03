import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, company } from '../data/site'
import { useTheme }   from '../context/ThemeContext'
import { usePalette, palettes } from '../context/PaletteContext'
import { useAuth }    from '../context/AuthContext'

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
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

// ─── 팔레트 스위처 ────────────────────────────────────────────
function PaletteSwitcher() {
  const { paletteId, setPaletteId } = usePalette()
  return (
    <div className="hidden items-center gap-1.5 lg:flex" title="컬러 팔레트 변경">
      {palettes.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.label}
          onClick={() => setPaletteId(p.id)}
          className={[
            'h-5 w-5 rounded-full transition-all duration-200 hover:scale-125',
            paletteId === p.id
              ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-transparent shadow-lg'
              : 'opacity-70 hover:opacity-100',
          ].join(' ')}
          style={{ background: `linear-gradient(135deg, ${p.royal} 50%, ${p.sky} 50%)` }}
        />
      ))}
    </div>
  )
}

// ─── 모바일 팔레트 스위처 ────────────────────────────────────
function MobilePaletteSwitcher() {
  const { paletteId, setPaletteId } = usePalette()
  return (
    <div className="mb-4 rounded-xl bg-brand-ice p-4 dark:bg-white/10">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">컬러 팔레트</p>
      <div className="flex gap-3">
        {palettes.map((p) => (
          <button
            key={p.id}
            type="button"
            title={p.label}
            onClick={() => setPaletteId(p.id)}
            className={[
              'h-8 w-8 rounded-full transition-all duration-200 hover:scale-110',
              paletteId === p.id
                ? 'scale-110 ring-2 ring-brand-royal ring-offset-2 shadow-md dark:ring-brand-sky'
                : 'opacity-60 hover:opacity-100',
            ].join(' ')}
            style={{ background: `linear-gradient(135deg, ${p.royal} 50%, ${p.sky} 50%)` }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── 유저 메뉴 (데스크탑) ────────────────────────────────────
function UserMenu() {
  const { user, profile, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (!user) {
    return (
      <Link
        to="/login"
        className="hidden rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-600 transition hover:border-brand-royal hover:text-brand-royal dark:border-white/20 dark:text-neutral-300 dark:hover:border-brand-sky dark:hover:text-brand-sky lg:inline-flex"
      >
        로그인
      </Link>
    )
  }

  const displayName = profile?.nickname ?? user.email?.split('@')[0] ?? '사용자'

  return (
    <div ref={ref} className="relative hidden lg:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-brand-royal hover:text-brand-royal dark:border-white/20 dark:text-neutral-300 dark:hover:border-brand-sky dark:hover:text-brand-sky"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-royal text-xs font-black text-white">
          {displayName.charAt(0).toUpperCase()}
        </span>
        {displayName}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-neutral-100 bg-white py-1 shadow-xl dark:border-white/10 dark:bg-brand-navy">
          <Link
            to="/board"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-brand-ice hover:text-brand-royal dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-brand-sky"
          >
            자유 게시판
          </Link>
          <hr className="my-1 border-neutral-100 dark:border-white/10" />
          <button
            type="button"
            onClick={() => { signOut(); setOpen(false) }}
            className="w-full px-4 py-2.5 text-left text-sm text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/10"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  )
}

// ─── 메인 헤더 ───────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered,    setHovered]    = useState(null)
  const [scrolled,   setScrolled]   = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { user, profile, signOut } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const headerBase = [
    'sticky top-0 z-50 w-full transition-all duration-300',
    scrolled || hovered
      ? 'shadow-lg bg-white/95 dark:bg-brand-deep/95 backdrop-blur'
      : 'bg-white dark:bg-brand-deep',
  ].join(' ')

  const mobileDisplayName = profile?.nickname ?? user?.email?.split('@')[0] ?? ''

  return (
    <header className={headerBase} onMouseLeave={() => setHovered(null)}>

      {/* ─── 메인 바 ──────────────────────────────── */}
      <div className="mx-auto flex h-20 max-w-container items-center justify-between border-b border-brand-ice-dark px-4 dark:border-white/10 md:px-10 lg:px-20">

        {/* 로고 */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-royal text-base font-black text-white transition group-hover:bg-brand-royal-light">
            H
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

        {/* 우측 액션 */}
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

          {/* 팔레트 스위처 */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="h-4 w-px bg-neutral-200 dark:bg-white/20" />
            <PaletteSwitcher />
            <div className="h-4 w-px bg-neutral-200 dark:bg-white/20" />
          </div>

          {/* 유저 메뉴 or 로그인 */}
          <UserMenu />

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
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 transition dark:bg-neutral-300" />
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 transition dark:bg-neutral-300" />
            <span className="h-0.5 w-5 rounded-full bg-neutral-700 transition dark:bg-neutral-300" />
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
              className="flex w-48 flex-col gap-2 py-6"
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
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-white p-6 shadow-2xl dark:bg-brand-navy">

            <div className="mb-8 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-royal text-sm font-black text-white">H</span>
                <span className="text-lg font-extrabold text-brand dark:text-white">{company.name}</span>
              </Link>
              <button
                type="button"
                aria-label="메뉴 닫기"
                className="text-2xl leading-none text-neutral-400"
                onClick={() => setMobileOpen(false)}
              >✕</button>
            </div>

            {/* 다크모드 토글 */}
            <button
              onClick={toggleTheme}
              className="mb-4 flex w-full items-center justify-between rounded-xl bg-brand-ice px-4 py-3 text-sm font-semibold text-brand dark:bg-white/10 dark:text-white"
            >
              <span>{isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}</span>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* 모바일 팔레트 스위처 */}
            <MobilePaletteSwitcher />

            {/* 메뉴 */}
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

            {/* 로그인/로그아웃 (모바일) */}
            <div className="mt-6 border-t border-neutral-100 pt-4 dark:border-white/10">
              {user ? (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    {mobileDisplayName} 님
                  </p>
                  <button
                    onClick={() => { signOut(); setMobileOpen(false) }}
                    className="w-full rounded-full border border-red-300 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block w-full rounded-full border border-brand-royal py-2.5 text-center text-sm font-semibold text-brand-royal hover:bg-brand-royal hover:text-white dark:border-brand-sky dark:text-brand-sky"
                >
                  로그인
                </Link>
              )}
            </div>

            <Link to="/contact" className="btn-primary mt-3 w-full justify-center">
              문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
