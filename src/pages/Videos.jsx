import { useState, useMemo, useEffect, useCallback } from 'react'
import { useParams, Navigate, NavLink, useSearchParams, Link } from 'react-router-dom'
import { videos, videoCategories, videoSubCategories } from '../data/site'

const VIDEOS_PER_PAGE = 6

const isPlaceholder = (id) => typeof id === 'string' && id.startsWith('PLACEHOLDER')

// ─── 썸네일 ──────────────────────────────────────────────────
function VideoThumbnail({ video }) {
  const [error, setError] = useState(isPlaceholder(video.youtubeId))
  const isShort = video.isShort

  return (
    <div className={[
      'relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-deep to-brand',
      isShort ? 'aspect-[9/16] max-w-[240px] mx-auto sm:max-w-none sm:aspect-video' : 'aspect-video',
    ].join(' ')}>
      {!error && (
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
          {isPlaceholder(video.youtubeId) && (
            <span className="mb-3 rounded-full bg-brand-royal/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-sky">
              업로드 준비중
            </span>
          )}
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-sky">
            {video.subCategoryLabel}
          </div>
          <div className="text-sm font-bold leading-snug text-white line-clamp-3">
            {video.title}
          </div>
        </div>
      )}
      {isShort && (
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.23-2.53-5.06-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25l1.2.5L6 14.94c-1.84.96-2.53 3.23-1.56 5.06.97 1.83 3.23 2.53 5.06 1.56l8.5-4.5c1.29-.68 2.07-2.04 2-3.49-.07-1.42-.93-2.67-2.23-3.25zM10 14.45v-5l5 2.5-5 2.5z"/>
          </svg>
          <span className="text-[9px] font-bold text-white">Shorts</span>
        </div>
      )}
      {!isPlaceholder(video.youtubeId) && (
        <div className="play-btn absolute inset-0 flex items-center justify-center bg-black/15">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-royal/90 text-white shadow-xl">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
      {video.duration && (
        <div className="absolute bottom-2.5 right-2.5 rounded bg-black/70 px-2 py-0.5 text-xs font-bold text-white">
          {video.duration}
        </div>
      )}
    </div>
  )
}

// ─── 모달 ────────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  const isShort = video.isShort
  const embedSrc = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1${video.startTime ? `&start=${video.startTime}` : ''}`

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 glass"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={['w-full animate-fade-in-up', isShort ? 'max-w-sm' : 'max-w-4xl'].join(' ')}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge">{video.subCategoryLabel}</span>
            {isShort && (
              <span className="rounded-full bg-[#FF0000]/20 px-2 py-0.5 text-xs font-bold text-[#FF4444]">Shorts</span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white text-xl leading-none"
          >✕</button>
        </div>

        <div className={['w-full overflow-hidden rounded-2xl bg-black shadow-2xl', isShort ? 'aspect-[9/16]' : 'aspect-video'].join(' ')}>
          <iframe
            src={embedSrc}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-5 px-1">
          <h2 className="mb-2 text-lg font-bold text-white md:text-xl">{video.title}</h2>
          <p className="text-sm leading-relaxed text-white/60">{video.desc}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/40">
            {video.uploadDate && <span>{video.uploadDate}</span>}
            {video.duration   && <span>{video.duration}</span>}
            {video.youtubeUrl && (
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-brand-sky transition hover:text-brand-sky-light"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                YouTube에서 보기
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── 비디오 카드 ──────────────────────────────────────────────
function VideoCard({ video, onPlay }) {
  const canPlay = !isPlaceholder(video.youtubeId)
  return (
    <article
      className={['group video-card', canPlay ? 'cursor-pointer' : 'cursor-default'].join(' ')}
      onClick={() => canPlay && onPlay(video)}
    >
      <VideoThumbnail video={video} />
      <div className="mt-4 px-0.5">
        <div className="mb-2.5 flex flex-wrap items-center gap-2">
          <span className="badge">{video.subCategoryLabel}</span>
          {video.isShort && (
            <span className="rounded-full bg-[#FF0000]/10 px-2 py-0.5 text-[10px] font-bold text-[#FF5555]">Shorts</span>
          )}
          <span className="text-xs text-neutral-400 dark:text-neutral-500">{video.uploadDate}</span>
        </div>
        <h3 className={[
          'mb-2 font-bold leading-snug transition line-clamp-2',
          canPlay
            ? 'text-brand-deep group-hover:text-brand-royal dark:text-white dark:group-hover:text-brand-sky'
            : 'text-neutral-400 dark:text-neutral-500',
        ].join(' ')}>
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
  return (
    <nav aria-label="페이지 네비게이션" className="mt-14 flex items-center justify-center gap-2">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-brand-royal hover:bg-brand-royal hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/20 dark:text-white"
      >‹</button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
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
        >{p}</button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-brand-royal hover:bg-brand-royal hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/20 dark:text-white"
      >›</button>
    </nav>
  )
}

// ─── 메인 Videos 페이지 ──────────────────────────────────────
export default function Videos() {
  const { category }                    = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeVideo, setActiveVideo]   = useState(null)
  const [page, setPage]                 = useState(1)

  const catInfo = videoCategories.find((c) => c.key === category)
  if (!catInfo) return <Navigate to="/videos/yojeom" replace />

  const groupCats = videoCategories.filter((c) => c.group === catInfo.group)
  const subCats   = videoSubCategories[category] ?? []
  const subParam  = searchParams.get('sub') ?? 'all'
  const subCat    = subCats.find((s) => s.key === subParam) ? subParam : 'all'

  useEffect(() => { setPage(1) }, [category, subCat])

  const filtered = useMemo(
    () => videos.filter((v) => {
      if (v.category !== category) return false
      if (subCat !== 'all' && v.subCategory !== subCat) return false
      return true
    }),
    [category, subCat],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / VIDEOS_PER_PAGE))
  const safePage   = Math.min(page, totalPages)
  const pageVideos = filtered.slice((safePage - 1) * VIDEOS_PER_PAGE, safePage * VIDEOS_PER_PAGE)

  const handleSubCat = useCallback((key) => {
    setSearchParams(key === 'all' ? {} : { sub: key })
    setPage(1)
  }, [setSearchParams])

  const handlePage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-brand-deep">

      {/* 페이지 헤더 */}
      <div className="bg-gradient-to-br from-brand-deep via-brand to-brand-royal py-20 md:py-28">
        <div className="mx-auto max-w-container section-x">
          <p className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="transition hover:text-white">홈</Link>
            <span>/</span>
            <span className="text-white/80">{catInfo.label}</span>
          </p>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-sky">Portfolio</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {catInfo.title}
          </h1>
          <p className="max-w-xl text-lg text-white/70">{catInfo.desc}</p>
        </div>
      </div>

      {/* 탭 네비 */}
      <div className="sticky top-20 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-brand-deep/95">
        <div className="mx-auto max-w-container section-x">
          <div className="flex gap-0 overflow-x-auto">
            {groupCats.map((c) => (
              <NavLink
                key={c.key}
                to={`/videos/${c.key}`}
                className={({ isActive }) => [
                  'whitespace-nowrap border-b-2 px-4 py-5 text-sm font-bold transition md:px-7',
                  isActive
                    ? 'border-brand-royal text-brand-royal dark:border-brand-sky dark:text-brand-sky'
                    : 'border-transparent text-neutral-500 hover:text-brand-deep dark:text-neutral-400 dark:hover:text-white',
                ].join(' ')}
                onClick={() => handleSubCat('all')}
              >
                {c.shortLabel ?? c.label}
              </NavLink>
            ))}
          </div>

          {subCats.length > 1 && (
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
          )}
        </div>
      </div>

      {/* 영상 그리드 */}
      <div className="mx-auto max-w-container section-x py-16 md:py-20">
        <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
          총 <span className="font-bold text-brand-royal dark:text-brand-sky">{filtered.length}</span>개
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-32 text-center">
            <p className="text-lg font-semibold text-neutral-400 dark:text-neutral-500">영상이 없습니다.</p>
            <button onClick={() => handleSubCat('all')} className="btn-ghost text-sm">전체 목록 →</button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {pageVideos.map((v) => (
                <VideoCard key={v.id} video={v} onPlay={setActiveVideo} />
              ))}
            </div>
            <Pagination current={safePage} total={totalPages} onChange={handlePage} />
          </>
        )}
      </div>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  )
}