import { Code, Database, Cloud, Server, Layout, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Java", "Express", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    skills: [ "MongoDB", "MySQL", "Firebase", "SQL"]
  },
  {
    title: "Project Management",
    icon: Cloud,
    skills: ["Trello", "ClickUp", "Monday", "NotebookLM", "Agile Methodologies", "Microsoft Office"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C"]
  },
  {
    title: "Security & Tools",
    icon: Shield,
    skills: ["Git", "Linux", "Security Best Practices"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">Skills & Expertise</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white border border-slate-300 rounded-full text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
