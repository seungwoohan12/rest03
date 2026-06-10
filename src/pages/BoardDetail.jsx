import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

function fmtDateTime(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function BoardDetail() {
  const { id }      = useParams()
  const { user }    = useAuth()
  const navigate    = useNavigate()
  const [post,     setPost]     = useState(null)
  const [loading,  setLoading]  = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    supabase
      .from('posts')
      .select('*, profiles(nickname)')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (!error) setPost(data)
        setLoading(false)
      })
  }, [id])

  async function handleDelete() {
    if (!window.confirm('정말 삭제하시겠습니까?')) return
    setDeleting(true)
    const { error } = await supabase.from('posts').delete().eq('id', id)
    if (error) {
      alert('삭제 중 오류가 발생했습니다.')
      setDeleting(false)
    } else {
      navigate('/board')
    }
  }

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="mx-auto max-w-container px-4 py-16 md:px-10 lg:px-20">
        <div className="mb-6 h-4 w-24 animate-pulse rounded bg-brand-ice dark:bg-white/5" />
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-brand-navy">
          <div className="mb-4 h-8 w-3/4 animate-pulse rounded bg-brand-ice dark:bg-white/5" />
          <div className="h-4 w-1/3 animate-pulse rounded bg-brand-ice dark:bg-white/5" />
          <div className="mt-8 space-y-3">
            {[1,2,3,4,5].map(i => <div key={i} className="h-4 animate-pulse rounded bg-brand-ice dark:bg-white/5" />)}
          </div>
        </div>
      </div>
    )
  }

  /* ── Not found ── */
  if (!post) {
    return (
      <div className="mx-auto max-w-container px-4 py-32 text-center">
        <p className="text-neutral-400 dark:text-neutral-500">게시글을 찾을 수 없습니다.</p>
        <Link to="/board" className="mt-4 inline-block text-sm text-brand-royal hover:underline dark:text-brand-sky">
          ← 목록으로
        </Link>
      </div>
    )
  }

  const isAuthor = !!user && user.id === post.user_id

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-10 lg:px-20">

      {/* Back */}
      <Link
        to="/board"
        className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-400 transition hover:text-brand-royal dark:hover:text-brand-sky"
      >
        ← 목록으로
      </Link>

      {/* Post card */}
      <article className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-brand-navy">

        {/* Header */}
        <h1 className="text-2xl font-extrabold leading-tight text-neutral-900 dark:text-white md:text-3xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            {post.profiles?.nickname ?? '익명'} · {fmtDateTime(post.created_at)}
            {post.updated_at !== post.created_at && (
              <span className="ml-2 text-xs">(수정됨)</span>
            )}
          </p>
          {isAuthor && (
            <div className="flex gap-2">
              <Link
                to={`/board/${id}/edit`}
                className="rounded-full border border-brand-royal px-4 py-1.5 text-xs font-semibold text-brand-royal transition hover:bg-brand-royal hover:text-white dark:border-brand-sky dark:text-brand-sky dark:hover:bg-brand-sky dark:hover:text-brand-deep"
              >
                수정
              </Link>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-full border border-red-400 px-4 py-1.5 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white disabled:opacity-60"
              >
                {deleting ? '삭제 중...' : '삭제'}
              </button>
            </div>
          )}
        </div>

        <hr className="my-6 border-neutral-100 dark:border-white/10" />

        {/* Body */}
        <div className="min-h-40 whitespace-pre-wrap text-base leading-8 text-neutral-700 dark:text-neutral-300">
          {post.content}
        </div>
      </article>

      {/* Bottom navigation */}
      <div className="mt-8 flex justify-between">
        <Link to="/board" className="text-sm text-neutral-400 hover:text-brand-royal dark:hover:text-brand-sky transition">
          ← 목록
        </Link>
        {user && (
          <Link to="/board/write" className="text-sm text-brand-royal hover:underline dark:text-brand-sky">
            새 글 쓰기
          </Link>
        )}
      </div>
    </div>
  )
}
