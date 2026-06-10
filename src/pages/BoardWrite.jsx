import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function BoardWrite() {
  const { id }                    = useParams() // exists when editing
  const { user, loading: authLoading } = useAuth()
  const navigate                  = useNavigate()
  const [title,      setTitle]    = useState('')
  const [content,    setContent]  = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error,      setError]    = useState('')

  /* Redirect if not logged in */
  useEffect(() => {
    if (!authLoading && !user) navigate('/login', { replace: true })
  }, [user, authLoading, navigate])

  /* Load post for editing */
  useEffect(() => {
    if (!id || !user) return
    supabase
      .from('posts')
      .select('title, content, user_id')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        if (!data) return navigate('/board')
        if (data.user_id !== user.id) return navigate('/board')
        setTitle(data.title)
        setContent(data.content)
      })
  }, [id, user, navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (id) {
        const { error } = await supabase
          .from('posts')
          .update({ title, content, updated_at: new Date().toISOString() })
          .eq('id', id)
        if (error) throw error
        navigate(`/board/${id}`)
      } else {
        const { data, error } = await supabase
          .from('posts')
          .insert({ title, content, user_id: user.id })
          .select('id')
          .single()
        if (error) throw error
        navigate(`/board/${data.id}`)
      }
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  if (authLoading) return null

  const inputCls = [
    'w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 outline-none transition',
    'focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20',
    'dark:border-white/10 dark:bg-brand-navy dark:text-white',
    'dark:focus:border-brand-sky dark:focus:ring-brand-sky/20',
  ].join(' ')

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-10">

      <h1 className="mb-8 text-2xl font-extrabold text-neutral-900 dark:text-white">
        {id ? '게시글 수정' : '글쓰기'}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className={`${inputCls} text-base font-semibold`}
        />

        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요..."
          rows={20}
          className={`${inputCls} resize-none text-base leading-relaxed`}
        />

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full border border-neutral-200 px-6 py-2.5 text-sm font-semibold text-neutral-600 transition hover:border-neutral-400 dark:border-white/20 dark:text-neutral-300 dark:hover:border-white/40"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-brand-royal px-8 py-2.5 text-sm font-bold text-white shadow transition hover:bg-brand-royal-light disabled:opacity-60"
          >
            {submitting ? '저장 중...' : id ? '수정 완료' : '게시하기'}
          </button>
        </div>
      </form>
    </div>
  )
}
