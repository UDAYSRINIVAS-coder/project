import { Education, Project, Certification, WorkExperience, Skill } from './types';

export const profileData = {
  name: "Vidupulapati Uday Srinivas",
  title: "Full Stack Developer",
  email: "udaysrinivas1011@gmail.com",
  phone: "8309174345",
  location: "India",
  linkedin: "https://linkedin.com/in/udaysrinivas",
  github: "https://github.com/udaysrinivas",
  summary: "Detail-oriented Full Stack Developer with hands-on experience in web development, specializing in creating efficient, user-friendly applications. Proficient in modern front-end and back-end technologies and committed to delivering innovative solutions to enhance user experience."
};

export const education: Education[] = [
  {
    institution: "Narayana College of Engineering, Nellore",
    degree: "Bachelor of Technology in ECE",
    period: "2021 - 2025",
    score: "75%"
  },
  {
    institution: "Narayana Jr College, Nellore",
    degree: "BIEAP, MPC",
    period: "2019 - 2021",
    score: "88%"
  },
  {
    institution: "Bhashyam High School, Nellore",
    degree: "BSEAP, SSC",
    period: "2018 - 2019",
    score: "95%"
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Frontend Technologies",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Backend Technologies",
    items: ["Express.js", "REST APIs", "Node.js", "Spring Boot"]
  },
  {
    category: "Development Tools",
    items: ["Git", "VS Code", "IntelliJ", "Eclipse", "NoSQL", "AWS"]
  }
];

export const projects: Project[] = [
  {
    title: "Personal Safety Device",
    period: "Jan 2025 – Feb 2025",
    description: [
      "Developed a compact safety system embedded in an ID card using NodeMCU and an inbuilt GPS module",
      "Integrated a push-button alert feature that sends real-time danger notifications and live location data to predefined emergency contacts",
      "Enabled remote monitoring and location tracking through a mobile controlled interface"
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

export const workExperience: WorkExperience[] = [
  {
    role: "Intern",
    company: "Swecha AP",
    location: "Remote, India",
    period: "May 2023 - Jun 2023",
    responsibilities: [
      "Developed interactive web pages using HTML, CSS, and JavaScript",
      "Implemented backend logic for seamless database connectivity"
    ]
  },
  {
    role: "Intern",
    company: "ALTAIR",
    location: "Remote, India",
    period: "May 2024 – Jun 2024",
    responsibilities: [
      "Applied Python to process datasets and build predictive models",
      "Generated actionable insights through machine learning techniques"
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "Python Programming",
    issuer: "CAT Computer Point"
  },
  {
    title: "Java Programming",
    issuer: "CAT Computer Point"
  },
  {
    title: "C Programming",
    issuer: "CAT Computer Point"
  },
  {
    title: "TCS National Qualifier Test (NQT)",
    issuer: "TCS (76.86%)"
  },
  {
    title: "CyberSecurity Basics (Cybfun.1.0)",
    issuer: "IBM (edX)"
  },
  {
    title: "Python Micro Internship",
    issuer: "Skill Bridge"
  },
  {
    title: "Digital Marketing Workshop",
    issuer: "Skill Bridge"
  },
  {
    title: "ServiceNow Micro-Certification",
    issuer: "ServiceNow"
  }
];

export const accomplishments = [
  {
    title: "Professional Development",
    description: "Completed 'A Day in the Life of a Software Employee' at Nexzera Staffing Technology Solutions"
  },
  {
    title: "TCS National Qualifier Test (NQT)",
    description: "Achieved a certification with a score of 76.86%, demonstrating proficiency in numerical, reasoning, and verbal abilities"
  },
  {
    title: "Technical Achievements",
    description: "Showcased projects at a Technical Expo and secured top rank in a Technical Quiz"
  }
];
