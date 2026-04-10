import { motion } from "motion/react";
import { Terminal, Cpu, Globe, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="scanline" />
      
      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="terminal-window p-1 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
            <div className="flex gap-1.5">
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#ff5f56]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#ffbd2e]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#27c93f]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <div className="flex-grow text-center">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">system_core_v3.0.sh</span>
            </div>
            <Terminal className="w-4 h-4 text-muted-foreground" />
          </div>
          
          <div className="p-8 md:p-16 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.6,
                duration: 0.5
              }}
              className="flex items-center gap-3 text-primary"
            >
              <span className="text-xl font-bold">{">"}</span>
              <span className="text-sm uppercase tracking-[0.3em] font-bold animate-pulse">Initializing developer_persona...</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              Building <br />
              <span className="text-primary text-glow">Autonomous</span> <br />
              Intelligence.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Cpu, label: "Architecture", value: "Full-Stack AI", color: "primary" },
                { icon: Globe, label: "Deployment", value: "Global Scale", color: "accent" },
                { icon: Code2, label: "Expertise", value: "LLM Integration", color: "primary" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.4 + (index * 0.1),
                    duration: 0.5
                  }}
                  className={`flex items-center gap-4 p-4 border border-border hover:border-${item.color} transition-colors group`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <motion.button 
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Execute_Portfolio.exe
          </motion.button>
          <div className="flex items-center gap-6">
            <motion.a 
              href="https://github.com/mithradevtv-droid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest">Github</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mithradev-t-v-1294652a2/" 
              className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </motion.a>
            <motion.a 
              href="https://wa.me/919633389027" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}