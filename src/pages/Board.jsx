import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function Skeleton() {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-[72px] animate-pulse rounded-xl bg-brand-ice dark:bg-white/5" />
      ))}
    </div>
  )
}

export default function Board() {
  const { user } = useAuth()
  const [posts,   setPosts]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState('')

  useEffect(() => {
    supabase
      .from('posts')
      .select('id, title, content, created_at, user_id, profiles(nickname)')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setPosts(data ?? [])
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-container px-4 md:px-10 lg:px-20">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-sky">Community</p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">자유 게시판</h1>
          <p className="mt-3 text-lg text-white/70">이야기를 나눠요</p>
        </div>
      </section>

      {/* ─── List ─────────────────────────────────────── */}
      <section className="mx-auto max-w-container px-4 py-12 md:px-10 lg:px-20">

        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            전체{' '}
            <span className="font-bold text-brand-royal dark:text-brand-sky">
              {loading ? '—' : posts.length}
            </span>
            개
          </p>
          {user ? (
            <Link
              to="/board/write"
              className="rounded-full bg-brand-royal px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-royal-light"
            >
              글쓰기
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-full border border-brand-royal px-5 py-2 text-sm font-semibold text-brand-royal transition hover:bg-brand-royal hover:text-white dark:border-brand-sky dark:text-brand-sky dark:hover:bg-brand-sky/20"
            >
              로그인 후 글쓰기
            </Link>
          )}
        </div>

        {loading && <Skeleton />}

        {!loading && error && (
          <p className="rounded-xl bg-red-50 p-6 text-sm text-red-600 dark:bg-red-900/10 dark:text-red-400">
            오류: {error}
          </p>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-4xl">📝</p>
            <p className="mt-4 text-lg font-bold text-neutral-500 dark:text-neutral-400">아직 작성된 글이 없어요</p>
            <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">첫 번째 글을 남겨보세요!</p>
            {user && (
              <Link
                to="/board/write"
                className="mt-6 inline-block rounded-full bg-brand-royal px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-royal-light"
              >
                글쓰기
              </Link>
            )}
          </div>
        )}

        {!loading && posts.length > 0 && (
          <ul className="divide-y divide-neutral-100 dark:divide-white/10">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/board/${post.id}`}
                  className="group -mx-2 flex flex-col gap-1 rounded-xl px-2 py-4 transition hover:bg-brand-ice/60 dark:hover:bg-white/5"
                >
                  <h2 className="text-base font-bold text-neutral-900 transition group-hover:text-brand-royal dark:text-white dark:group-hover:text-brand-sky line-clamp-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {post.content}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {post.profiles?.nickname ?? '익명'} · {fmtDate(post.created_at)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
