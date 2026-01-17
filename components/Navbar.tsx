
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.button 
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-heading tracking-tighter group flex items-center gap-2"
        >
          <span className="text-accent-blue group-hover:text-accent-red transition-colors duration-500">&lt;</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-accent-blue group-hover:to-accent-red transition-all duration-500">
            MINHAJ.DEV
          </span>
          <span className="text-accent-red group-hover:text-accent-blue transition-colors duration-500">/&gt;</span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-8 border-l border-white/10">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all hover:scale-110"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-gray-300 hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-6 pt-6 border-t border-white/10 flex-wrap">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
