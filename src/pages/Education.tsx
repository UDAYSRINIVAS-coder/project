import { GraduationCap } from 'lucide-react';
import { education } from '../data';

export default function Education() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h1>
          <p className="text-gray-400">My academic journey and qualifications</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-blue-400" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{edu.institution}</h3>
                      <p className="text-lg text-blue-400">{edu.degree}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-slate-700/50 text-gray-300 px-4 py-2 rounded-lg">
                      Score: <span className="font-semibold text-white">{edu.score}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">Additional Training</h2>
          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Java Full Stack Developer
            </h3>
            <p className="text-gray-300">Destination Codegnan, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
}
