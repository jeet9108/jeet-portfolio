import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Technical Stack
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Skills &amp; Arsenal
        </h1>
        <p className="text-sm text-muted-foreground">
          My core programming languages, web technologies, ML foundations, databases, and tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PORTFOLIO.skills.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-border bg-surface/80 p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[19px]">{group.icon}</span>
              </div>
              <h2 className="font-display-lg text-lg font-bold text-foreground">{group.group}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground hover:border-primary/60 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
