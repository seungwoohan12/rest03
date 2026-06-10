import { Link } from 'react-router-dom'
import { company, nav } from '../data/site'

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white dark:bg-[#050E1F]">

      {/* ─── 상단 영역 ──────────────────────────── */}
      <div className="mx-auto max-w-container section-x py-16 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* 브랜드 정보 */}
          <div className="flex-shrink-0 lg:w-64">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-royal text-white font-black">H</span>
              <span className="text-2xl font-extrabold text-white">{company.name}</span>
            </Link>
            <p className="mb-6 text-sm leading-6 text-white/60">{company.tagline}</p>
            {/* 소셜 링크 */}
            <div className="flex gap-3">
              {company.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-royal hover:text-white"
                >
                  {s.icon === 'yt' ? <YoutubeIcon /> : <InstagramIcon />}
                </a>
              ))}
            </div>
          </div>

          {/* 메뉴 링크 */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {nav.map((item) => (
              <div key={item.label}>
                <h3 className="mb-4 text-sm font-bold text-white/90">{item.label}</h3>
                <ul className="flex flex-col gap-2">
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="text-sm text-white/50 transition hover:text-brand-sky"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 연락처 정보 ────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-container section-x py-8">
          <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:flex-wrap sm:gap-6">
            <span>{company.contact.address}</span>
            <span>Tel: {company.contact.tel}</span>
            <span>Email: {company.contact.email}</span>
            <span>운영시간: {company.contact.hours}</span>
          </div>
        </div>
      </div>

      {/* ─── 하단 카피라이트 ─────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col justify-between gap-3 section-x py-5 text-xs text-white/40 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {company.footerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={[
                    'transition hover:text-white',
                    l.strong ? 'font-bold text-white/60' : '',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>{company.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
