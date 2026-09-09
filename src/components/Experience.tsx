import React from 'react';
import { Briefcase, Calendar, Clock, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div
              key={`${exp.organization}-${index}`}
              id={`experience-item-${index}`}
              className="group p-6 sm:p-8 rounded-2xl bg-[#11121d] border border-white/5 hover:border-purple-500/35 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top diagonal border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 via-purple-400/20 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-purple-300 text-xs font-mono mb-1">
                    <Building2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.organization}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#161828] text-xs font-mono text-slate-300 border border-white/5">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {exp.year}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-purple-950/40 text-xs font-mono text-purple-300 border border-purple-500/30">
                    <Clock className="w-3 h-3 text-purple-400" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                "{exp.description}"
              </p>

              {/* Technologies Applied */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Tools & Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-[#181a2c] text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
