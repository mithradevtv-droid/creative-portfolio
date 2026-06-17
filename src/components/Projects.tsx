import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Users, Star, GitBranch } from "lucide-react";
import { useState, useMemo } from "react";

const projects = [
  {
    id: "bloodlink",
    title: "BloodLink",
    tagline: "Saving Lives Through Technology",
    description:
      "A full-stack social impact platform connecting blood donors with patients in urgent need. Features real-time donor matching, location-based filtering, and instant notifications — reducing critical search time from hours to minutes.",
    tags: ["React", "Firebase", "Node.js", "Social Impact"],
    metrics: [
      { icon: Users, label: "Target Users", value: "500+" },
      { icon: Star, label: "Impact", value: "High" },
      { icon: GitBranch, label: "Stack", value: "MERN" },
    ],
    techStack: ["React", "Firebase", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/mithradevtv-droid",
    github: "https://github.com/mithradevtv-droid",
    color: "primary",
    featured: true,
  },
  {
    id: "ai-shopping",
    title: "AI Shopping Agent",
    tagline: "Intelligent Autonomous Commerce",
    description:
      "An LLM-powered autonomous agent that assists users in product discovery, price comparison, and purchase decisions. Integrates Gemini API for natural language understanding and returns structured product recommendations in real time.",
    tags: ["Gemini API", "Node.js", "AI Agents", "E-commerce"],
    metrics: [
      { icon: Star, label: "AI Model", value: "Gemini" },
      { icon: Users, label: "Type", value: "Agent" },
      { icon: GitBranch, label: "Stack", value: "Node + LLM" },
    ],
    techStack: ["Gemini API", "Node.js", "Express", "React", "TypeScript"],
    link: "https://github.com/mithradevtv-droid",
    github: "https://github.com/mithradevtv-droid",
    color: "accent",
    featured: true,
  },
  {
    id: "quizblitz",
    title: "QuizBlitz",
    tagline: "Real-Time Multiplayer Quiz Platform",
    description:
      "A competitive multiplayer quiz app built with Next.js 14 and Socket.io. Supports live game rooms, real-time leaderboards, and a custom horror theme. Players compete simultaneously with sub-100ms score sync.",
    tags: ["Next.js", "Socket.io", "SQLite", "Multiplayer"],
    metrics: [
      { icon: Users, label: "Multiplayer", value: "Real-time" },
      { icon: Star, label: "Latency", value: "<100ms" },
      { icon: GitBranch, label: "Stack", value: "Next.js 14" },
    ],
    techStack: ["Next.js 14", "Socket.io", "SQLite", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/mithradevtv-droid",
    github: "https://github.com/mithradevtv-droid",
    color: "primary",
    featured: false,
  },
  {
    id: "billforge",
    title: "BillForge",
    tagline: "Indian GST-Compliant Billing System",
    description:
      "A comprehensive browser-based billing application designed for Indian businesses. Handles GST management (CGST/SGST/IGST), inventory tracking, invoice generation, and financial reporting — all without a backend dependency.",
    tags: ["React", "TypeScript", "GST", "Finance"],
    metrics: [
      { icon: Star, label: "Tax", value: "GST Ready" },
      { icon: Users, label: "Target", value: "SMBs" },
      { icon: GitBranch, label: "Stack", value: "React + TS" },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "LocalStorage", "Vite"],
    link: "https://github.com/mithradevtv-droid",
    github: "https://github.com/mithradevtv-droid",
    color: "accent",
    featured: false,
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() =>
    activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects,
    [activeTag]
  );

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-glow">Project_Manifest</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase glitch" data-text="System Output">
            System <span className="text-muted-foreground">Output</span>
          </h2>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-3 mt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                !activeTag ? "bg-primary text-black border-primary" : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >All</motion.button>
            {allTags.map(tag => (
              <motion.button key={tag} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeTag === tag ? "bg-primary text-black border-primary" : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >{tag}</motion.button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                layout key={project.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background p-8 md:p-10 group relative overflow-hidden hover:bg-primary/5 transition-colors duration-300"
              >
                {/* Project number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-primary/8 group-hover:text-primary/15 transition-all select-none">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[9px] uppercase tracking-widest font-bold ${
                      project.color === "accent" ? "text-accent/60" : "text-primary/60"
                    }`}>#{tag}</span>
                  ))}
                  {project.featured && (
                    <span className="text-[9px] uppercase tracking-widest font-bold text-yellow-400/60">⭐ Featured</span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-black mb-1 uppercase group-hover:${
                  project.color === "accent" ? "text-accent" : "text-primary"
                } transition-colors duration-300`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-bold mb-5 ${project.color === "accent" ? "text-accent/70" : "text-primary/70"}`}>
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{project.description}</p>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-8 border border-border p-4 bg-muted/10">
                  {project.metrics.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon className={`w-4 h-4 mx-auto mb-1 ${project.color === "accent" ? "text-accent" : "text-primary"}`} />
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">{label}</p>
                      <p className="text-xs font-black">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[9px] px-2 py-1 border border-border text-muted-foreground font-bold uppercase tracking-wider hover:border-primary/40 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 border-t border-border pt-6">
                  <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${
                      project.color === "accent" ? "text-accent hover:text-accent/80" : "text-primary hover:text-primary/80"
                    } transition-all`}
                    whileHover={{ x: 4 }}
                  >
                    Live_Demo <ExternalLink size={13} />
                  </motion.a>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Source_Code <Github size={13} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
