
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { SKILLS, PROJECTS, EXPERIENCE } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Minhaj's assistant. Ask me anything specific about his skills, projects, or background." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Fix: Improved typing for the chat instance
  const chatInstance = useRef<Chat | null>(null);

  // Initialize Gemini Chat
  useEffect(() => {
    if (!chatInstance.current) {
      // Fix: Strictly follow initialization pattern using process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        You are the AI Portfolio Assistant for MNM.MINHAJ.
        
        STRICT OPERATIONAL GUIDELINES:
        1. BE EXTREMELY CONCISE. Never provide a full biography unless the user specifically asks for a "summary" or "who is he".
        2. ANSWER ONLY THE QUESTION ASKED. If asked about skills, only list skills. If asked about a project, only talk about that project.
        3. FORMATTING: Use bold text for key terms. Use bullet points for lists. 
        4. TONE: Professional, efficient, and direct.
        5. REPETITION: Do not repeat the same introductory phrases.
        
        CONTEXT DATA:
        - Primary Skills: ${SKILLS.map(s => s.name).join(', ')}.
        - Specialization: Generative AI, LLM Engineering, Agentic Workflows.
        - Top Projects: ${PROJECTS.map(p => p.title).join(', ')}.
        - Experience/Education: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join('; ')}.
        - Location: Batticaloa, Sri Lanka.
        - Contact: minhajse2023@gmail.com.
      `;

      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction,
          temperature: 0.4, // Lower temperature for more factual, concise answers
        },
      });
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatInstance.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatInstance.current.sendMessage({ message: userMessage });
      // Fix: Access .text as a property, not a method, according to SDK guidelines
      const botText = response.text || "I'm sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Signal interference. Please retry your query." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple formatter to handle bolding and newlines from the AI
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle Bold
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <div key={i} className={line.startsWith('*') || line.startsWith('-') ? 'pl-2 mb-1' : 'mb-2'}>
          {formattedLine}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] glass border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden border-accent-blue/20"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-accent-blue/10 to-accent-red/10 border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Bot size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Minhaj Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Ready to Assist</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-black/40"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-accent-blue text-background-primary font-bold rounded-tr-none shadow-[0_5px_15px_rgba(8,217,214,0.2)]' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.role === 'bot' ? formatText(msg.text) : msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1.5">
                    <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                    <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                    <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-black/60 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for skills, experience, or contact..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/40 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent-blue hover:text-white disabled:opacity-30 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 relative group overflow-hidden ${
          isOpen ? 'bg-accent-red' : 'bg-accent-blue'
        }`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 text-background-primary">
          {isOpen ? <X size={24} /> : <Sparkles size={24} />}
        </div>
        
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border border-accent-blue animate-ping opacity-75 scale-150" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
