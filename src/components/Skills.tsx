import { motion } from "motion/react";
import { Code2, Palette, Terminal, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    title: "Tools",
    icon: Code2,
    skills: ["Git", "Docker", "AWS", "Figma", "Vercel", "Jest"],
  },
  {
    title: "Soft Skills",
    icon: Zap,
    skills: ["Leadership", "Communication", "Problem Solving", "Agile", "Mentoring"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent text-glow">System_Capabilities</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase">
            Tech <span className="text-muted-foreground italic">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-10 group hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 border border-border group-hover:border-primary transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 bg-border group-hover:bg-primary transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
