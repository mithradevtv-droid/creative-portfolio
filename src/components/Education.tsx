import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech Computer Science & Engineering",
    specialization: "Artificial Intelligence",
    college: "College of Engineering Trikaripur",
    location: "Kasaragod, Kerala",
    duration: "2025 – Present",
    status: "Pursuing",
    highlights: [
      "AI & Machine Learning specialization track",
      "Full Stack Development self-learning alongside coursework",
      "Active in IEDC — Innovation & Entrepreneurship Development Cell",
    ],
  },
];

const activities = [
  {
    role: "Content Team Volunteer",
    organization: "IEDC Summit",
    type: "Volunteer",
    description: "Contributed to content creation, branding, and event promotion for the Innovation & Entrepreneurship Development Cell Summit.",
    color: "primary",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-secondary/20 border-y border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-glow">Academic_Records</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase glitch" data-text="Education">
            Education <span className="text-muted-foreground italic">&</span> Activity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education Cards */}
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent accent-glow mb-6">// Academics</p>
            {education.map((edu, i) => (
              <motion.div
                key={edu.college}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="terminal-window p-8 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3 border border-border group-hover:border-primary transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-primary/30 text-primary bg-primary/5">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-1">{edu.degree}</h3>
                <p className="text-primary font-bold text-sm mb-4">({edu.specialization})</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="text-sm font-bold">{edu.college}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-2">
                  {edu.highlights.map((h, hi) => (
                    <motion.div
                      key={hi}
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: hi * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span className="text-sm text-muted-foreground">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience / Activities */}
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent accent-glow mb-6">// Experience & Activities</p>
            {activities.map((act, i) => (
              <motion.div
                key={act.role}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.1 }}
                className="terminal-window p-8 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-accent/30 text-accent bg-accent/5">
                    {act.type}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-1">{act.role}</h3>
                <p className="text-accent font-bold text-sm mb-6">{act.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{act.description}</p>
              </motion.div>
            ))}

            {/* Achievements grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent accent-glow mb-6">// Achievements</p>
              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {[
                  { label: "4+ Production Projects", icon: "🚀" },
                  { label: "AI-Focused Developer", icon: "🤖" },
                  { label: "Full Stack Development", icon: "⚡" },
                  { label: "Open Source Learning", icon: "🌍" },
                ].map((ach, i) => (
                  <motion.div
                    key={ach.label}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-background p-6 hover:bg-primary/5 transition-colors group cursor-default"
                  >
                    <div className="text-2xl mb-3">{ach.icon}</div>
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/80 group-hover:text-primary transition-colors">
                      {ach.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
