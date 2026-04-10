import { ExternalLink, Github, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useMemo } from "react";

const projects = [
  {
    title: "BloodLink",
    description: "A social impact platform designed to connect blood donors with those in urgent need, streamlining the life-saving process through real-time coordination.",
    tags: ["React", "Firebase", "Real-time", "Social Impact"],
    image: "https://as2.ftcdn.net/jpg/02/53/00/67/1000_F_253006757_N7jFlXeuIq6QQzsVvm3p1zFEE5A0bguo.webp",
    link: "https://github.com/mithradevtv-droid/bloodlink",
    github: "https://github.com/mithradevtv-droid/bloodlink",
  },
  {
    title: "AI Shopping Agent",
    description: "An intelligent autonomous agent that assists users in finding the best products, comparing prices, and making informed purchasing decisions using LLMs.",
    tags: ["Gemini API", "Node.js", "AI Agents", "E-commerce"],
    image: "https://imgs.search.brave.com/7_79qN9OHXYF-pdjoTh5RCEX6Sv7bUB_PvOwUftcS8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzE0LzQ3Lzc0/LzM2MF9GXzEyMTQ0/Nzc0NThfQnFJeFRT/eGNWTjlReFFvZzdy/dVR0THZoZk8zeHZ6/REEuanBn",
    link: "https://github.com/mithradevtv-droid/ai-shopping-agent",
    github: "https://github.com/mithradevtv-droid/ai-shopping-agent",
  },
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-primary" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-glow">Project_Manifest</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase">
          System <span className="text-muted-foreground">Output</span>
        </h2>
        
        <div className="flex flex-wrap gap-4 mt-12">
          {Array.from(new Set(projects.flatMap(p => p.tags))).map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTag === tag 
                  ? "bg-primary text-black border-primary shadow-[4px_4px_0px_rgba(0,255,65,0.3)]" 
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="bg-background p-8 md:p-12 group relative overflow-hidden hover:bg-primary/5 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[40px] font-black text-primary/20 leading-none">0{projects.indexOf(project) + 1}</span>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-primary/60">
                    #{tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex items-center gap-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-glow transition-all"
                >
                  Launch_App
                  <ExternalLink size={14} />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-all"
                >
                  Source_Code
                  <Github size={14} />
                </a>
              </div>
            </div>

            <div className="mt-12 relative aspect-video overflow-hidden border border-border group-hover:border-primary/30 transition-colors">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
