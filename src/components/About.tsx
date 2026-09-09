import React from 'react';
import { User, Compass, Cpu, Target, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Narrative & Insights (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#11121d]/90 border border-white/5 shadow-xl relative overflow-hidden">
              {/* Subtle top diagonal accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/40 via-purple-400/20 to-transparent" />
              
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-purple-400" />
                <span>Engineering Mindset & Ambition</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {PORTFOLIO_DATA.personal.aboutText}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Pragmatic AI Development</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Focusing on applied ML algorithms and LLM integrations that deliver measurable utility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Continuous Growth</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Regular practice on algorithmic problem-solving and modern data analytics stacks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Interests & Current Learning Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121422]/80 border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-2.5 text-purple-300 mb-2.5">
                  <Compass className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider font-mono">Career Interests</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Artificial Intelligence Engineering, Machine Learning Systems, Data Analytics, and Full-Stack AI Application Development.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121422]/80 border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-2.5 text-purple-300 mb-2.5">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider font-mono">Current Focus</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Deepening expertise in LLM fine-tuning, computer vision pipelines, backend API architectures, and data engineering fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Information Card (5 columns) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#151728] to-[#10111d] p-6 sm:p-7 border border-purple-500/20 shadow-2xl overflow-hidden">
              {/* Corner diagonal geometric accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.8) 0%, transparent 70%)',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
              />

              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Candidate Spec</span>
                  <h3 className="text-xl font-bold text-white tracking-wide">{PORTFOLIO_DATA.personal.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              {/* Modern Info Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0c0d16]/80 border border-white/5">
                  <span className="text-xs text-slate-400 uppercase font-mono">Field</span>
                  <span className="text-sm font-semibold text-purple-200 text-right">
                    Artificial Intelligence & Data Science
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0c0d16]/80 border border-white/5">
                  <span className="text-xs text-slate-400 uppercase font-mono">Academic Year</span>
                  <span className="text-sm font-medium text-slate-200">
                    {PORTFOLIO_DATA.personal.currentYear}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0c0d16]/80 border border-white/5">
                  <span className="text-xs text-slate-400 uppercase font-mono">Expected Graduation</span>
                  <span className="text-sm font-medium text-slate-200">
                    {PORTFOLIO_DATA.personal.expectedGraduation}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0c0d16]/80 border border-white/5">
                  <span className="text-xs text-slate-400 uppercase font-mono">CGPA Score</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-500/40 font-mono font-bold text-xs">
                    {PORTFOLIO_DATA.personal.cgpa} / 10.0
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0c0d16]/80 border border-white/5">
                  <span className="text-xs text-slate-400 uppercase font-mono">Location</span>
                  <span className="text-sm font-medium text-slate-200">
                    {PORTFOLIO_DATA.personal.location}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                    <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider block mb-1">
                      Institution
                    </span>
                    <span className="text-xs text-slate-300 font-medium leading-relaxed block">
                      {PORTFOLIO_DATA.personal.college}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
