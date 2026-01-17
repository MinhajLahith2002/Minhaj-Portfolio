
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Next.js', 'AI', 'MERN'];

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' || project.technologies.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section id="projects" className="py-24 px-6 relative bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent-red text-sm font-bold tracking-[0.3em] uppercase"
          >
            Portfolio
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Selected <span className="text-accent-blue">Work</span>
          </motion.h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-accent-blue text-background-primary shadow-[0_0_15px_rgba(8,217,214,0.4)]' 
                    : 'glass text-gray-400 hover:text-white border-white/5 hover:border-accent-blue/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass rounded-3xl overflow-hidden border-white/5 hover:border-accent-blue/30 transition-all cursor-pointer"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 via-background-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-accent-blue/20 text-accent-blue px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold font-heading text-white group-hover:text-accent-blue transition-colors">{project.title}</h4>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl} 
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-accent-blue text-xs font-bold uppercase tracking-widest hover:text-accent-red transition-colors">
                    <Layers size={14} />
                    View Live Project
                  </div>
                </div>

                {/* Gradient Border Animation on Hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-blue via-accent-red to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-[24px] pointer-events-none -z-10 blur-[1px]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
