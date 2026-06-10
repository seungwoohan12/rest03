import { useParams, Navigate, NavLink, Link } from 'react-router-dom'
import { company, instructors } from '../data/site'

const tabs = [
  { label: '소개',       to: '/about/intro' },
  { label: '교육 철학',  to: '/about/philosophy' },
  { label: '강사진',     to: '/about/instructors' },
  { label: '연혁',       to: '/about/history' },
]

const history = [
  { year: '2026', events: ['AILearn 사이트 오픈', 'AI 리터러시 시리즈 1차 강의 공개', '유튜브 채널 구독자 1만 명 돌파'] },
  { year: '2025', events: ['AILearn Education Center 설립', 'AI 기초 강의 시리즈 제작 착수', 'AI 전문 강사진 3명 영입'] },
  { year: '2024', events: ['AI 교육 콘텐츠 연구 시작', '교육 철학 및 커리큘럼 설계'] },
]

function PageShell({ titleEn, titleKo, children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep">
      {/* 서브 탭 네비 */}
      <div className="sticky top-20 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-brand-deep/95">
        <div className="mx-auto max-w-container section-x">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                className={({ isActive }) =>
                  [
                    'whitespace-nowrap border-b-2 px-5 py-5 text-sm font-bold transition md:px-8',
                    isActive
                      ? 'border-brand-royal text-brand-royal dark:border-brand-sky dark:text-brand-sky'
                      : 'border-transparent text-neutral-500 hover:text-brand-deep dark:text-neutral-400 dark:hover:text-white',
                  ].join(' ')
                }
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* 페이지 헤더 */}
      <div className="bg-gradient-to-br from-brand-deep to-brand py-20 md:py-28">
        <div className="mx-auto max-w-container section-x">
          <p className="mb-2 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition">홈</Link>
            <span>/</span>
            <span className="text-white/80">회사소개</span>
          </p>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-sky">About Us</p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">{titleEn}</h1>
          {titleKo && <p className="mt-3 text-lg text-white/60">{titleKo}</p>}
        </div>
      </div>

      {/* 본문 */}
      <div className="mx-auto max-w-container section-x py-16 md:py-24">
        {children}
      </div>
    </div>
  )
}

// ─── 소개 탭 ────────────────────────────────────────────────
function Intro() {
  return (
    <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
      {/* 텍스트 */}
      <div className="flex-1">
        <h2 className="mb-8 text-3xl font-extrabold leading-snug text-brand-deep dark:text-white md:text-4xl">
          AI를 누구나 이해하는
          <br />
          <span className="text-brand-royal">공평한 미래</span>를 만듭니다
        </h2>
        {company.intro.map((p, i) => (
          <p key={i} className="mb-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
            {p}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/videos/ai-related" className="btn-primary">AI 관련 영상 →</Link>
          <Link to="/contact"           className="btn-secondary">문의하기</Link>
        </div>
      </div>

      {/* 연락처 카드 */}
      <div className="lg:w-80">
        <div className="card rounded-2xl p-6 dark:bg-surface-dark">
          <h3 className="mb-5 text-base font-bold text-brand-deep dark:text-white">연락처 정보</h3>
          <ul className="flex flex-col gap-4 text-sm">
            {[
              { icon: '📍', label: '주소',    val: company.contact.address },
              { icon: '📞', label: '전화',    val: company.contact.tel },
              { icon: '✉️', label: '이메일',  val: company.contact.email },
              { icon: '⏰', label: '운영시간', val: company.contact.hours },
            ].map((r) => (
              <li key={r.label} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-base">{r.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">{r.label}</p>
                  <p className="text-neutral-700 dark:text-neutral-200">{r.val}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─── 교육 철학 탭 ────────────────────────────────────────────
function Philosophy() {
  const values = [
    { icon: '🌍', title: '접근성', desc: 'AI 교육의 문턱을 낮추어 누구나 AI를 이해하고 활용할 수 있도록 합니다.' },
    { icon: '🔍', title: '비판적 사고', desc: '기술을 맹목적으로 수용하지 않고 비판적으로 이해하는 능력을 기릅니다.' },
    { icon: '⚖️', title: '윤리적 AI', desc: '공정하고 책임 있는 AI 활용 방법과 윤리 의식을 함께 교육합니다.' },
    { icon: '🚀', title: '실천 중심', desc: '이론에 그치지 않고 실생활과 업무에 바로 적용할 수 있는 실용적 교육을 제공합니다.' },
  ]
  return (
    <div>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        AILearn은 AI 기술을 특정 전문가만의 것이 아닌, 모든 사람이 이해하고 활용할 수 있는
        공공재로 만들고자 합니다. 이를 위해 네 가지 핵심 교육 가치를 기반으로 콘텐츠를 제작합니다.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="card rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-md dark:bg-surface-dark"
          >
            <span className="mb-4 block text-4xl">{v.icon}</span>
            <h3 className="mb-3 text-xl font-bold text-brand-deep dark:text-white">{v.title}</h3>
            <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 강사진 탭 ──────────────────────────────────────────────
function Instructors() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {instructors.map((ins) => (
        <div
          key={ins.id}
          className="card rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-md dark:bg-surface-dark"
        >
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-royal text-3xl font-extrabold text-white shadow-lg">
            {ins.name[0]}
          </div>
          <h3 className="mb-1 text-lg font-extrabold text-brand-deep dark:text-white">{ins.name}</h3>
          <p className="mb-4 text-xs font-semibold text-brand-royal dark:text-brand-sky">{ins.title}</p>
          <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-400">{ins.bio}</p>
        </div>
      ))}
    </div>
  )
}

// ─── 연혁 탭 ────────────────────────────────────────────────
function History() {
  return (
    <div className="relative">
      {/* 세로 선 */}
      <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-brand-ice-dark dark:bg-white/10 hidden md:block" />
      <div className="flex flex-col gap-10">
        {history.map((h) => (
          <div key={h.year} className="flex gap-8">
            {/* 연도 */}
            <div className="relative hidden shrink-0 flex-col items-center md:flex">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-royal text-xs font-black text-white shadow">
                {h.year.slice(-2)}
              </div>
            </div>
            {/* 내용 */}
            <div className="flex-1 border-b border-brand-ice-dark pb-8 dark:border-white/10">
              <h3 className="mb-4 text-3xl font-extrabold text-brand-royal dark:text-brand-sky md:hidden">
                {h.year}
              </h3>
              <h3 className="mb-4 hidden text-xl font-extrabold text-brand-deep dark:text-white md:block">
                {h.year}년
              </h3>
              <ul className="flex flex-col gap-2">
                {h.events.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-neutral-600 dark:text-neutral-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 메인 About 컴포넌트 ────────────────────────────────────
const pageMeta = {
  intro:        { en: 'About Us',       ko: '에이아이런을 소개합니다' },
  philosophy:   { en: 'Philosophy',     ko: '우리의 교육 철학' },
  instructors:  { en: 'Instructors',    ko: '전문 강사진' },
  history:      { en: 'History',        ko: 'AILearn의 발자취' },
}

export default function About() {
  const { tab } = useParams()
  const meta    = pageMeta[tab]
  if (!meta) return <Navigate to="/about/intro" replace />

  return (
    <PageShell titleEn={meta.en} titleKo={meta.ko}>
      {tab === 'intro'       && <Intro />}
      {tab === 'philosophy'  && <Philosophy />}
      {tab === 'instructors' && <Instructors />}
      {tab === 'history'     && <History />}
    </PageShell>
  )
}
