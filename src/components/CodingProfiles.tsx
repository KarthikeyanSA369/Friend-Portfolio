import React from 'react';
import { Code2, Github, Linkedin, ExternalLink, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Online Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Coding & Developer Profiles
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Track my repositories, ongoing coding practice, and professional background across developer networks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode Profile */}
          <a
            id="profile-card-leetcode"
            href={PORTFOLIO_DATA.personal.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#11121d] border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(147,51,234,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30">
                  DSA
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                LeetCode
              </h3>
              <p className="text-sm font-semibold text-purple-200 mt-1">
                80+ Problems Solved
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Algorithmic problem-solving in Python and JavaScript focused on arrays, strings, trees, and dynamic programming.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-purple-200">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Profile */}
          <a
            id="profile-card-github"
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#11121d] border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(147,51,234,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30">
                  Code
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                GitHub
              </h3>
              <p className="text-sm font-semibold text-purple-200 mt-1">
                5 Repositories
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Open-source projects, machine learning implementations, computer vision scripts, and full-stack utilities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-purple-200">
              <span>Visit Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn Profile */}
          <a
            id="profile-card-linkedin"
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#11121d] border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(147,51,234,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30">
                  Network
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                LinkedIn
              </h3>
              <p className="text-sm font-semibold text-purple-200 mt-1">
                Professional Network
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Connect for placement opportunities, tech internships, academic collaborations, and industry networking.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-purple-200">
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
