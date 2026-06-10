import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { videos, videoCategories, notices, company } from '../data/site'

// ─── 히어로 ──────────────────────────────────────────────────
function Hero() {
  const [idx, setIdx] = useState(0)
  const slides = [
    {
      heading: '영상으로\n이야기합니다',
      sub:     '브랜드의 이야기를, 공간의 매력을, 사람의 진심을 — HANU가 영상으로 담습니다',
    },
    {
      heading: '당신의 이야기를\n담습니다',
      sub:     '인터뷰 · 홍보 영상 · 숏폼 콘텐츠 — 모든 형식의 영상을 기획부터 제작까지',
    },
  ]

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden hero-gradient md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-brand-royal/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-brand-sky/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-container section-x py-24 md:py-32">
        {slides.map((s, i) => (
          <div
            key={i}
            className={[
              'absolute inset-0 flex items-center section-x transition-all duration-1000',
              i === idx ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4',
            ].join(' ')}
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-sky/20 px-4 py-1.5 text-sm font-semibold text-brand-sky">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-sky opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-sky" />
                </span>
                크리에이티브 비디오 스튜디오
              </div>
              <h1 className="mb-6 whitespace-pre-line text-5xl font-extrabold leading-[1.1] text-white md:text-7xl lg:text-8xl">
                {s.heading}
              </h1>
              <p className="mb-10 max-w-xl text-lg text-white/70 md:text-xl">{s.sub}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/videos/yojeom" className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-brand-royal/30">
                  포트폴리오 보기 →
                </Link>
                <Link to="/about/intro" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
                  HANU 소개
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="invisible">
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 text-sm">크리에이티브 비디오 스튜디오</div>
          <h1 className="mb-6 whitespace-pre-line text-5xl font-extrabold leading-[1.1] md:text-7xl lg:text-8xl">
            영상으로{'\n'}이야기합니다
          </h1>
          <p className="mb-10 max-w-xl text-lg md:text-xl">서브텍스트</p>
          <div className="flex flex-wrap gap-4"><span className="px-8 py-3.5 text-base">포트폴리오 보기 →</span></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className={['h-1.5 rounded-full transition-all duration-300', i === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'].join(' ')}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 md:flex">
        <span className="text-xs font-medium tracking-widest text-white/40">SCROLL</span>
        <div className="h-8 w-px animate-bounce bg-white/30" />
      </div>
    </section>
  )
}

// ─── 숫자 통계 ────────────────────────────────────────────────
function Stats() {
  const stats = [
    { num: '10+',  label: '제작 영상' },
    { num: '2개',  label: '진행 프로젝트' },
    { num: '1:1',  label: '맞춤 제작' },
    { num: '100%', label: '직접 기획·편집' },
  ]
  return (
    <section className="bg-brand-royal py-14 dark:bg-brand">
      <div className="mx-auto max-w-container section-x">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="text-4xl font-extrabold md:text-5xl">{s.num}</p>
              <p className="mt-1 text-sm font-medium text-white/70 md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 포트폴리오 카드 ─────────────────────────────────────────
function Portfolio() {
  const projects = [
    {
      key:   'yojeom',
      label: '요즘 것들의 돈버는 이야기',
      type:  '자체 기획 시리즈',
      desc:  '젊은 창업가들의 리얼한 창업 스토리. 인터뷰 다큐멘터리 형식으로 기획·촬영·편집까지 HANU가 직접 제작.',
      icon:  '🎬',
      color: 'from-brand to-brand-royal',
      tags:  ['인터뷰', '다큐멘터리', '자체 제작'],
    },
    {
      key:   'gangbuk',
      label: '서울청년센터 강북',
      type:  '클라이언트 의뢰 제작',
      desc:  '서울청년센터 강북의 공간 홍보, 오시는길, 지원사업 안내 영상. 숏폼·일반 영상 총 6편 제작.',
      icon:  '🏢',
      color: 'from-brand-navy to-brand',
      tags:  ['홍보 영상', '숏폼', '클라이언트'],
    },
  ]

  return (
    <section className="section-py bg-brand-ice dark:bg-brand-navy">
      <div className="mx-auto max-w-container section-x">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title mb-12">
          HANU가 만든
          <br />
          영상 프로젝트
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((c) => (
            <Link
              key={c.key}
              to={`/videos/${c.key}`}
              className="group relative overflow-hidden rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-90 transition group-hover:opacity-100`} />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 right-12 h-24 w-24 rounded-full bg-white/5" />

              <div className="relative">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-white/50">{c.type}</span>
                <span className="mb-4 block text-5xl">{c.icon}</span>
                <h3 className="mb-3 text-2xl font-extrabold text-white md:text-3xl">{c.label}</h3>
                <p className="mb-6 text-sm leading-6 text-white/70 md:text-base">{c.desc}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-sky transition group-hover:gap-3">
                  영상 보기 <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 최근 제작 영상 ─────────────────────────────────────────
function RecentWorks() {
  const recent = videos.filter((v) => !v.youtubeId.startsWith('PLACEHOLDER')).slice(0, 4)
  const [hovered, setHovered] = useState(null)

  return (
    <section className="section-py bg-white dark:bg-brand-deep">
      <div className="mx-auto max-w-container section-x">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Recent Work</p>
            <h2 className="section-title">최근 제작 영상</h2>
          </div>
          <Link to="/videos/yojeom" className="btn-ghost self-start text-sm">전체 보기 →</Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recent.map((v) => (
            <Link
              key={v.id}
              to={`/videos/${v.category}`}
              className="group video-card cursor-pointer"
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-brand-navy">
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                  alt={v.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-brand-deep to-brand p-4 text-center">
                  <span className="text-sm font-bold leading-tight text-white line-clamp-3">{v.title}</span>
                </div>
                <div className="play-btn absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-royal/90 text-white shadow-lg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="badge mb-2">{v.subCategoryLabel}</span>
              <h3 className="text-sm font-bold leading-snug text-brand-deep transition group-hover:text-brand-royal dark:text-white dark:group-hover:text-brand-sky line-clamp-2">
                {v.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">{v.uploadDate}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 미션 밴드 ────────────────────────────────────────────────
function MissionBand() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-royal/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-sky/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-container section-x text-center">
        <p className="section-label">Our Story</p>
        <h2 className="mb-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
          영상 하나가
          <br />
          이야기가 됩니다
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 leading-8">
          제품이 아닌 이야기를, 데이터가 아닌 감동을.
          HANU는 브랜드와 사람 사이의 연결을 영상으로 만듭니다.
        </p>
        <Link to="/about/intro" className="btn-secondary border-white/40 text-white hover:bg-white hover:text-brand-deep">
          HANU 더 알아보기 →
        </Link>
      </div>
    </section>
  )
}

// ─── 공지사항 ──────────────────────────────────────────────────
function Notices() {
  return (
    <section className="section-py bg-brand-ice dark:bg-brand-navy">
      <div className="mx-auto max-w-container section-x">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Notice</p>
            <h2 className="section-title text-3xl md:text-4xl">새 소식</h2>
          </div>
          <Link to="/notice" className="btn-ghost self-start text-sm">전체 보기 →</Link>
        </div>

        <ul className="divide-y divide-brand-ice-dark dark:divide-white/10">
          {notices.map((n) => (
            <li key={n.id}>
              <Link
                to="/notice"
                className="group flex flex-col justify-between gap-1 py-5 transition sm:flex-row sm:items-center"
              >
                <span className="font-semibold text-brand-deep transition group-hover:text-brand-royal dark:text-white dark:group-hover:text-brand-sky">
                  {n.title}
                </span>
                <span className="text-sm text-neutral-400 dark:text-neutral-500">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className="bg-brand-royal py-16 dark:bg-brand">
      <div className="mx-auto max-w-container section-x text-center">
        <h2 className="mb-4 text-2xl font-extrabold text-white md:text-4xl">
          영상 제작을 고민 중이신가요?
        </h2>
        <p className="mb-8 text-white/70">포트폴리오를 보고 마음에 드셨다면 편하게 연락해 주세요</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/videos/yojeom" className="rounded-full bg-white px-8 py-3.5 font-bold text-brand-royal transition hover:bg-brand-ice">
            포트폴리오 보기 →
          </Link>
          <Link to="/contact" className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10">
            문의하기
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Portfolio />
      <RecentWorks />
      <MissionBand />
      <Notices />
      <CtaBanner />
    </>
  )
}