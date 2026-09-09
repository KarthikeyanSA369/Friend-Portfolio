import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const scrollPosition = window.scrollY + 120;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b12]/85 backdrop-blur-md border-b border-purple-500/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-mono font-bold text-sm text-white shadow-[0_0_12px_rgba(147,51,234,0.35)] group-hover:shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-all">
            J
          </div>
          <span className="font-bold tracking-wider text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors uppercase">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Resume CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-resume-button"
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400 rounded-lg transition-all shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="nav-mobile-toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="lg:hidden bg-[#0a0b12]/95 backdrop-blur-xl border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-1.5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <a
              id="mobile-nav-resume-btn"
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-purple-200 bg-purple-900/50 hover:bg-purple-800/60 border border-purple-500/40 rounded-lg transition-all"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
