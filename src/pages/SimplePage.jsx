import { Link } from 'react-router-dom'

export default function SimplePage({ title }) {
  const pageTitle = title || 'Page'
  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep">
      <div className="bg-gradient-to-br from-brand-deep to-brand py-20 md:py-28">
        <div className="mx-auto max-w-container section-x">
          <p className="mb-2 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">{pageTitle}</span>
          </p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">{pageTitle}</h1>
        </div>
      </div>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 section-x py-32 text-center">
        <h2 className="text-2xl font-extrabold text-brand-deep dark:text-white">{pageTitle}</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          This page is under construction. Please check back soon.
        </p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </div>
  )
}