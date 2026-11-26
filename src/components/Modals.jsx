import { AnimatePresence, motion } from 'framer-motion';

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400">
                      {project.badge}
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.fullDesc}</p>

              {project.highlights?.length > 0 && (
                <div className="rounded-xl border border-border bg-background p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2.5">
                    Key Highlights &amp; Architecture
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="material-symbols-outlined text-[15px] text-emerald-400 mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-4">
              {project.secondaryGithub && (
                <a
                  href={project.secondaryGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">code</span>
                  <span>Companion Repo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  <span>View on GitHub</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs font-semibold text-foreground hover:border-foreground transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {cert.type} · {cert.category}
                  </span>
                  <h2 className="font-display-lg text-lg font-bold text-foreground">
                    {cert.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close credential modal"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-xs">
                <span className="text-muted-foreground">Issuing Organization</span>
                <span className="font-semibold text-foreground">{cert.issuer}</span>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Credential Summary
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.details}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Key Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-border pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-surface-elevated border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
