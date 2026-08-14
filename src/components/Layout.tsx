import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SymbiosisCanvas from './SymbiosisCanvas';
import { SectionLabel } from './SectionHeading';
import { CONTACT_LINKS, NAV_LINKS, SITE } from '../content/site';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showToTop, setShowToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <header className="h-100 relative overflow-hidden cursor-crosshair">
        <SymbiosisCanvas />
      </header>

      <div className="max-w-300 mx-auto px-5 pb-10 w-full">
        {/* Header Section */}
        <header className="pt-2.5 pb-5 border-b border-rule">
          <h1 className="text-display font-medium leading-tight">{SITE.name}</h1>
          <div className="mt-3.75 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <p className="text-lead text-dim">{SITE.tagline}</p>
            <nav className="flex gap-8.75">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-faint hover:text-white transition-colors text-label"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition-colors text-label ${
                      location.pathname === link.href ? 'text-white' : 'text-faint hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
          {/* Left Column */}
          <aside className="space-y-10">
            <section>
              <SectionLabel>Reach me</SectionLabel>
              <div className="flex flex-col items-start gap-1">
                {CONTACT_LINKS.map((link) => {
                  const isExternal = !link.href.startsWith('mailto:');
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center gap-2 px-2.5 py-1.25 text-dim hover:text-canvas hover:bg-white rounded transition-all duration-300"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-meta">{link.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                    </a>
                  );
                })}
              </div>
            </section>
          </aside>

          {/* Right Column (Dynamic Content) */}
          <section className="space-y-20">{children}</section>
        </main>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-7.5 right-7.5 text-faint hover:text-white p-2 transition-colors cursor-pointer flex items-center gap-1 z-50"
          >
            <span className="text-meta">Top</span>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
