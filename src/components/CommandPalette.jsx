import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedLabel, setCopiedLabel] = useState('');

  const items = useMemo(() => {
    const nav = [
      {
        group: 'Navigation',
        label: 'Home',
        desc: 'Main landing page & overview',
        icon: 'home',
        action: () => navigate('/')
      },
      {
        group: 'Navigation',
        label: 'About',
        desc: 'Background, vision & OptSkill leadership',
        icon: 'person',
        action: () => navigate('/about')
      },
      {
        group: 'Navigation',
        label: 'Projects',
        desc: `${PORTFOLIO.projects.length} engineering & ML builds`,
        icon: 'code',
        action: () => navigate('/projects')
      },
      {
        group: 'Navigation',
        label: 'Experience',
        desc: `${PORTFOLIO.experience.length} leadership & internship roles`,
        icon: 'work',
        action: () => navigate('/experience')
      },
      {
        group: 'Navigation',
        label: 'Certifications',
        desc: `${PORTFOLIO.certifications.length} verified courses & simulations`,
        icon: 'workspace_premium',
        action: () => navigate('/certifications')
      },
      {
        group: 'Navigation',
        label: 'Skills',
        desc: 'Languages, web, ML & databases',
        icon: 'psychology',
        action: () => navigate('/skills')
      },
      {
        group: 'Navigation',
        label: 'Education',
        desc: "Diploma in IT · SVKM's SBMP",
        icon: 'school',
        action: () => navigate('/education')
      },
      {
        group: 'Navigation',
        label: 'Contact',
        desc: 'Email, phone, LinkedIn & GitHub',
        icon: 'mail',
        action: () => navigate('/contact')
      }
    ];

    const quick = [
      {
        group: 'Quick Links & Actions',
        label: 'Flagship: FinAuditPro (CA Audit OS)',
        desc: 'Open GitHub repository',
        icon: 'star',
        badge: 'Python · SQL',
        action: () => window.open(PORTFOLIO.flagship.repoUrl, '_blank', 'noreferrer')
      },
      {
        group: 'Quick Links & Actions',
        label: 'MedAI — Smart Hospital Management System',
        desc: 'NeoFuture Hackathon offline-first PWA',
        icon: 'local_hospital',
        badge: 'MERN + FastAPI',
        action: () => window.open('https://github.com/jeet9108/MedAI', '_blank', 'noreferrer')
      },
      {
        group: 'Quick Links & Actions',
        label: 'Copy Email Address',
        desc: PORTFOLIO.contact.email,
        icon: 'content_copy',
        keepOpen: true,
        action: () => {
          navigator.clipboard?.writeText(PORTFOLIO.contact.email);
          setCopiedLabel('email');
          setTimeout(() => setCopiedLabel(''), 1800);
        }
      },
      {
        group: 'Quick Links & Actions',
        label: 'GitHub Profile',
        desc: PORTFOLIO.contact.githubHandle,
        icon: 'terminal',
        badge: '@jeet9108',
        action: () => window.open(PORTFOLIO.contact.github, '_blank', 'noreferrer')
      },
      {
        group: 'Quick Links & Actions',
        label: 'LinkedIn Profile',
        desc: PORTFOLIO.contact.linkedinHandle,
        icon: 'open_in_new',
        action: () => window.open(PORTFOLIO.contact.linkedin, '_blank', 'noreferrer')
      },
      {
        group: 'Quick Links & Actions',
        label: 'OptSkill.community LinkedIn',
        desc: 'Student tech community founded by Jeet',
        icon: 'groups',
        action: () => window.open(PORTFOLIO.contact.optskillLinkedin, '_blank', 'noreferrer')
      }
    ];

    const all = [...nav, ...quick];
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [navigate, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (items.length ? (prev + 1) % items.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (items.length ? (prev - 1 + items.length) % items.length : 0));
      } else if (e.key === 'Enter' && items[selectedIndex]) {
        e.preventDefault();
        const chosen = items[selectedIndex];
        chosen.action();
        if (!chosen.keepOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, items, selectedIndex, onClose]);

  const groups = ['Navigation', 'Quick Links & Actions'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 backdrop-blur-sm px-4 pt-20 sm:pt-28"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.16 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <span className="material-symbols-outlined text-[20px] text-muted-foreground">
                search
              </span>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, or quick actions..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ESC
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {items.length === 0 ? (
                <div className="py-10 text-center text-xs text-muted-foreground">
                  No matching commands or pages found.
                </div>
              ) : (
                groups.map((groupName) => {
                  const groupItems = items.filter((i) => i.group === groupName);
                  if (!groupItems.length) return null;
                  return (
                    <div key={groupName} className="mb-2 last:mb-0">
                      <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {groupName}
                      </div>
                      {groupItems.map((item) => {
                        const globalIdx = items.indexOf(item);
                        const active = globalIdx === selectedIndex;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            onClick={() => {
                              item.action();
                              if (!item.keepOpen) onClose();
                            }}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors cursor-pointer ${
                              active
                                ? 'bg-surface-elevated text-foreground border border-primary/40'
                                : 'text-muted-foreground hover:bg-surface-elevated/60 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                                {item.icon}
                              </span>
                              <div className="min-w-0">
                                <div className="truncate text-xs font-semibold text-foreground">
                                  {item.label}
                                  {item.keepOpen && copiedLabel === 'email' && (
                                    <span className="ml-2 text-[10px] font-medium text-emerald-400">
                                      Copied!
                                    </span>
                                  )}
                                </div>
                                <div className="truncate text-[11px] text-muted-foreground">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {item.badge && (
                                <span className="hidden sm:inline rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                                  {item.badge}
                                </span>
                              )}
                              <span className="material-symbols-outlined text-[14px] text-muted-foreground">
                                arrow_forward
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border bg-background/60 px-4 py-2 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border bg-surface px-1 font-mono text-[10px]">
                    ↑
                  </kbd>
                  <kbd className="rounded border border-border bg-surface px-1 font-mono text-[10px]">
                    ↓
                  </kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border bg-surface px-1 font-mono text-[10px]">
                    ↵
                  </kbd>
                  open
                </span>
              </div>
              <span className="font-mono text-[10px]">Jeet Shah · Portfolio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
