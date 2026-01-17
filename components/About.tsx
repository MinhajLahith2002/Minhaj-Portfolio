
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar, Brain, GraduationCap, Award } from 'lucide-react';

const ExperienceItem: React.FC<{ item: typeof EXPERIENCE[0]; isLast: boolean }> = ({ item, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="relative pl-8 md:pl-12"
  >
    {/* Connector Line */}
    {!isLast && (
      <div className="absolute left-[11px] md:left-[15px] top-8 bottom-[-32px] w-[2px] bg-gradient-to-b from-accent-blue to-transparent" />
    )}
    
    {/* Dot */}
    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-background-primary border-2 flex items-center justify-center shadow-lg transition-shadow ${
      item.type === 'Degree' ? 'border-accent-blue shadow-accent-blue/20' : 'border-accent-red shadow-accent-red/20'
    }`}>
      <div className={`w-2 h-2 rounded-full ${item.type === 'Degree' ? 'bg-accent-blue' : 'bg-accent-red'}`} />
    </div>

    <div className="glass p-6 rounded-2xl border-white/5 space-y-3 hover:border-accent-blue/30 transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {item.type === 'Degree' ? (
              <GraduationCap size={16} className="text-accent-blue" />
            ) : (
              <Award size={16} className="text-accent-red" />
            )}
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${item.type === 'Degree' ? 'text-accent-blue' : 'text-accent-red'}`}>
              {item.type}
            </span>
          </div>
          <h4 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
            {item.role}
          </h4>
        </div>
        <span className="text-xs font-bold text-gray-400 flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider h-fit">
          <Calendar size={12} />
          {item.period}
        </span>
      </div>
      <p className="text-accent-blue text-sm font-medium">{item.company}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {item.technologies.map(tech => (
          <span key={tech} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            #{tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent-blue text-sm font-bold tracking-[0.3em] uppercase"
            >
              Background
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-white"
            >
              The AI <span className="text-accent-red">Synthesis</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 leading-relaxed text-lg"
            >
              I am an AI-focused Full-Stack Developer with a deep passion for Generative AI and agentic systems. I specialize in bridging the gap between cutting-edge LLM capabilities and production-grade web applications.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 leading-relaxed"
            >
              Skilled in prompt engineering, autonomous agent workflows, and building integrated AI features like recommendation engines and content automation. I thrive on collaborating across teams to deliver innovative, real-world AI solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Location', value: 'Batticaloa, SL', icon: <MapPin size={18} /> },
              { label: 'Specialization', value: 'Software Engineering', icon: <Briefcase size={18} /> },
              { label: 'Education', value: 'BSc (Hons) IT', icon: <Calendar size={18} /> },
              { label: 'Core Expertise', value: 'GenAI & LLMs', icon: <Brain size={18} /> },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-5 rounded-2xl border-white/5 space-y-2 hover:border-accent-blue/30 transition-all"
              >
                <div className="text-accent-blue">{stat.icon}</div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-white font-medium">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-12 pt-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4"
          >
            Milestones & Honors
            <div className="flex-1 h-[1px] bg-white/10" />
          </motion.h3>
          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <ExperienceItem 
                key={item.id} 
                item={item} 
                isLast={i === EXPERIENCE.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
