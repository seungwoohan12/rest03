import { NavLink } from 'react-router-dom'

export default function SubPageLayout({ sectionTitle, tabs, children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep">
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
      <div className="py-16 md:py-24">{children}</div>
    </div>
  )
}
