import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl">
              👨‍💻
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dexter</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">Project Manager & Web Developer</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex technical challenges
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-slate-600 hover:border-slate-400 px-8 py-3 rounded-lg transition-colors"
          >
            View Projects
          </a>
        </div>
        
        <div className="flex gap-6 justify-center text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:john.doe@example.com" className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
