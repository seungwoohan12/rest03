import { useParams, Navigate, NavLink, Link } from 'react-router-dom'
import { company, instructors } from '../data/site'

const tabs = [
  { label: '소개',       to: '/about/intro' },
  { label: '작업 철학',  to: '/about/philosophy' },
  { label: '멤버',       to: '/about/instructors' },
  { label: '연혁',       to: '/about/history' },
]

const history = [
  { year: '2026', events: ['HANU 포트폴리오 사이트 오픈', '서울청년센터 강북 영상 6편 제작 완료', 'AI 교육 콘텐츠 시리즈 기획'] },
  { year: '2025', events: ['요즘 것들의 돈버는 이야기 시리즈 기획·제작 착수', 'HANU Creative Studio 창업', '첫 클라이언트 영상 제작'] },
  { year: '2024', events: ['영상 콘텐츠 제작 연구 및 포트폴리오 준비', '크리에이티브 비전 수립'] },
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
            <span className="text-white/80">HANU 소개</span>
          </p>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-sky">About HANU</p>
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
      <div className="flex-1">
        <h2 className="mb-8 text-3xl font-extrabold leading-snug text-brand-deep dark:text-white md:text-4xl">
          영상으로 연결하는
          <br />
          <span className="text-brand-royal">브랜드와 사람</span>의 이야기
        </h2>
        {company.intro.map((p, i) => (
          <p key={i} className="mb-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
            {p}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/videos/yojeom" className="btn-primary">포트폴리오 보기 →</Link>
          <Link to="/contact"       className="btn-secondary">제작 문의</Link>
        </div>
      </div>

      {/* 연락처 카드 */}
      <div className="lg:w-80">
        <div className="card rounded-2xl p-6 dark:bg-surface-dark">
          <h3 className="mb-5 text-base font-bold text-brand-deep dark:text-white">연락처</h3>
          <ul className="flex flex-col gap-4 text-sm">
            {[
              { icon: '📍', label: '위치',   val: company.contact.address },
              { icon: '✉️', label: '이메일', val: company.contact.email },
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
          {/* 소셜 링크 */}
          <div className="mt-6 flex gap-3">
            {company.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-brand-royal transition hover:text-brand-sky dark:text-brand-sky"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── 작업 철학 탭 ────────────────────────────────────────────
function Philosophy() {
  const values = [
    { icon: '🎯', title: '스토리텔링',   desc: '모든 영상은 하나의 이야기입니다. 기술보다 이야기를 먼저 생각하고, 전달하고자 하는 메시지를 영상의 핵심에 둡니다.' },
    { icon: '✨', title: '진정성',       desc: '꾸미지 않은 진짜 이야기를 담습니다. 연출보다 순간을, 완벽함보다 진심을 더 중요하게 여깁니다.' },
    { icon: '🔧', title: '품질',         desc: '기획부터 촬영, 편집까지 모든 과정에서 타협하지 않습니다. 작은 디테일이 영상의 완성도를 결정합니다.' },
    { icon: '🤝', title: '클라이언트 협업', desc: '영상은 함께 만드는 것입니다. 클라이언트의 비전을 이해하고, 소통하며, 기대 이상의 결과물을 만들어냅니다.' },
  ]
  return (
    <div>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        HANU는 영상을 단순한 콘텐츠가 아닌, 브랜드와 사람을 연결하는 언어로 바라봅니다.
        네 가지 작업 철학을 기반으로 모든 프로젝트에 임합니다.
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

// ─── 멤버 탭 ────────────────────────────────────────────────
function Members() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {instructors.map((m) => (
        <div
          key={m.id}
          className="card rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-md dark:bg-surface-dark"
        >
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-royal text-3xl font-extrabold text-white shadow-lg">
            {m.name[0]}
          </div>
          <h3 className="mb-1 text-lg font-extrabold text-brand-deep dark:text-white">{m.name}</h3>
          <p className="mb-4 text-xs font-semibold text-brand-royal dark:text-brand-sky">{m.title}</p>
          <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-400">{m.bio}</p>
        </div>
      ))}
    </div>
  )
}

// ─── 연혁 탭 ────────────────────────────────────────────────
function History() {
  return (
    <div className="relative">
      <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-brand-ice-dark dark:bg-white/10 hidden md:block" />
      <div className="flex flex-col gap-10">
        {history.map((h) => (
          <div key={h.year} className="flex gap-8">
            <div className="relative hidden shrink-0 flex-col items-center md:flex">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-royal text-xs font-black text-white shadow">
                {h.year.slice(-2)}
              </div>
            </div>
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

const pageMeta = {
  intro:        { en: 'About Us',      ko: 'HANU를 소개합니다' },
  philosophy:   { en: 'Philosophy',   ko: '우리의 작업 철학' },
  instructors:  { en: 'Members',      ko: 'HANU 멤버' },
  history:      { en: 'History',      ko: 'HANU의 발자취' },
}

export default function About() {
  const { tab } = useParams()
  const meta    = pageMeta[tab]
  if (!meta) return <Navigate to="/about/intro" replace />

  return (
    <PageShell titleEn={meta.en} titleKo={meta.ko}>
      {tab === 'intro'       && <Intro />}
      {tab === 'philosophy'  && <Philosophy />}
      {tab === 'instructors' && <Members />}
      {tab === 'history'     && <History />}
    </PageShell>
  )
}