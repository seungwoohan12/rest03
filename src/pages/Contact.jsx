import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // 실제 운영 시 이메일 전송 API 연동
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-brand-deep to-brand py-20 md:py-28">
        <div className="mx-auto max-w-container section-x">
          <p className="mb-2 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition">홈</Link>
            <span>/</span>
            <span className="text-white/80">문의하기</span>
          </p>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-sky">Contact</p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">문의하기</h1>
          <p className="mt-4 text-lg text-white/60">궁금하신 사항을 남겨주시면 빠르게 답변 드리겠습니다.</p>
        </div>
      </div>

      {/* 본문 */}
      <div className="mx-auto max-w-container section-x py-16 md:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* 연락처 정보 */}
          <div className="lg:w-80">
            <h2 className="mb-8 text-2xl font-extrabold text-brand-deep dark:text-white">
              연락처 정보
            </h2>
            <ul className="flex flex-col gap-6">
              {[
                { icon: '📍', label: '주소',     val: company.contact.address },
                { icon: '📞', label: '전화',     val: company.contact.tel },
                { icon: '✉️', label: '이메일',   val: company.contact.email },
                { icon: '⏰', label: '운영시간', val: company.contact.hours },
              ].map((r) => (
                <li key={r.label} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-ice text-xl dark:bg-white/10">
                    {r.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">{r.label}</p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{r.val}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-3">
              {company.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition hover:border-brand-royal hover:text-brand-royal dark:border-white/20 dark:text-neutral-400 dark:hover:border-brand-sky dark:hover:text-brand-sky text-sm font-bold"
                >
                  {s.icon === 'yt' ? 'YT' : 'IG'}
                </a>
              ))}
            </div>
          </div>

          {/* 문의 양식 */}
          <div className="flex-1">
            {sent ? (
              <div className="flex flex-col items-center gap-6 rounded-2xl bg-brand-ice py-16 text-center dark:bg-surface-dark">
                <span className="text-6xl">✅</span>
                <h3 className="text-2xl font-extrabold text-brand-deep dark:text-white">
                  문의가 접수되었습니다!
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  영업일 기준 1~2일 내로 답변 드리겠습니다.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-primary"
                >
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-brand-deep dark:text-white">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 dark:border-white/20 dark:bg-surface-dark dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-brand-sky"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-brand-deep dark:text-white">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 dark:border-white/20 dark:bg-surface-dark dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-brand-sky"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-brand-deep dark:text-white">
                    문의 유형
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 dark:border-white/20 dark:bg-surface-dark dark:text-white dark:focus:border-brand-sky"
                  >
                    <option value="">선택해주세요</option>
                    <option value="course">강의 관련 문의</option>
                    <option value="youtube">유튜브 채널 문의</option>
                    <option value="partnership">제휴/협업 문의</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-brand-deep dark:text-white">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="문의 내용을 자세히 입력해주세요."
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 dark:border-white/20 dark:bg-surface-dark dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-brand-sky"
                  />
                </div>
                <button type="submit" className="btn-primary self-start px-10">
                  문의 보내기 →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
