import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';
import { ProjectModal } from '../components/Modals';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

export default function Home() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeRoles = PORTFOLIO.experience.filter((e) => e.active).length;
  const pastRoles = PORTFOLIO.experience.filter((e) => !e.active).length;
  const featuredProjects = PORTFOLIO.projects.filter((p) => p.featured);

  const handleCopyCommand = () => {
    navigator.clipboard?.writeText(PORTFOLIO.flagship.command);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 1800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1800);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 space-y-16"
    >
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <div className="w-full lg:w-[60%] space-y-6">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="material-symbols-outlined text-[15px]">terminal</span>
            <span>{PORTFOLIO.identity.role}</span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 opacity-40 blur-sm group-hover:opacity-70 transition duration-300" />
              <img
                src="/images/jeet-shah.png"
                alt={PORTFOLIO.identity.name}
                className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-border/80 shadow-xl"
              />
            </div>
            <div>
              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-foreground leading-[1.08]">
                {PORTFOLIO.identity.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-foreground/90 leading-snug mt-1">
                {PORTFOLIO.identity.headline}
              </p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Information Technology diploma student building with{' '}
              <strong className="text-foreground font-semibold">Python, Java, C++, SQL, React.js</strong>{' '}
              and <strong className="text-foreground font-semibold">Machine Learning</strong>. Founder of{' '}
              <strong className="text-foreground font-semibold">OptSkill.community</strong> and former Web Development &amp; Technical Head Intern at{' '}
              <strong className="text-foreground font-semibold">Nivaah.org</strong>.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-surface border border-border text-foreground font-medium">
              {PORTFOLIO.identity.location}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {PORTFOLIO.identity.availability}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground">
              {PORTFOLIO.identity.educationBadge}
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={PORTFOLIO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-foreground text-xs font-semibold hover:border-foreground transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-foreground text-xs font-semibold hover:border-foreground transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">work</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO.contact.optskillLinkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-foreground text-xs font-semibold hover:border-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
              <span>OptSkill</span>
            </a>
            <button
              type="button"
              onClick={() => navigate('/certifications')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-primary/40 text-primary hover:text-white hover:bg-primary text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>Browse {PORTFOLIO.certifications.length} Certs &amp; Letters</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </motion.div>
        </div>

        {/* AT A GLANCE BENTO CARD */}
        <motion.div
          variants={item}
          className="w-full lg:w-[37%] bg-surface/80 border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-xl backdrop-blur-sm self-start"
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="font-display-lg text-sm font-bold text-foreground uppercase tracking-wider">
              At a Glance
            </h2>
            <span className="text-[11px] text-muted-foreground font-medium">
              Verified Profile
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigate('/experience')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-emerald-400 group-hover:text-primary transition-colors">
                {activeRoles}
              </span>
              <span className="text-xs text-muted-foreground">Active Roles</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/experience')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {pastRoles}
              </span>
              <span className="text-xs text-muted-foreground">Internships &amp; Offers</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {PORTFOLIO.projects.length}
              </span>
              <span className="text-xs text-muted-foreground">Projects</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/certifications')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {PORTFOLIO.certifications.length}
              </span>
              <span className="text-xs text-muted-foreground">Certifications</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/skills')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-purple-400 group-hover:text-primary transition-colors">
                6
              </span>
              <span className="text-xs text-muted-foreground">Core Languages</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="flex flex-col items-start gap-1 p-3.5 bg-background border border-border rounded-xl cursor-pointer hover:border-primary/60 hover:bg-surface-elevated transition-all group text-left"
            >
              <span className="text-2xl sm:text-3xl font-display-lg font-bold text-amber-400 group-hover:text-primary transition-colors">
                1
              </span>
              <span className="text-xs text-muted-foreground">Hackathon Build</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* FLAGSHIP OPEN SOURCE SPOTLIGHT */}
      <motion.section
        variants={item}
        className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface via-surface to-primary/10 p-6 sm:p-8 shadow-xl"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-0.5 text-[11px] font-semibold text-primary">
                {PORTFOLIO.flagship.badge}
              </span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-medium text-emerald-400">
                {PORTFOLIO.flagship.statusTag}
              </span>
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-0.5 text-[11px] font-medium text-amber-400">
                {PORTFOLIO.flagship.highlightTag}
              </span>
            </div>

            <h2 className="font-display-lg text-2xl sm:text-3xl font-bold text-foreground">
              {PORTFOLIO.flagship.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {PORTFOLIO.flagship.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {PORTFOLIO.flagship.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/80 px-2.5 py-0.5 font-mono text-[11px] text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-[340px] shrink-0">
            <button
              type="button"
              onClick={handleCopyCommand}
              className="flex items-center justify-between gap-2 rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-left font-mono text-[11px] text-foreground hover:border-primary/60 transition-colors cursor-pointer"
            >
              <span className="truncate text-muted-foreground">
                <span className="text-primary mr-1.5">$</span>
                git clone .../FinAuditPro
              </span>
              <span className="shrink-0 text-[10px] font-sans font-semibold text-primary">
                {copiedCmd ? 'Copied!' : 'Copy'}
              </span>
            </button>

            <a
              href={PORTFOLIO.flagship.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover transition-all shadow-sm"
            >
              <span>View Repository</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* SELECTED WORK */}
      <motion.section variants={item} className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Portfolio
            </span>
            <h2 className="font-display-lg text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Selected Work
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <span>View All ({PORTFOLIO.projects.length})</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((proj) => (
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

                <h3 className="font-display-lg text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {proj.shortDesc}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open ${proj.title} on GitHub`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground shrink-0"
                >
                  <span className="material-symbols-outlined text-[15px]">terminal</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* RECENT EXPERIENCE */}
      <motion.section variants={item} className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Leadership &amp; Work
            </span>
            <h2 className="font-display-lg text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Recent Experience
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Active leadership in community building and web engineering internships.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <span>Timeline</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO.experience.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-border bg-surface/80 p-6 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-primary">{exp.organization}</span>
                {exp.active ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Current
                  </span>
                ) : (
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {exp.statusLabel || exp.period}
                  </span>
                )}
              </div>
              <h3 className="font-display-lg text-lg font-bold text-foreground">{exp.role}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT BANNER */}
      <motion.section
        variants={item}
        className="rounded-2xl border border-border bg-surface/90 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      >
        <div className="space-y-1.5">
          <h2 className="font-display-lg text-xl sm:text-2xl font-bold text-foreground">
            Let’s build something practical together.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Open to internships, hackathon collaborations, full-stack builds, and OptSkill community partnerships.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">content_copy</span>
            <span>{copiedEmail ? 'Email Copied!' : PORTFOLIO.contact.email}</span>
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>
        </div>
      </motion.section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.div>
  );
}
