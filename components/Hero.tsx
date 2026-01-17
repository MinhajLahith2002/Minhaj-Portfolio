import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Download } from 'lucide-react';
import Typewriter from './ui/Typewriter';
import { USER_IMAGE, CV_URL } from '../constants';

const Hero: React.FC = () => {
  const handleViewWork = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (!CV_URL || CV_URL === "#") {
      alert("Please ensure your CV file is in the public folder.");
      return;
    }
    
    try {
      // Fetch the PDF file
      const response = await fetch(CV_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch CV: ${response.statusText}`);
      }
      
      // Get the blob data
      const blob = await response.blob();
      
      // Check if blob has content
      if (blob.size === 0) {
        alert("CV file is empty. Please check the file in the public folder.");
        return;
      }
      
      // Create a temporary URL for the blob
      const downloadUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'MNM_MINHAJ_CV.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Error downloading CV. Please try again.');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={USER_IMAGE} 
            alt="Background Profile"
            onError={(e) => {
              // Fallback if local image not found
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
            }}
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] grayscale mix-blend-luminosity"
          />
        </div>
        
        {/* Pulsating Blue Shadow (Glow) behind text area */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-blue/30 blur-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />

        {/* Static Ambient Glows */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-accent-blue/10 blur-[150px] -translate-x-1/3 rounded-full" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-red/10 blur-[150px] translate-x-1/3 rounded-full" />
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent z-10 opacity-30"
        />

        {/* Dark Primary Overlay */}
        <div className="absolute inset-0 bg-background-primary/80" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-accent-blue/30 text-accent-blue text-sm font-medium shadow-[0_0_15px_rgba(8,217,214,0.2)]"
          >
            <Terminal size={14} />
            <span>AI-focused Full-Stack Architect</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-gray-400"
            >
              Hi there, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight leading-none"
            >
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">MNM.</span>{' '}
              <span className="text-accent-blue drop-shadow-[0_0_20px_rgba(8,217,214,0.4)]">MINHAJ</span>
            </motion.h1>
            
            <div className="h-12 md:h-16 flex items-center">
              <Typewriter 
                phrases={[
                  "Generative AI Specialist",
                  "LLM Engineer",
                  "Next.js Developer",
                  "Agentic AI Architect"
                ]}
                className="text-2xl md:text-4xl font-heading text-accent-red drop-shadow-[0_0_15px_rgba(255,46,99,0.3)]"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-lg leading-relaxed"
          >
            I architect digital systems at the intersection of performance and aesthetics, specializing in Generative AI and autonomous agent workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 relative z-20"
          >
            <button 
              onClick={handleViewWork}
              className="group relative px-8 py-4 bg-accent-blue text-background-primary font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(8,217,214,0.5)] hover:shadow-[0_0_35px_rgba(8,217,214,0.7)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#"
              onClick={handleDownloadCV}
              className="group px-8 py-4 glass border-white/10 text-white font-bold rounded-lg hover:border-accent-red/50 hover:bg-accent-red/10 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* --- Portrait Container with Pulsing Blue Shadow --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Pulsating Aura Behind Image */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
                filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-4 bg-accent-blue rounded-full -z-10"
            />

            {/* Geometric Orbit Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-accent-blue/20 rounded-[3rem]" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border-[1px] border-accent-red/20 rounded-[3rem]" 
            />
            
            {/* The Square Portrait Frame */}
            <div className="absolute inset-6 overflow-hidden rounded-[2.5rem] glass p-2 shadow-2xl border-white/10 z-10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                <img 
                  src={USER_IMAGE} 
                  alt="MNM.MINHAJ Portrait"
                  onError={(e) => {
                    // Fallback
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
                
                {/* Internal Glow Interaction */}
                <div className="absolute inset-0 bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>

            {/* Pulsing Light Accents */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent-blue blur-3xl rounded-full opacity-40 animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent-red blur-3xl rounded-full opacity-30 animate-pulse" />
          </div>
        </motion.div>
      </div>
      
      {/* Floating Particles System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-accent-blue' : 'bg-accent-red'} opacity-20`}
            animate={{
              y: [0, -1000],
              x: [0, (i % 2 === 0 ? 1 : -1) * 60],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 7 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;