import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative z-10 border-t border-white/5 bg-[#08090e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-mono font-bold text-xs text-white">
              J
            </div>
            <span className="font-extrabold text-base tracking-wider text-white uppercase">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {PORTFOLIO_DATA.personal.heroSubtitle}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            id="footer-link-github"
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-[#12131f] border border-white/5 hover:border-purple-500/40 flex items-center justify-center text-slate-400 hover:text-purple-300 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="footer-link-linkedin"
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg bg-[#12131f] border border-white/5 hover:border-purple-500/40 flex items-center justify-center text-slate-400 hover:text-purple-300 transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            id="footer-link-leetcode"
            href={PORTFOLIO_DATA.personal.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-9 h-9 rounded-lg bg-[#12131f] border border-white/5 hover:border-purple-500/40 flex items-center justify-center text-slate-400 hover:text-purple-300 transition-all cursor-pointer"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <a
            id="footer-link-email"
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            aria-label="Email Contact"
            className="w-9 h-9 rounded-lg bg-[#12131f] border border-white/5 hover:border-purple-500/40 flex items-center justify-center text-slate-400 hover:text-purple-300 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>© 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-[#12131f] hover:bg-purple-900/30 text-slate-400 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
