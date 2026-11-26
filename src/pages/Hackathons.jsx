import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function Hackathons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Competitions &amp; Hackathons
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Hackathons
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Competitive hackathons, presented prototypes, and rapid software engineering challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO.hackathons.map((h) => (
          <div
            key={h.id}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 hover:border-primary/50 hover:bg-surface-elevated/60 transition-all shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-0.5 text-[11px] font-semibold text-amber-400">
                  {h.badge}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{h.year}</span>
              </div>

              <div>
                <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {h.title}
                </h2>
                <p className="text-xs font-medium text-primary mt-1">{h.organizer}</p>
                <div className="mt-1 text-xs text-muted-foreground font-mono">
                  Project: <strong className="text-foreground">{h.projectBuilt}</strong>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {h.description}
              </p>

              {h.highlights?.length > 0 && (
                <div className="rounded-xl border border-border bg-background p-3.5 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5">
                    {h.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="material-symbols-outlined text-[15px] text-emerald-400 shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {h.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {h.links?.length > 0 && (
              <div className="mt-6 flex items-center justify-end border-t border-border pt-4">
                {h.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
