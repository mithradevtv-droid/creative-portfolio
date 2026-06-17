import { motion, useInView } from "motion/react";
import { Code2, Sparkles, Zap } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-primary text-glow">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Commits", value: 150, suffix: "+" },
  { label: "Months Coding", value: 18, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
            System_Info
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glitch" data-text="About Me">
            About Me
          </h2>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 flex flex-col items-center gap-2 group hover:bg-primary/5 transition-colors"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="terminal-window p-8">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base leading-relaxed">
                  Hey there! I'm <span className="text-primary font-bold">Mithradev</span>, a passionate
                  B.Tech AI student and developer who loves turning ideas into reality through code.
                </p>
                <p className="text-base leading-relaxed">
                  I specialize in building modern web applications with a focus on clean code, great user
                  experiences, and cutting-edge AI technologies.
                </p>
                <p className="text-base leading-relaxed">
                  When I'm not coding, you'll find me exploring new ML frameworks, contributing to
                  open-source projects, or sharing knowledge with the dev community.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Full-Stack Developer", "AI/ML Engineer", "Problem Solver", "Tech Enthusiast"].map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                  className={`px-4 py-2 border rounded-full cursor-default ${
                    i % 2 === 0
                      ? "bg-primary/10 border-primary/20"
                      : "bg-accent/10 border-accent/20"
                  }`}
                >
                  <span className={`text-xs font-bold ${i % 2 === 0 ? "text-primary" : "text-accent"}`}>
                    {tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code that stands the test of time.", color: "primary" },
              { icon: Sparkles, title: "Creative Solutions", desc: "Thinking outside the box to solve complex problems elegantly.", color: "accent" },
              { icon: Zap, title: "Fast Learner", desc: "Always adapting to new technologies and industry best practices.", color: "primary" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 6 }}
                className="terminal-window p-6 hover:border-primary/40 transition-all group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" : "bg-primary/10 group-hover:bg-primary/20"} flex items-center justify-center transition-all`}>
                    <Icon className={`w-5 h-5 ${color === "accent" ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
