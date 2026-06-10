import { useState, useMemo, useEffect, useCallback } from 'react'
import { useParams, Navigate, NavLink, useSearchParams, Link } from 'react-router-dom'
import { videos, videoCategories, videoSubCategories } from '../data/site'

const VIDEOS_PER_PAGE = 6 // 2열 × 3행

// ─── 썸네일 컴포넌트 ─────────────────────────────────────────
function VideoThumbnail({ video }) {
  const [error, setError] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-brand-deep to-brand">
      {!error && (
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-sky">
            {video.subCategoryLabel}
          </div>
          <div className="text-sm font-bold leading-snug text-white line-clamp-3">
            {video.title}
          </div>
        </div>
      )}
      {/* 재생 버튼 오버레이 */}
      <div className="play-btn absolute inset-0 flex items-center justify-center bg-black/15">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-royal/90 text-white shadow-xl transition">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
      {/* 재생 시간 뱃지 */}
      {video.duration && (
        <div className="absolute bottom-2.5 right-2.5 rounded bg-black/70 px-2 py-0.5 text-xs font-bold text-white">
          {video.duration}
        </div>
      )}
    </div>
  )
}

// ─── 동영상 모달 ─────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 glass"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-4xl animate-fade-in-up">
        {/* 닫기 버튼 */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-white/60">{video.subCategoryLabel}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* 유튜브 임베드 */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* 영상 정보 */}
        <div className="mt-5 px-1">
          <h2 className="mb-2 text-lg font-bold text-white md:text-xl">{video.title}</h2>
          <p className="text-sm leading-relaxed text-white/60">{video.desc}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-white/40">
            <span>{video.uploadDate}</span>
            <span>{video.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── 동영상 카드 ─────────────────────────────────────────────
function VideoCard({ video, onPlay }) {
  return (
    <article
      className="group video-card cursor-pointer"
      onClick={() => onPlay(video)}
    >
      <VideoThumbnail video={video} />
      <div className="mt-4 px-0.5">
        <div className="mb-2.5 flex items-center gap-3">
          <span className="badge">{video.subCategoryLabel}</span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">{video.uploadDate}</span>
        </div>
        <h3 className="mb-2 font-bold leading-snug text-brand-deep transition group-hover:text-brand-royal dark:text-white dark:group-hover:text-brand-sky line-clamp-2">
          {video.title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {video.desc}
        </p>
      </div>
    </article>
  )
}

// ─── 페이지네이션 ─────────────────────────────────────────────
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null

  const pages = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <nav
      aria-label="페이지 네비게이션"
      className="mt-14 flex items-center justify-center gap-2"
    >
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="이전 페이지"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-brand-royal hover:bg-brand-royal hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/20 dark:text-white dark:hover:border-brand-royal"
      >
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === current ? 'page' : undefined}
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition',
            p === current
              ? 'border-brand-royal bg-brand-royal text-white shadow-sm'
              : 'border-neutral-200 text-neutral-600 hover:border-brand-royal hover:bg-brand-royal hover:text-white dark:border-white/20 dark:text-white',
          ].join(' ')}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="다음 페이지"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-brand-royal hover:bg-brand-royal hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/20 dark:text-white dark:hover:border-brand-royal"
      >
        ›
      </button>
    </nav>
  )
}

// ─── 메인 Videos 페이지 ──────────────────────────────────────
export default function Videos() {
  const { category }               = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeVideo, setActiveVideo]   = useState(null)
  const [page, setPage]                 = useState(1)

  const catInfo  = videoCategories.find((c) => c.key === category)
  if (!catInfo) return <Navigate to="/videos/ai-related" replace />

  const subCats  = videoSubCategories[category] ?? []
  const subParam = searchParams.get('sub') ?? 'all'
  const subCat   = subCats.find((s) => s.key === subParam) ? subParam : 'all'

  // 카테고리/서브카테고리 변경 시 페이지 리셋
  useEffect(() => { setPage(1) }, [category, subCat])

  const filtered = useMemo(
    () =>
      videos.filter((v) => {
        if (v.category !== category) return false
        if (subCat !== 'all' && v.subCategory !== subCat) return false
        return true
      }),
    [category, subCat],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / VIDEOS_PER_PAGE))
  const safePage   = Math.min(page, totalPages)
  const pageVideos = filtered.slice(
    (safePage - 1) * VIDEOS_PER_PAGE,
    safePage * VIDEOS_PER_PAGE,
  )

  const handleSubCat = useCallback(
    (key) => {
      setSearchParams(key === 'all' ? {} : { sub: key })
      setPage(1)
    },
    [setSearchParams],
  )

  const handlePageChange = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-brand-deep">

      {/* ─── 페이지 헤더 ───────────────────────── */}
      <div className="bg-gradient-to-br from-brand-deep via-brand to-brand-royal py-20 md:py-28">
        <div className="mx-auto max-w-container section-x">
          {/* 상단 브레드크럼 */}
          <p className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition">홈</Link>
            <span>/</span>
            <span className="text-white/80">{catInfo.label}</span>
          </p>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-sky">
            {catInfo.label}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {catInfo.title}
          </h1>
          <p className="max-w-xl text-lg text-white/70">{catInfo.desc}</p>
        </div>
      </div>

      {/* ─── 카테고리 탭 네비 (sticky) ─────────── */}
      <div className="sticky top-20 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-brand-deep/95">
        <div className="mx-auto max-w-container section-x">

          {/* 대분류 (AI 관련 / AI 리터러시) */}
          <div className="flex gap-0 overflow-x-auto border-b border-neutral-100 dark:border-white/10">
            {videoCategories.map((c) => (
              <NavLink
                key={c.key}
                to={`/videos/${c.key}`}
                className={({ isActive }) =>
                  [
                    'whitespace-nowrap border-b-2 px-5 py-5 text-sm font-bold transition md:px-8',
                    isActive
                      ? 'border-brand-royal text-brand-royal dark:border-brand-sky dark:text-brand-sky'
                      : 'border-transparent text-neutral-500 hover:text-brand-deep dark:text-neutral-400 dark:hover:text-white',
                  ].join(' ')
                }
                onClick={() => handleSubCat('all')}
              >
                {c.label}
              </NavLink>
            ))}
          </div>

          {/* 소분류 필터 */}
          <div className="flex gap-2 overflow-x-auto py-3">
            {subCats.map((s) => (
              <button
                key={s.key}
                onClick={() => handleSubCat(s.key)}
                className={[
                  'shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition',
                  subCat === s.key
                    ? 'bg-brand-royal text-white dark:bg-brand-sky dark:text-brand-deep'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20',
                ].join(' ')}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 영상 그리드 ────────────────────────── */}
      <div className="mx-auto max-w-container section-x py-16 md:py-20">

        {/* 검색 결과 수 */}
        <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
          총 <span className="font-bold text-brand-royal dark:text-brand-sky">{filtered.length}</span>개의 영상
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-32 text-center text-neutral-400 dark:text-neutral-500">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <p className="text-lg font-semibold">해당 분류에 영상이 없습니다.</p>
            <button
              onClick={() => handleSubCat('all')}
              className="btn-ghost text-sm"
            >
              전체 목록으로 →
            </button>
          </div>
        ) : (
          <>
            {/* 2열 그리드 */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {pageVideos.map((v) => (
                <VideoCard key={v.id} video={v} onPlay={setActiveVideo} />
              ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination
              current={safePage}
              total={totalPages}
              onChange={handlePageChange}
            />
          </>
        )}
      </div>

      {/* ─── 동영상 재생 모달 ───────────────────── */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  )
}
