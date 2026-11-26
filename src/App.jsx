import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Hackathons from './pages/Hackathons';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <div className="pointer-events-none fixed inset-0 bg-obsidian-grid opacity-55" />
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 h-96 w-[44rem] rounded-full bg-primary/10 blur-[120px]" />

      <ScrollToTop />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
