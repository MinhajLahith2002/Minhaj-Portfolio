
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background-primary px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <div className="text-xl font-bold font-heading tracking-tighter">
            <span className="text-accent-blue">MINHAJ</span>
            <span className="text-white">.DEV</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MNM.MINHAJ. Built for the AI-enabled future.
          </p>
        </div>

        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all rounded-lg"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-4">
          <a href="#" className="hover:text-accent-red transition-colors">Privacy</a>
          <div className="w-1 h-1 bg-white/10 rounded-full" />
          <a href="#" className="hover:text-accent-red transition-colors">Cookies</a>
          <div className="w-1 h-1 bg-white/10 rounded-full" />
          <a href="mailto:minhajse2023@gmail.com" className="hover:text-accent-red transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
