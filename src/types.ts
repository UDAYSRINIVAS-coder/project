import { Project } from "./types";

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
export const projects: Project[] = [
  {
    title: "ATM Management System",
    period: "Jan 2025 – Feb 2025",
    description: [
      "•	Developed a console-based ATM Management System using Java that simulates real-world banking operations such as user authentication, account selection, balance inquiry, cash withdrawal, and deposit."
    ]
  },
  {
    title: "Employee Authentication System",
    period: "May 2024 - May 2024",
    description: [
      "Built a Java-based secure authentication system with encryption",
      "Improved efficiency through algorithm optimization"
    ]
  },
  {
    title: "Touchless Water Dispenser",
    period: "Apr 2024 - May 2024",
    description: [
      "Designed a touchless system delivering hot, moderate, and cold water using IoT",
      "Optimized for workplace and hospital hygiene"
    ]
  }
];
