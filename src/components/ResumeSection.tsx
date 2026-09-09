import React from 'react';
import { FileDown, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume-cta" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#141627] via-[#10111f] to-[#0c0d16] border border-purple-500/30 shadow-2xl overflow-hidden text-center sm:text-left">
          {/* Background diagonal purple ribbons */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.7) 0%, transparent 65%)',
              clipPath: 'polygon(100% 0, 15% 0, 100% 85%)',
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recruiter Quick Action</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Interested in my profile?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Explore my resume to learn more about my skills, projects, education and experience.
              </p>

              {/* Quick Resume Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>B.Tech AI & Data Science</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Verified Internship</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>8.0 CGPA</span>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="shrink-0">
              <a
                id="resume-cta-download-btn"
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] hover:scale-[1.02] cursor-pointer"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
              <span className="block text-center text-[11px] font-mono text-slate-400 mt-2">
                PDF Format • Updated 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
