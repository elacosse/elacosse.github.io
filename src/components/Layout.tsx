import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SymbiosisCanvas from './SymbiosisCanvas';

const CONTACT_LINKS = [
  { name: 'Email', href: 'mailto:eric.lacosse@research.fchampalimaud.org', icon: Mail },
  { name: 'Github', href: 'https://github.com/elacosse', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/elacosse/', icon: Linkedin },
  { name: 'Substack', href: 'https://elacosse.substack.com', icon: ExternalLink },
  { name: 'X', href: 'https://x.com/sansplot', icon: Twitter },
  { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=zDSW_voAAAAJ&hl=en', icon: ExternalLink },
  { name: 'Are.na', href: 'https://www.are.na/eric-lacosse/channels', icon: ExternalLink },
];

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

  const navLinks = [
    { name: 'Posts', href: 'https://elacosse.substack.com', external: true },
    { name: 'Projects', href: '/projects', external: false },
    { name: 'About', href: '/', external: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <header className="h-[400px] relative overflow-hidden cursor-crosshair">
        <SymbiosisCanvas />
      </header>

      <div className="max-w-[1200px] mx-auto px-5 pb-10 w-full">
        {/* Header Section */}
        <header className="pt-[10px] pb-5 border-b border-[#282828]">
          <h1 className="text-[48px] font-medium leading-tight">Eric Lacosse</h1>
          <div className="mt-[15px] flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <p className="text-[24px] text-[#a0a0a0]">Cognitive Human-AI Engineering</p>
            <nav className="flex gap-[35px]">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#888] hover:text-white transition-colors text-[18px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition-colors text-[18px] ${
                      location.pathname === link.href ? 'text-white' : 'text-[#888] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
          {/* Left Column */}
          <aside className="space-y-10">
            <section>
              <h2 className="uppercase text-[18px] tracking-wider text-[#888] font-normal mb-5">Reach me</h2>
              <div className="flex flex-col items-start gap-1">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 px-[10px] py-[5px] text-[#a0a0a0] hover:text-[#0a0a0a] hover:bg-white rounded transition-all duration-300"
                    target={link.name !== 'Email' ? "_blank" : undefined}
                    rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
                  >
                    <span className="text-[16px]">{link.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  </a>
                ))}
              </div>
            </section>
          </aside>

          {/* Right Column (Dynamic Content) */}
          <section className="space-y-20">
            {children}
          </section>
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
            className="fixed bottom-[30px] right-[30px] text-[#888] hover:text-white p-2 transition-colors cursor-pointer flex items-center gap-1 z-50"
          >
            <span className="text-[16px]">Top</span>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
