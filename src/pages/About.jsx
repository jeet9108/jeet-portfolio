import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-14"
    >
      <section className="flex flex-col md:flex-row gap-8 md:items-start md:justify-between">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">About</span>
          <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            The Intersection of Practical Engineering, Applied ML &amp; Community
          </h1>
          <div className="space-y-4 pt-2">
            {PORTFOLIO.identity.aboutParagraphs.map((para) => (
              <p key={para} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="shrink-0 self-center md:self-start">
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-primary/40 to-purple-500/20 blur-md group-hover:opacity-80 transition duration-300" />
            <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-2xl">
              <img
                src="/images/jeet-shah.png"
                alt="Jeet Shah"
                className="h-56 w-56 sm:h-64 sm:w-64 rounded-xl object-cover"
              />
              <div className="mt-3 text-center">
                <div className="font-display-lg text-sm font-bold text-foreground">Jeet Shah</div>
                <div className="text-[11px] text-muted-foreground">Founder · OptSkill.community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="space-y-6">
        <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground">
          Engineering &amp; Leadership Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-surface/80 p-6 space-y-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
              </div>
              <h3 className="font-display-lg text-base font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPTSKILL SPOTLIGHT */}
      <section className="rounded-2xl border border-primary/30 bg-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Founder · OptSkill.community
          </div>
          <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground">
            Building OptSkill for Student Technologists
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            OptSkill is a student-led community focused on bridging classroom theory with hands-on
            coding, real projects, and collaborative skill growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={PORTFOLIO.contact.optskillLinkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            <span>OptSkill LinkedIn</span>
            <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
          <a
            href={PORTFOLIO.contact.optskillInstagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors"
          >
            <span>Instagram</span>
            <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
        </div>
      </section>

      {/* CORE INTERESTS & PHILOSOPHY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-surface/80 p-6 space-y-4">
          <h2 className="font-display-lg text-lg font-bold text-foreground">Core Interests</h2>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/80 p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="font-display-lg text-lg font-bold text-foreground">
              Philosophy &amp; Vision
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Learn by shipping real software, design systems that stay dependable offline, and
              lift the student developer community alongside you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projects"
              className="text-xs font-semibold text-primary hover:underline underline-offset-4"
            >
              Explore Projects →
            </Link>
            <Link
              to="/education"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              Academic Path →
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
