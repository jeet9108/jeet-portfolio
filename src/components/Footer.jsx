import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../data/portfolio';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setIstTime(formatted);
      } catch {
        setIstTime('IST (UTC+5:30)');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <img
                src={PORTFOLIO.identity.avatar}
                alt={PORTFOLIO.identity.name}
                className="h-7 w-7 rounded-md border border-border object-cover"
              />
              <span className="font-display-lg text-sm font-bold text-foreground">
                {PORTFOLIO.identity.name}
              </span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                Mumbai · {istTime || 'IST'}
              </span>
            </div>
            <p className="max-w-md text-xs text-muted-foreground leading-relaxed">
              IT Diploma student, Full-Stack &amp; ML Developer, and Founder of{' '}
              <a
                href={PORTFOLIO.contact.optskillLinkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary underline underline-offset-4"
              >
                OptSkill.community
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/experience" className="hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link to="/certifications" className="hover:text-foreground transition-colors">
              Certifications
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO.identity.name}. Crafted with React, Tailwind CSS
            &amp; Framer Motion.
          </span>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO.contact.optskillLinkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              OptSkill
            </a>
            <a
              href={`mailto:${PORTFOLIO.contact.email}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
