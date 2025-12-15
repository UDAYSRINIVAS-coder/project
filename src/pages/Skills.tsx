import { Code2, Database, Wrench, Server } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const icons = [Code2, Server, Database, Wrench];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h1>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg p-8 rounded-xl border border-blue-500/30">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Technical Proficiency</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            With a strong foundation in both frontend and backend technologies, I bring a comprehensive
            approach to software development. My expertise spans across multiple programming languages,
            modern frameworks, and industry-standard tools, enabling me to build robust and scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
}
