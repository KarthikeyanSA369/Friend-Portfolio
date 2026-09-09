import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              id={`cert-card-${index}`}
              className="group relative p-6 rounded-2xl bg-[#11121d] border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  {cert.type}
                </span>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  Issued by {cert.organization}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  ID: {cert.credentialId}
                </span>
                <a
                  id={`cert-link-${index}`}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
