import React from 'react';
import { Trophy, Code2, ExternalLink, CheckCircle, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Achievement Card with Coding Visual */}
        <div className="max-w-3xl">
          {PORTFOLIO_DATA.achievements.map((item, index) => (
            <div
              key={index}
              id={`achievement-card-${index}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121322] to-[#10111b] border border-purple-500/25 shadow-xl overflow-hidden"
            >
              {/* Background ambient polygon */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-15 pointer-events-none"
                style={{
                  background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Visual Metric Counter */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center p-4 rounded-xl bg-[#0b0c15] border border-white/5">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1">
                    Problem Solving
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
                    {item.metric}
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">
                    Problems Solved
                  </span>
                </div>

                {/* Details & Action */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description} Demonstrating continuous discipline in core algorithmic thinking, data structures implementation, and computational problem solving.
                  </p>

                  {/* Problem Solving Mini Terminal Visual */}
                  <div className="mt-3 p-3 rounded-lg bg-[#0a0b12] border border-white/5 font-mono text-xs text-slate-400 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-slate-300">DSA Track</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Consistent Practice</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      id="achievement-leetcode-link"
                      href={item.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors cursor-pointer"
                    >
                      <span>View LeetCode Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
