import { motion } from "motion/react";
import { Code2, Sparkles, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
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
                  Hey there! I'm <span className="text-primary font-bold">Mithradev</span>, 
                  a passionate developer who loves turning ideas into reality through code.
                </p>
                <p className="text-base leading-relaxed">
                  I specialize in building modern web applications with a focus on 
                  clean code, great user experiences, and cutting-edge technologies.
                </p>
                <p className="text-base leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the dev community.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-xs font-bold text-primary">Full-Stack Developer</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-xs font-bold text-accent">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-xs font-bold text-primary">Tech Enthusiast</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats/Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="terminal-window p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable code that stands the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-window p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Creative Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Thinking outside the box to solve complex problems elegantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-window p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Fast Learner</h3>
                  <p className="text-sm text-muted-foreground">
                    Always adapting to new technologies and industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}