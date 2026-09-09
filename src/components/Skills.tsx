import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Globe, 
  Wrench, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Globe: Globe,
  Wrench: Wrench,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Practical proficiencies across programming, machine learning, data engineering tools, and modern web frameworks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsCategories.map((category: SkillCategory, index: number) => {
            const IconComponent = iconMap[category.iconName] || Sparkles;
            return (
              <div
                key={category.title}
                id={`skill-category-${index}`}
                className="group relative rounded-xl bg-[#111320] border border-white/5 hover:border-purple-500/35 transition-all duration-300 p-6 shadow-lg hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] flex flex-col justify-between"
              >
                {/* Subtle top diagonal shimmer on card */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.6), transparent 70%)',
                    }}
                  />
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-900/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-[#161828] text-slate-200 border border-white/5 hover:border-purple-500/40 hover:bg-purple-950/40 hover:text-purple-200 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Category {index + 1} of {PORTFOLIO_DATA.skillsCategories.length}</span>
                  <span className="text-purple-400/80">Active Stack</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
