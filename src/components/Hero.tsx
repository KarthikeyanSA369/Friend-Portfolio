import React, { useState, useEffect } from 'react';
import { ArrowDown, FileDown, FolderGit2, Mail, Sparkles, GraduationCap, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = PORTFOLIO_DATA.personal.rolesForTyping;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < fullText.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting back
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative angled geometric backdrop panels specifically centered around Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-full h-[550px] pointer-events-none opacity-40">
        <div 
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.18) 0%, rgba(30, 27, 75, 0.08) 45%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Recruiter-friendly Availability Badge */}
        <div 
          id="hero-status-pill"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.12)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-purple-200 tracking-wide">
            Open for AI & Data Science Internships • Placement Ready
          </span>
        </div>

        {/* Primary Emphasized Name */}
        <div className="mb-2">
          <p className="text-sm sm:text-base font-semibold tracking-widest text-purple-400 uppercase font-mono mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Hi, I'm</span>
          </p>
          <h1 
            id="hero-name-title"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 uppercase"
          >
            <span className="relative inline-block">
              {PORTFOLIO_DATA.personal.name}
              {/* Subtle geometric underline accent */}
              <span 
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              />
            </span>
          </h1>
        </div>

        {/* Dynamic Typing Title Subheading */}
        <div className="h-12 sm:h-14 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300">
            {displayedText}
            <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-purple-400 animate-pulse align-middle" />
          </span>
        </div>

        {/* Tagline */}
        <p 
          id="hero-tagline"
          className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
        >
          "{PORTFOLIO_DATA.personal.tagline}"
        </p>

        {/* Quick Academic Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-10 text-left">
          <div className="p-3 rounded-lg bg-[#12131f]/80 border border-white/5 hover:border-purple-500/30 transition-colors flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Academic Standing</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">3rd Year • B.Tech</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-[#12131f]/80 border border-white/5 hover:border-purple-500/30 transition-colors flex items-center gap-3">
            <div className="w-5 h-5 rounded flex items-center justify-center font-mono font-bold text-xs bg-purple-900/60 text-purple-300 border border-purple-500/40 shrink-0">
              8.0
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">CGPA Score</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">8.0 / 10</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-[#12131f]/80 border border-white/5 hover:border-purple-500/30 transition-colors flex items-center gap-3">
            <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Location</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">{PORTFOLIO_DATA.personal.location}</div>
            </div>
          </div>
        </div>

        {/* Three Primary CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-lg">
          {/* Primary Button */}
          <button
            id="hero-btn-projects"
            onClick={() => scrollTo('projects')}
            className="flex-1 sm:flex-initial min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_28px_rgba(147,51,234,0.55)] cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View My Projects</span>
          </button>

          {/* Secondary Button */}
          <a
            id="hero-btn-resume"
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-purple-200 bg-[#151624] hover:bg-[#1c1e30] border border-purple-500/30 hover:border-purple-400/60 rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </a>

          {/* Third Button */}
          <button
            id="hero-btn-contact"
            onClick={() => scrollTo('contact')}
            className="flex-1 sm:flex-initial min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-500 rounded-lg transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Down Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            id="hero-scroll-indicator"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            className="text-slate-500 hover:text-purple-400 transition-colors p-2 cursor-pointer animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
