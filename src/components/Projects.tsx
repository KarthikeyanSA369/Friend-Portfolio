import React from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  AlertCircle,
  ScanText,
  Bot,
  EyeOff
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

// Visual preview schematics when image URL is a placeholder
const ProjectVisualPlaceholder: React.FC<{ projectId: string; title: string }> = ({ projectId, title }) => {
  if (projectId === 'fake-job-detection') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#131422] to-[#0c0d15] flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-tech-grid opacity-20" />
        <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 shadow-[0_0_15px_rgba(147,51,234,0.25)]">
          <ScanText className="w-6 h-6" />
        </div>
        <span className="font-mono text-xs text-purple-300 font-semibold uppercase tracking-wider">
          ML Job Description Classifier
        </span>
        <span className="text-[11px] text-slate-400 mt-1 font-mono">
          Scam Detection • Authenticity Verification
        </span>
      </div>
    );
  }

  if (projectId === 'ai-chatbot') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#131422] to-[#0c0d15] flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-tech-grid opacity-20" />
        <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 shadow-[0_0_15px_rgba(147,51,234,0.25)]">
          <Bot className="w-6 h-6" />
        </div>
        <span className="font-mono text-xs text-purple-300 font-semibold uppercase tracking-wider">
          LLM Conversational Assistant
        </span>
        <span className="text-[11px] text-slate-400 mt-1 font-mono">
          Job Context Q&A • Prompt Engine
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-48 bg-gradient-to-br from-[#131422] to-[#0c0d15] flex flex-col items-center justify-center p-4 relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-tech-grid opacity-20" />
      <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 shadow-[0_0_15px_rgba(147,51,234,0.25)]">
        <EyeOff className="w-6 h-6" />
      </div>
      <span className="font-mono text-xs text-purple-300 font-semibold uppercase tracking-wider">
        Computer Vision Color Masking
      </span>
      <span className="text-[11px] text-slate-400 mt-1 font-mono">
        OpenCV HSV Segmentation • Real-time Replacement
      </span>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Applied technology solutions built with machine learning models, natural language processing, and computer vision algorithms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project: Project, index: number) => {
            const hasActualImage = 
              project.imageUrl && 
              !project.imageUrl.startsWith('[') && 
              project.imageUrl.trim() !== '';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl bg-[#11121e] border border-white/5 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.18)] hover:-translate-y-1"
              >
                <div>
                  {/* Visual Header / Image Container */}
                  <div className="relative">
                    {hasActualImage ? (
                      <div className="w-full h-48 overflow-hidden border-b border-white/5">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <ProjectVisualPlaceholder projectId={project.id} title={project.title} />
                    )}

                    {/* Featured Domain Badge */}
                    {project.featuredBadge && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/40">
                        {project.featuredBadge}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Problem Solved Highlight */}
                    <div className="p-3 rounded-lg bg-[#0c0d16] border border-white/5 mb-5">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                            Problem Addressed
                          </span>
                          <span className="text-xs text-slate-300 leading-normal block mt-0.5">
                            {project.problem}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#171929] text-slate-300 border border-white/5 group-hover:border-purple-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3 pt-4">
                  {/* GitHub Action */}
                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#151625] hover:bg-[#1e2034] border border-white/10 hover:border-purple-500/40 rounded-lg transition-all cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>GitHub</span>
                  </a>

                  {/* View Project / Live Demo Action */}
                  <a
                    id={`project-live-btn-${project.id}`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-200 bg-purple-950/50 hover:bg-purple-900/70 border border-purple-500/40 hover:border-purple-400 rounded-lg transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
