
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MessageSquare, User, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const TARGET_EMAIL = "minhajse2023@gmail.com";

const InputField: React.FC<{ 
  label: string; 
  name: string; 
  type?: string; 
  placeholder: string; 
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}> = ({ label, name, type = 'text', placeholder, icon, value, onChange, error }) => (
  <div className="space-y-2 w-full group">
    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent-blue transition-colors">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-blue transition-colors">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full bg-white/[0.03] border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none transition-all ${
          error 
            ? 'border-accent-red/50 bg-accent-red/5' 
            : 'border-white/10 focus:border-accent-blue/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-blue/20'
        }`}
      />
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(`https://formspree.io/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-red/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-2"
          >
            Connection Hub
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Let's Start a <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-red">Conversation</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ready to bring your AI vision to life? Drop a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Animated Outer Glow Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/30 via-accent-red/30 to-accent-blue/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Subtle Inner Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-20 h-20 bg-gradient-to-br from-accent-blue to-accent-blue/40 text-background-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(8,217,214,0.4)]"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white font-heading">Message Dispatched</h3>
                    <p className="text-gray-400 max-w-sm mx-auto">
                      Your transmission was received. I'll reach out to your provided signal address shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
                  >
                    Send Another Signal
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField 
                      label="Identity" 
                      name="name" 
                      placeholder="Enter your name" 
                      icon={<User size={18} />} 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField 
                      label="Signal Origin" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      icon={<Mail size={18} />} 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent-blue transition-colors">
                      Transmission Payload
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-accent-blue transition-colors">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="What are we building?"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group/btn py-5 bg-gradient-to-r from-accent-blue to-accent-blue/80 text-background-primary font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(8,217,214,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-background-primary border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <>
                        <span className="uppercase tracking-[0.2em] text-sm">Initialize Transmission</span>
                        <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 text-accent-red text-sm justify-center p-4 bg-accent-red/5 border border-accent-red/20 rounded-xl"
                    >
                      <AlertCircle size={18} />
                      <span className="font-medium tracking-wide uppercase text-[10px]">Signal interupted. Please retry.</span>
                    </motion.div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
