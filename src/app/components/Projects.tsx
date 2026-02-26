import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Economic Enterprises Unit E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1762341121032-510ad9df0ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNoJTIwZGV2aWNlc3xlbnwxfHx8fDE3NzE0ODUxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "DevOps Automation Suite",
    description: "Automated CI/CD pipeline with container orchestration, monitoring, and deployment automation for microservices.",
    image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkZXZlbG9wZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzcxNDg1MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Enterprise analytics platform with real-time data visualization, custom reporting, and predictive insights.",
    image: "https://images.unsplash.com/photo-1760712491426-ef0e797b8c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBzZXR1cCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Python", "React", "MongoDB", "WebSocket", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">Featured Projects</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects that showcase my technical abilities
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
