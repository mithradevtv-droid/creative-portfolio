import { motion, useInView } from "motion/react";
import { Palette, Terminal, Database, Zap, Wrench } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 75 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "accent",
    skills: [
      { name: "Node.js / Express", level: 82 },
      { name: "REST API Design", level: 80 },
      { name: "Socket.io", level: 72 },
      { name: "Python / FastAPI", level: 68 },
      { name: "Authentication / JWT", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "primary",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase / Firestore", level: 80 },
      { name: "SQLite", level: 74 },
      { name: "Redis (basics)", level: 50 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Zap,
    color: "accent",
    skills: [
      { name: "PyTorch", level: 70 },
      { name: "Gemini API / LLMs", level: 85 },
      { name: "LLM Integration", level: 82 },
      { name: "Computer Vision", level: 65 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vite / Webpack", level: 80 },
      { name: "Docker (basics)", level: 55 },
      { name: "Vercel / Netlify", level: 88 },
      { name: "Figma", level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-bold tracking-wide text-muted-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
          className={`text-[10px] font-black ${color === "accent" ? "text-accent" : "text-primary"}`}
        >{level}%</motion.span>
      </div>
      <div className="h-[3px] bg-border w-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background: color === "accent"
              ? "linear-gradient(90deg, #00f0ff, #00ff41)"
              : "linear-gradient(90deg, #00ff41, #00f0ff)",
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute", right: 0, top: 0, width: 4, height: "100%",
            background: "#fff", boxShadow: "0 0 8px rgba(0,255,65,0.8)",
          }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent accent-glow">System_Capabilities</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase glitch" data-text="Tech Stack">
            Tech <span className="text-muted-foreground italic">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Skills grouped by domain — from pixel-perfect UIs to neural network pipelines.
          </p>
        </div>

        {/* 3-col top row, 2-col bottom row */}
        <div className="space-y-px bg-border border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {skillCategories.slice(0, 3).map((cat, idx) => (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 group hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-3 border border-border group-hover:border-primary transition-colors"
                  >
                    <cat.icon className={`w-5 h-5 ${cat.color === "accent" ? "text-accent" : "text-primary"}`} />
                  </motion.div>
                  <h3 className="text-xs font-black uppercase tracking-widest">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level}
                      color={cat.color} delay={idx * 0.1 + si * 0.08} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {skillCategories.slice(3).map((cat, idx) => (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (idx + 3) * 0.1 }}
                className="bg-background p-8 group hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-3 border border-border group-hover:border-primary transition-colors"
                  >
                    <cat.icon className={`w-5 h-5 ${cat.color === "accent" ? "text-accent" : "text-primary"}`} />
                  </motion.div>
                  <h3 className="text-xs font-black uppercase tracking-widest">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level}
                      color={cat.color} delay={(idx + 3) * 0.1 + si * 0.08} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
