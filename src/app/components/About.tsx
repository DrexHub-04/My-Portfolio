import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-slate-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760712491426-ef0e797b8c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBzZXR1cCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-4 text-slate-700">
            <p className="text-lg">
              I am a dedicated IT professional with experience in web development, system development, 
              and IT support. I build practical systems such as inventory management and appointment booking applications using MERN stack, Java, and modern web technologies.
            </p>
            <p className="text-lg">
              I have worked as a project manager and developer in academic projects, developing skills in problem-solving, system design, 
              networking, and database management. I am passionate about creating reliable solutions and improving system performance.
            </p>
            <p className="text-lg">
              I continuously strive to expand my skills in software development, system administration, 
              and emerging technologies while gaining real-world experience in the IT industry.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl mb-3 text-slate-900">What I Bring</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Project Manager and Developer in multiple academic systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Experience in MERN Stack, Java, and Android development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Developed inventory, booking, and quality assurance systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span>Experience in networking, IT support, and system troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
