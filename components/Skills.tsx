
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const SkillBar: React.FC<{ name: string; level: number; index: number }> = ({ name, level, index }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <span className="text-white font-medium text-sm md:text-base">{name}</span>
      <span className="text-gray-400 text-xs">{level}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        className={`h-full ${index % 2 === 0 ? 'bg-accent-blue' : 'bg-accent-red'} shadow-[0_0_10px_rgba(8,217,214,0.3)]`}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent-blue text-sm font-bold tracking-[0.3em] uppercase mb-4"
            >
              Intelligence & Core Stack
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-white"
            >
              Engineering with <span className="text-accent-red">AI</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-sm"
          >
            Specialized in deploying intelligent systems that leverage LLMs, vector databases, and modern web frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Progress Bars Column */}
          <div className="space-y-8">
            {SKILLS.slice(0, 4).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
          <div className="space-y-8">
            {SKILLS.slice(4, 8).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i + 4} />
            ))}
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-20">
          {SKILLS.map((skill, i) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group glass p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center gap-3 transition-all hover:border-accent-blue/50 hover:shadow-[0_0_20px_rgba(8,217,214,0.15)]"
              >
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-accent-blue/10 text-gray-400 group-hover:text-accent-blue transition-colors`}>
                  <IconComponent size={24} />
                </div>
                <span className="text-xs font-bold text-center text-gray-400 group-hover:text-white uppercase tracking-wider">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
