import { Calendar, ExternalLink } from 'lucide-react';
import { projects } from '../types';

export default function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400">Innovative solutions I've built</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{project.period}</span>
              </div>

              <ul className="space-y-3">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Java</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">OOP Concepts</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Collections (HashMap)</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Exception Handling</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Console I/O
                    </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Java</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Security</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Encryption</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">IoT</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Hardware</span>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm">Automation</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            I'm constantly working on new projects and expanding my portfolio. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
