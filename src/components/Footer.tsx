import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profileData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Uday Srinivas</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer specializing in creating efficient, user-friendly applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Home
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                {profileData.email}
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Phone size={16} className="mr-2" />
                {profileData.phone}
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vidupulapati Uday Srinivas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
