import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import { profileData } from '../data';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {profileData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 mb-8 animate-slide-up animation-delay-200">
            {profileData.title}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-400">
            {profileData.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-600">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 animate-fade-in">
            <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <Code className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full Stack Development</h3>
            <p className="text-gray-400">
              Expertise in building modern web applications using React, Node.js, and Spring Boot
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 animate-fade-in animation-delay-200">
            <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <Database className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Database Management</h3>
            <p className="text-gray-400">
              Proficient in SQL, NoSQL databases with strong data modeling and optimization skills
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 animate-fade-in animation-delay-400">
            <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <Globe className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
            <p className="text-gray-400">
              Experience with AWS cloud services and version control using Git
            </p>
          </div>
        </div>

        <div className="mt-20 bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50">
          <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Intern - Swecha AP</h3>
                  <p className="text-gray-400">Remote, India</p>
                </div>
                <span className="text-gray-500 text-sm">May 2023 - Jun 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Developed interactive web pages using HTML, CSS, and JavaScript</li>
                <li>Implemented backend logic for seamless database connectivity</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Intern - ALTAIR</h3>
                  <p className="text-gray-400">Remote, India</p>
                </div>
                <span className="text-gray-500 text-sm">May 2024 - Jun 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Applied Python to process datasets and build predictive models</li>
                <li>Generated actionable insights through machine learning techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
