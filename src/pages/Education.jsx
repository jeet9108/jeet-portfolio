import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Academic Path
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Education
        </h1>
        <p className="text-sm text-muted-foreground">
          Formal engineering diploma and schooling in Mumbai, India.
        </p>
      </div>

      <div className="space-y-5">
        {PORTFOLIO.education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-semibold ${
                    edu.status === 'Pursuing'
                      ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                      : 'border border-border bg-background text-muted-foreground'
                  }`}
                >
                  {edu.status === 'Pursuing' && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  {edu.status} · {edu.period}
                </span>
                <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground mt-2">
                  {edu.degree}
                </h2>
                <p className="text-sm font-medium text-primary mt-0.5">{edu.institution}</p>
              </div>

              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                {edu.location}
              </span>
            </div>

            <ul className="space-y-2 border-t border-border pt-4">
              {edu.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="material-symbols-outlined text-[16px] text-primary mt-0.5 shrink-0">
                    school
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
