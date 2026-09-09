import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code2, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            I am open to internship opportunities, collaborations, and learning opportunities in AI, Machine Learning, Data Science and software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11121d] border border-white/5 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact Information
              </h3>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0d0e17] border border-white/5">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-purple-200 hover:underline truncate block"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0d0e17] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Phone</span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-purple-200 hover:underline"
                    >
                      +91 {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Quick Connect Profiles */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Social & Code Networks
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    id="contact-link-linkedin"
                    href={PORTFOLIO_DATA.personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#141624] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 transition-all text-slate-300 hover:text-purple-200 cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 mb-1.5 text-purple-400" />
                    <span className="text-[11px] font-medium">LinkedIn</span>
                  </a>

                  <a
                    id="contact-link-github"
                    href={PORTFOLIO_DATA.personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#141624] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 transition-all text-slate-300 hover:text-purple-200 cursor-pointer"
                  >
                    <Github className="w-5 h-5 mb-1.5 text-purple-400" />
                    <span className="text-[11px] font-medium">GitHub</span>
                  </a>

                  <a
                    id="contact-link-leetcode"
                    href={PORTFOLIO_DATA.personal.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#141624] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 transition-all text-slate-300 hover:text-purple-200 cursor-pointer"
                  >
                    <Code2 className="w-5 h-5 mb-1.5 text-purple-400" />
                    <span className="text-[11px] font-medium">LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11121d] border border-white/5 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Recruiters and collaborators can leave a quick query or project proposal below.
              </p>

              {isSubmitted ? (
                <div 
                  id="contact-form-success"
                  className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-400/50 flex items-center justify-center text-purple-200 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Prepared</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-purple-200">{formData.name}</span>! Your message has been validated. In this static client preview, you can also mail directly to{' '}
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="underline text-purple-300">
                      {PORTFOLIO_DATA.personal.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-900/60 rounded-lg border border-purple-500/30 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name or hiring organization"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d15] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d15] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell me about the internship, project, or role you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d15] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Client-validated inquiry form. You can also write directly to jassimameer19@gmail.com.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
