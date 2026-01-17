
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-accent-blue selection:text-background-primary">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-red z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
      
      {/* Chat Bot Interface */}
      <ChatBot />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 p-3 glass rounded-full text-accent-blue hover:text-white hover:bg-accent-blue/20 transition-all z-50 shadow-lg shadow-accent-blue/20"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-accent-blue/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-accent-red/5 blur-[120px] rounded-full animate-pulse-slow" />
      </div>
    </div>
  );
};

export default App;
