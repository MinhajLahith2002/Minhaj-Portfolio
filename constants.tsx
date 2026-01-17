
import React from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Layout, 
  Server,
  Cloud,
  Layers,
  BrainCircuit,
  Cpu,
  Workflow
} from 'lucide-react';
import { Project, Skill, Experience } from './types';

/** 
 * ASSET LINKS
 * To use your own files, place them in the public folder and name them:
 * - Your photo: profile.jpg (in public folder)
 * - Your CV: MNM.MINHAJ.pdf (in public folder)
 */
export const USER_IMAGE = "/profile.jpeg"; 
// Fix: Changed to absolute path from public folder for correct download behavior
export const CV_URL: string = "/MNM.MINHAJ.pdf";

// Fiverr Icon using the provided SVG path
const FiverrIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"></path>
  </svg>
);

// Upwork Icon using the provided SVG path
const UpworkIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"></path>
  </svg>
);

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/MinhajLahith2002', icon: <Github size={20} /> },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/mohamedminhaj2024', icon: <Linkedin size={20} /> },
  { name: 'Fiverr', url: 'https://www.fiverr.com/sellers/mohamedminhaj24', icon: <FiverrIcon size={20} /> },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01f0f89c4c0a25acc3', icon: <UpworkIcon size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Trip Planner",
    description: "AI-powered travel itinerary generator with 70% time reduction in planning.",
    longDescription: "Personalized trip planning using OpenAI GPT-4. Features real-time streaming responses and Google Maps integration.",
    technologies: ["Next.js 14", "OpenAI GPT-4", "Google Maps API", "Vercel"],
    image: "./Ai Trip Planner.png",
    liveUrl: "https://ai-trip-planner-web-app-pi.vercel.app/",
    githubUrl: "https://github.com/MinhajLahith2002/ai-trip-planner-web-app",
    features: ["Streaming API", "Interactive Itinerary", "Cost Estimation"]
  },
  {
    id: 2,
    title: "Quickblog",
    description: "A modern, high-performance blogging platform with integrated AI features.",
    longDescription: "Features AI-assisted content generation, multi-category support, and a responsive minimalist design.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "./Quick Blog.png",
    liveUrl: "https://quick-blog-ruby.vercel.app/",
    githubUrl: "https://github.com/MinhajLahith2002/QuickBlog",
    features: ["AI Writing Assistant", "SEO Optimized", "Markdown Support"]
  },
  {
    id: 3,
    title: "QuickShow",
    description: "Full-stack theatre booking platform with event-driven workflows.",
    longDescription: "Includes movie discovery via IMDb API, Clerk authentication, and secure Stripe payments.",
    technologies: ["MERN Stack", "Stripe", "Clerk", "Inngest"],
    image: "./Quick Show.png",
    liveUrl: "https://quickshow-hazel-seven.vercel.app/",
    githubUrl: "https://github.com/MinhajLahith2002/QuickShow",
    features: ["Seat Selection", "Payment Integration", "Email Notifications"]
  },
  {
    id: 4,
    title: "BeautySalon",
    description: "Premium service landing page and booking system for modern salons.",
    longDescription: "A sophisticated dark-themed interface for service exploration and appointment booking.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "./Beauty Saloon.png",
    liveUrl: "#",
    githubUrl: "https://github.com/MinhajLahith2002/beauty-Saloon",
    features: ["Service Menu", "Online Booking", "Responsive Gallery"]
  },
  {
    id: 5,
    title: "Tomato",
    description: "Comprehensive food ordering application with real-time menu browsing.",
    longDescription: "A vibrant food delivery platform featuring categorized menus and an intuitive checkout flow.",
    technologies: ["React", "Context API", "CSS Modules"],
    image: "./Restaurant.png",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Cart Management", "Category Filtering", "Mobile-first Design"]
  },
  {
    id: 6,
    title: "ReTech Exchange",
    description: "Campus marketplace for secure student-to-student transactions.",
    longDescription: "Real-time chat enabled via Socket.io with optimized database queries for performance.",
    technologies: ["MERN", "Socket.io", "JWT", "Cloudinary"],
    image: "./ReTechExchange.png",
    liveUrl: "#",
    githubUrl: "https://github.com/MinhajLahith2002/ReTechX",
    features: ["Real-time Chat", "Secure Auth", "Image Uploads"]
  }
];

export const SKILLS: Skill[] = [
  { name: "GenAI & LLMs", level: 95, icon: "BrainCircuit", category: "Frontend" },
  { name: "Next.js / React", level: 92, icon: "Layout", category: "Frontend" },
  { name: "Agentic AI", level: 88, icon: "Workflow", category: "Backend" },
  { name: "Python (NumPy/Pandas)", level: 85, icon: "Cpu", category: "Backend" },
  { name: "Node.js / Express", level: 88, icon: "Server", category: "Backend" },
  { name: "MongoDB / SQL", level: 82, icon: "Database", category: "Backend" },
  { name: "Vercel / Clerk", level: 90, icon: "Cloud", category: "Tools" },
  { name: "Tailwind CSS", level: 92, icon: "Layers", category: "Design" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "AI/ML Certification (Stage 2)",
    company: "SLIIT",
    period: "Jan 2026 (Expected)",
    type: "Certification",
    description: "Deep dive into supervised learning algorithms, predictive modeling, and agentic workflows. Focus on TensorFlow and advanced prompt engineering.",
    technologies: ["Python", "TensorFlow", "LangChain"]
  },
  {
    id: 2,
    role: "AI Engineering 101",
    company: "Finxter Academy",
    period: "Apr 2025",
    type: "Certification",
    description: "Professional certification focused on building autonomous AI agents and financial sentiment analysis systems.",
    technologies: ["NLP", "AI Agents", "Python"]
  },
  {
    id: 3,
    role: "AI/ML Certification (Stage 1)",
    company: "SLIIT",
    period: "2024",
    type: "Certification",
    description: "Foundation of Machine Learning, data preprocessing, and exploratory data analysis using Python and Scikit-learn.",
    technologies: ["Python", "Scikit-Learn", "Pandas"]
  },
  {
    id: 4,
    role: "BSc (Hons) Information Technology",
    company: "SLIIT",
    period: "2023 - 2025",
    type: "Degree",
    description: "Academic degree specializing in Software Engineering. Intensive study of modern architecture, database management, and cloud systems.",
    technologies: ["Java", "PHP", "Cloud Computing", "DSA"]
  }
];
