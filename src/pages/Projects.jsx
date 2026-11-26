import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';
import { ProjectModal } from '../components/Modals';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    const unique = new Set(PORTFOLIO.projects.map((p) => p.category));
    return ['All', ...unique];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO.projects;
    return PORTFOLIO.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Engineering &amp; Builds
          </span>
          <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Projects
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Desktop audit systems, offline-first hackathon healthcare platforms, NLP legal assistants,
            and responsive React web applications.
          </p>
        </div>
        <a
          href={PORTFOLIO.contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">terminal</span>
          <span>{PORTFOLIO.contact.githubHandle}</span>
        </a>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                active
                  ? 'bg-primary text-white shadow-sm'
                  : 'border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-foreground/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 hover:border-primary/50 hover:bg-surface-elevated/60 transition-all cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {proj.category}
                </span>
                {proj.badge && (
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400">
                    {proj.badge}
                  </span>
                )}
              </div>

              <h2 className="font-display-lg text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {proj.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {proj.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
              <span className="font-medium text-primary group-hover:underline">
                View Details →
              </span>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <span>GitHub</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.div>
  );
}
