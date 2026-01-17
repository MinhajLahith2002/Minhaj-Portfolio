
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type?: 'Degree' | 'Certification';
}
