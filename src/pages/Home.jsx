import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { businessCards, notices } from '../data/site'

// 히어로 슬라이드 데이터
const slides = [
  { label: 'HERO 01', copy: 'Always by your side' },
  { label: 'HERO 02', copy: 'Enable Today,\nEmpower Tomorrow' },
]

function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const go = (dir) =>
    setIdx((i) => (i + dir + slides.length) % slides.length)

  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[520px] w-full overflow-hidden bg-neutral-800">
      {slides.map((s, i) => (
        <div
          key={i}
          className={[
            'absolute inset-0 transition-opacity duration-1000',
            i === idx ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
        >
          <Placeholder label={s.label} ratio="auto" className="h-full" dark />
          {/* 카피 */}
          <div className="absolute inset-0 flex items-end">
            <p className="whitespace-pre-line px-[5%] pb-32 text-5xl font-medium leading-tight text-white drop-shadow md:text-7xl lg:text-8xl xl:text-[8rem]">
              {s.copy}
            </p>
          </div>
        </div>
      ))}

      {/* 좌우 네비 */}
      <button
        type="button"
        aria-label="이전 슬라이드"
        onClick={() => go(-1)}
        className="absolute bottom-10 left-[5%] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white/20"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="다음 슬라이드"
        onClick={() => go(1)}
        className="absolute bottom-10 left-[calc(5%+52px)] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white/20"
      >
        ›
      </button>

      {/* 바로가기 버튼 */}
      <div className="absolute bottom-10 right-[5%] z-10 hidden gap-3 md:flex">
        <a
          href="#"
          className="flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-white transition hover:brightness-125"
        >
          전자조달 시스템 <span>→</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-full bg-stone-500 px-6 py-3.5 text-white transition hover:brightness-110"
        >
          해링턴 플레이스 <span>→</span>
        </a>
      </div>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`슬라이드 ${i + 1}`}
            onClick={() => setIdx(i)}
            className={[
              'h-1.5 rounded-full transition-all',
              i === idx ? 'w-8 bg-white' : 'w-2 bg-white/50',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  )
}

function IntroLinks() {
  const links = [
    { label: 'CEO 인사말', to: '/about/greetings' },
    { label: '비전/가치', to: '/about/vision' },
    { label: '연혁', to: '/about/history' },
    { label: '브랜드소개', to: '/about/brand' },
  ]
  return (
    <section className="py-24 text-center md:py-32">
      <p className="mx-auto mb-12 max-w-2xl px-6 text-2xl font-bold leading-snug text-neutral-800 md:text-3xl">
        사람과 환경을 잇는 건설,
        <br className="hidden md:block" /> 신뢰로 미래를 짓습니다.
      </p>
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="relative inline-flex items-center gap-3 rounded-full bg-neutral-100 py-4 pl-6 pr-12 font-bold transition hover:bg-neutral-200"
            >
              {l.label}
              <span className="absolute right-5 text-neutral-500">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function OurBusiness() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-40">
        <h2 className="mb-12 text-4xl font-bold leading-tight text-brand md:text-6xl">
          Our Business
          <br />
          Shaping the Future
        </h2>
      </div>

      {/* 가로 스크롤 카드 */}
      <div className="flex gap-6 overflow-x-auto px-4 pb-4 md:px-10 lg:px-40">
        {businessCards.map((b) => (
          <Link
            key={b.key}
            to={b.to}
            className="group relative h-[366px] w-64 shrink-0 overflow-hidden rounded-xl"
          >
            <Placeholder label={b.title} ratio="auto" className="h-full" dark />
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <p className="mb-4 text-2xl font-bold">{b.title}</p>
              <p className="text-sm leading-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {b.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function SustainabilityBand() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden md:h-[600px]">
      <Placeholder label="SUSTAINABILITY BG" ratio="auto" className="h-full" dark />
      <div className="absolute inset-0 flex flex-col justify-center bg-black/30 px-4 md:px-10 lg:px-40">
        <p className="mb-4 text-sm font-semibold tracking-widest text-white/80">
          SUSTAINABILITY
        </p>
        <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl">
          지속 가능한 내일을
          <br />
          함께 만들어갑니다
        </h2>
        <div>
          <Link
            to="/sustainability/ethical"
            className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3.5 font-bold text-brand transition hover:bg-white"
          >
            자세히 보기 <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function MoreToDiscover() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto flex max-w-container flex-col px-4 md:px-10 lg:px-40">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b-2 border-neutral-400 pb-10 md:flex-row md:items-center">
          <p className="text-4xl font-bold text-brand md:text-6xl">More to Discover</p>
          <Link
            to="/support"
            className="relative inline-flex items-center gap-3 rounded-full bg-neutral-100 py-4 pl-6 pr-12 font-bold transition hover:bg-neutral-200"
          >
            전체보기 <span className="absolute right-5 text-neutral-500">→</span>
          </Link>
        </div>

        <ul className="flex flex-col divide-y divide-neutral-200">
          {notices.map((n) => (
            <li key={n.id}>
              <Link
                to="/support"
                className="flex flex-col justify-between gap-1 py-5 transition hover:text-brand md:flex-row md:items-center"
              >
                <span className="text-lg font-semibold md:text-xl">{n.title}</span>
                <span className="text-sm text-neutral-500 md:text-base">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <IntroLinks />
      <OurBusiness />
      <SustainabilityBand />
      <MoreToDiscover />
    </>
  )
}
