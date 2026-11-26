import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Career &amp; Leadership
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Experience Timeline
        </h1>
        <p className="text-sm text-muted-foreground">
          Community building, technical leadership, and web development internships.
        </p>
      </div>

      <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border sm:before:left-6">
        {PORTFOLIO.experience.map((exp) => (
          <div key={exp.id} className="relative pl-12 sm:pl-16">
            <span
              className={`absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 sm:left-4.5 ${
                exp.active
                  ? 'border-emerald-400 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]'
                  : 'border-border bg-surface-elevated'
              }`}
            />

            <div className="rounded-2xl border border-border bg-surface/80 p-6 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-primary">{exp.organization}</span>
                    <span className="text-xs text-muted-foreground">· {exp.type}</span>
                  </div>
                  <h2 className="font-display-lg text-xl font-bold text-foreground mt-1">
                    {exp.role}
                  </h2>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1">
                  {exp.active ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active · {exp.period}
                    </span>
                  ) : (
                    <span className="rounded-full border border-border bg-background px-3 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {exp.statusLabel || exp.period}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{exp.summary}</p>

              <ul className="space-y-2 border-t border-border pt-4">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="material-symbols-outlined text-[16px] text-primary mt-0.5 shrink-0">
                      arrow_right
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.links?.length > 0 && (
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {exp.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
