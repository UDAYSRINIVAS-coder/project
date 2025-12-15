import { Award, Trophy } from 'lucide-react';
import { certifications, accomplishments } from '../data';

export default function Certifications() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h1>
          <p className="text-gray-400">Professional credentials and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-[1.05] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Accomplishments</h2>
          <div className="space-y-6">
            {accomplishments.map((accomplishment, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{accomplishment.title}</h3>
                    <p className="text-gray-300">{accomplishment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm committed to staying updated with the latest technologies and industry best practices.
            These certifications represent my dedication to professional growth and technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
