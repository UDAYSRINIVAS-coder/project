export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Project {
  title: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
