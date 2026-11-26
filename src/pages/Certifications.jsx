import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';
import { CertModal } from '../components/Modals';

export default function Certifications() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = useMemo(() => {
    const unique = new Set(PORTFOLIO.certifications.map((c) => c.category));
    return ['All', ...unique];
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PORTFOLIO.certifications.filter((cert) => {
      const matchesCat = category === 'All' || cert.category === category;
      const matchesQuery =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [search, category]);

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-10"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Verified Credentials
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-sm text-muted-foreground">
          Completed simulations, workshops, and foundational computer science certifications.
        </p>
      </div>

      {/* SEARCH & CATEGORY FILTERS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-muted-foreground">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search certificates or issuers..."
            className="w-full rounded-xl border border-border bg-surface py-2 pl-9 pr-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const active = cat === category;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-primary text-white'
                    : 'border border-border bg-surface text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* CREDENTIALS GRID */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface/60 py-14 text-center space-y-3">
          <span className="material-symbols-outlined text-[32px] text-muted-foreground">
            search_off
          </span>
          <p className="text-sm font-medium text-foreground">No credentials found</p>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-primary hover:border-primary cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 hover:border-primary/50 hover:bg-surface-elevated/60 transition-all cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    {cert.type}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {cert.category}
                  </span>
                </div>

                <h2 className="font-display-lg text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h2>
                <p className="text-xs font-semibold text-primary/90">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.details}</p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-primary">
                  <span className="material-symbols-outlined text-[15px]">zoom_in</span>
                  <span>Inspect</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </motion.div>
  );
}
