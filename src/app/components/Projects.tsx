import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Economic Enterprises Unit Reservation System and Shopping Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard for the BukSU Economic Enterpises Unit.",
    image: "/My-Portfolio/images/project1.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/DrexHub-04/20241_T154_EEU-s-Reservation-System-and-Shopping-Platform-IPT2-"
  },
  {
    title: "Project Management",
    description: "A centralized project management system designed to streamline task planning, team collaboration, and workflow tracking. Utilizes modern productivity tools to improve efficiency, monitor progress, and manage project timelines effectively.",
    image: "public/images/project3.png",
    technologies: ["Trello", "Monday", "ClickUp", "NotebookLM", "Google Workspace", "Microsoft Office" ],
    liveUrl: "https://trello.com/b/ThDOW340/coffee-bean-capstone-3-qa-project-management",
    githubUrl: "https://github.com"
  },
  {
    title: "City Engineer's Office Inventory Management System (Ongoing)",
    description: "A web-based inventory management system developed for the City Engineer’s Office to track equipment, monitor stock levels, manage records, and streamline inventory operations through a centralized digital platform.",
    image: "public/images/project2.png",
    technologies: ["Typescript", "React", "MongoDB", "Express", "Node.js"],
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
