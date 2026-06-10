import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const inputCls = [
  'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition',
  'focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20',
  'dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500',
  'dark:focus:border-brand-sky dark:focus:ring-brand-sky/20',
].join(' ')

export default function Login() {
  const [mode,     setMode]     = useState('login') // 'login' | 'signup'
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [error,    setError]    = useState('')
  const [message,  setMessage]  = useState('')
  const [busy,     setBusy]     = useState(false)

  const { user, loading, signIn, signUp } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user) navigate('/', { replace: true })
  }, [user, loading, navigate])

  function switchMode(m) {
    setMode(m)
    setError('')
    setMessage('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    setBusy(true)

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password)
        if (error) throw error
        navigate(-1)
      } else {
        const { error } = await signUp(email, password, nickname.trim() || email.split('@')[0])
        if (error) throw error
        setMessage('인증 이메일을 발송했습니다. 이메일을 확인하고 링크를 클릭해 가입을 완료해 주세요.')
      }
    } catch (err) {
      const msg = err.message || '오류가 발생했습니다.'
      if (msg.includes('Invalid login credentials')) setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      else if (msg.includes('Email already registered')) setError('이미 등록된 이메일입니다.')
      else if (msg.includes('Password should')) setError('비밀번호는 6자 이상이어야 합니다.')
      else setError(msg)
    } finally {
      setBusy(false)
    }
  }

  if (loading) return null

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-brand-ice px-4 py-16 dark:bg-brand-deep">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-royal text-xl font-black text-white shadow-lg">
              H
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-brand dark:text-white">HANU</span>
          </Link>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            계정으로 로그인하고 게시판을 이용하세요
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-brand-navy">

          {/* Mode tabs */}
          <div className="mb-7 flex gap-1 rounded-xl bg-brand-ice p-1 dark:bg-white/10">
            {[['login', '로그인'], ['signup', '회원가입']].map(([m, label]) => (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={[
                  'flex-1 rounded-lg py-2.5 text-sm font-bold transition-all',
                  mode === m
                    ? 'bg-brand-royal text-white shadow'
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">이메일</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputCls}
              />
            </label>

            {mode === 'signup' && (
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">닉네임</span>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="사용할 닉네임 (선택)"
                  className={inputCls}
                />
              </label>
            )}

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">비밀번호</span>
              <input
                type="password"
                required
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                minLength={6}
                className={inputCls}
              />
              {mode === 'signup' && (
                <span className="text-xs text-neutral-400">6자 이상</span>
              )}
            </label>

            {error && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </p>
            )}
            {message && (
              <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="mt-1 w-full rounded-full bg-brand-royal py-3 text-sm font-bold text-white shadow transition hover:bg-brand-royal-light disabled:opacity-60"
            >
              {busy ? '처리 중...' : mode === 'login' ? '로그인' : '회원가입'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          <Link to="/" className="hover:text-brand-royal dark:hover:text-brand-sky transition">
            ← 홈으로 돌아가기
          </Link>
        </p>
      </div>
    </div>
  )
}
