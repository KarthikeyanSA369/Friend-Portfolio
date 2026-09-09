import React from 'react';
import { BackgroundElements } from './components/BackgroundElements';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090a10] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      {/* Visual background diagonal geometric elements inspired by reference style */}
      <BackgroundElements />

      {/* Sticky Glass-like Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <ResumeSection />
        <Contact />
      </main>

      {/* Minimalist Recruiter-focused Footer */}
      <Footer />
    </div>
  );
}
