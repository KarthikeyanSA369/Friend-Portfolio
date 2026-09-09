import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-purple-500/25 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {/* Degree Milestone */}
          <div className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0e0f1a] border-2 border-purple-500 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(147,51,234,0.4)] group-hover:scale-110 transition-transform">
              <GraduationCap className="w-4 h-4" />
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-[#11121d] border border-white/5 hover:border-purple-500/30 transition-all shadow-lg relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-300 bg-purple-950/50 px-2.5 py-1 rounded border border-purple-500/30">
                  <Calendar className="w-3 h-3 text-purple-400" />
                  Expected Graduation: 2028 • Currently 3rd Year
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                  <Award className="w-3 h-3 text-emerald-400" />
                  CGPA: 8.0
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                B.Tech – Artificial Intelligence and Data Science
              </h3>
              <p className="text-sm text-slate-300 font-medium mb-3">
                VSB College of Engineering Technical Campus, Coimbatore
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                Rigorous coursework and project-based laboratory work focusing on foundational mathematics, data structures, machine learning algorithms, deep learning, data visualization, and modern computing tools.
              </p>
            </div>
          </div>

          {/* School Milestone */}
          <div className="relative group">
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0e0f1a] border-2 border-purple-500/50 flex items-center justify-center text-purple-300 shadow-[0_0_8px_rgba(147,51,234,0.2)] group-hover:scale-110 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>

            <div className="p-6 rounded-xl bg-[#11121d] border border-white/5 hover:border-purple-500/30 transition-all shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                  Higher Secondary Education
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/30">
                  Percentage: 70%
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                Higher Secondary Certificate (12th)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Completed secondary senior schooling with a strong academic foundation in Mathematics, Physics, and Computer Science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
