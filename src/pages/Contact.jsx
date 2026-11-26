import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../data/portfolio';

export default function Contact() {
  const [copiedField, setCopiedField] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState('');

  const copyText = (field, value) => {
    navigator.clipboard?.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 1800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name || 'Visitor'}`);
    const mailBody = encodeURIComponent(
      `${message}\n\n— ${name || 'Portfolio Visitor'}`
    );
    window.location.href = `mailto:${PORTFOLIO.contact.email}?subject=${mailSubject}&body=${mailBody}`;
    setSentNotice('Opening your email client with your message pre-filled.');
    setTimeout(() => setSentNotice(''), 4000);
  };

  const channels = [
    {
      id: 'email',
      label: 'Email',
      value: PORTFOLIO.contact.email,
      icon: 'mail',
      copyValue: PORTFOLIO.contact.email,
      href: `mailto:${PORTFOLIO.contact.email}`
    },
    {
      id: 'phone',
      label: 'Phone / WhatsApp',
      value: PORTFOLIO.contact.phone,
      icon: 'call',
      copyValue: PORTFOLIO.contact.phone,
      href: `tel:${PORTFOLIO.contact.phone.replace(/\s+/g, '')}`
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: PORTFOLIO.contact.linkedinHandle,
      icon: 'work',
      href: PORTFOLIO.contact.linkedin
    },
    {
      id: 'github',
      label: 'GitHub',
      value: PORTFOLIO.contact.githubHandle,
      icon: 'code',
      href: PORTFOLIO.contact.github
    },
    {
      id: 'optskill-li',
      label: 'OptSkill.community (LinkedIn)',
      value: 'company/optskillcommunity',
      icon: 'groups',
      href: PORTFOLIO.contact.optskillLinkedin
    },
    {
      id: 'optskill-ig',
      label: 'OptSkill.community (Instagram)',
      value: '@optskill.community',
      icon: 'photo_camera',
      href: PORTFOLIO.contact.optskillInstagram
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-12"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Get in Touch
        </span>
        <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Contact
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Ready to collaborate on full-stack/ML builds, internships, hackathons, or OptSkill
          community initiatives? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {channels.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface/80 p-4 hover:border-primary/50 transition-colors"
            >
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary shrink-0">
                  <span className="material-symbols-outlined text-[19px]">{c.icon}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-muted-foreground">{c.label}</div>
                  <div className="truncate text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>

              {c.copyValue ? (
                <button
                  type="button"
                  onClick={() => copyText(c.id, c.copyValue)}
                  className="rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:border-primary cursor-pointer shrink-0"
                >
                  {copiedField === c.id ? 'Copied!' : 'Copy'}
                </button>
              ) : (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${c.label}`}
                  className="text-muted-foreground hover:text-foreground shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-6 rounded-2xl border border-border bg-surface/80 p-6 space-y-4 self-start"
        >
          <div className="space-y-1">
            <h2 className="font-display-lg text-lg font-bold text-foreground">
              Send a Quick Note
            </h2>
            <p className="text-xs text-muted-foreground">
              Composes an email directly to {PORTFOLIO.contact.email}.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-foreground">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Rohan Mehta"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-subject" className="text-xs font-medium text-foreground">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Internship / Project Collaboration / OptSkill"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-medium text-foreground">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me what you're building or how we can collaborate..."
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">send</span>
            <span>Open Email Draft</span>
          </button>

          {sentNotice && (
            <p className="text-xs font-medium text-emerald-400 text-center">{sentNotice}</p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
