import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PORTFOLIO } from '../data/portfolio';

export default function Navbar({ onOpenCommand }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects', count: PORTFOLIO.projects.length },
    { href: '/experience', label: 'Experience' },
    { href: '/certifications', label: 'Certs', count: PORTFOLIO.certifications.length, highlight: true },
    { href: '/skills', label: 'Skills' },
    { href: '/education', label: 'Education' }
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5 shrink-0">
          <img
            src={PORTFOLIO.identity.avatar}
            alt={PORTFOLIO.identity.name}
            className="h-8 w-8 rounded-lg border border-border object-cover group-hover:border-primary transition-colors"
          />
          <span className="font-display-lg text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {PORTFOLIO.identity.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all ${
                  active
                    ? 'bg-surface-elevated text-foreground border border-border shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface/70 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {typeof item.count === 'number' && (
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                      item.highlight
                        ? 'bg-primary/15 text-primary border border-primary/30'
                        : 'bg-surface text-muted-foreground border border-border'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenCommand}
            aria-label="Open command palette"
            className="flex items-center gap-2 rounded-lg border border-border bg-surface-elevated/80 px-2.5 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden sm:inline text-[11px] font-mono">Ctrl+K</span>
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Contact</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden items-center justify-center w-8 h-8 rounded-lg border border-border bg-surface-elevated text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-3">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-surface-elevated text-foreground border border-border'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                  }`}
                >
                  <span>{item.label}</span>
                  {typeof item.count === 'number' && (
                    <span className="rounded-full bg-surface px-2 py-0.5 text-xs border border-border">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
