import { motion } from "motion/react";
import { Terminal, Cpu, Globe, Code2, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const cols = Math.floor(canvas.width / 18);
    const drops: number[] = Array(cols).fill(1);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>{}[]";
    const draw = () => {
      ctx.fillStyle = "rgba(8,8,8,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = "14px JetBrains Mono, monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 55);
    return () => { clearInterval(interval); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} id="matrix-canvas" />;
}

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

export default function Hero() {
  const typedText = useTyping([
    "Full-Stack AI Developer",
    "B.Tech CSE (AI) Student",
    "ML Engineer",
    "Open Source Builder",
  ]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="scanline" />
      <MatrixRain />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="terminal-window p-1 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
            <div className="flex gap-1.5">
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((color, i) => (
                <motion.div key={color} className="w-3 h-3 rounded-full" style={{ background: color }}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }} />
              ))}
            </div>
            <div className="flex-grow text-center">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">system_core_v3.0.sh</span>
            </div>
            <Terminal className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="p-8 md:p-16 space-y-8">
            {/* Identity badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              {["B.Tech CSE (AI)", "Full Stack Developer", "TECH Enthusiast"].map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                    i === 1 ? "border-accent/40 text-accent bg-accent/5" : "border-primary/40 text-primary bg-primary/5"
                  }`}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-3 text-primary"
            >
              <span className="text-xl font-bold">{">"}</span>
              <span className="text-sm uppercase tracking-[0.3em] font-bold animate-pulse">Initializing developer_persona...</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              Building <br />
              <span className="text-primary text-glow glitch" data-text="Autonomous">Autonomous</span>{" "}<br />
              Intelligence.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Role:</span>
              <span className="text-lg font-bold typing-cursor text-accent accent-glow">{typedText}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Cpu, label: "Architecture", value: "Full-Stack AI", color: "primary" },
                { icon: Globe, label: "Deployment", value: "Global Scale", color: "accent" },
                { icon: Code2, label: "Expertise", value: "LLM Integration", color: "primary" },
              ].map((item, index) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-4 p-4 border border-border transition-colors group cursor-default hover:border-primary/40"
                >
                  <item.icon className={`w-6 h-6 ${item.color === "accent" ? "text-accent" : "text-primary"} group-hover:scale-110 transition-transform`} />
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
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.a href="#projects" className="cyber-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Execute_Portfolio.exe
          </motion.a>

          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"
            download="Mithradev_TV_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent text-[11px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-all"
          >
            <Download className="w-4 h-4" />
            Download_CV
          </motion.a>

          <div className="flex items-center gap-6">
            {[
              { label: "Github", href: "https://github.com/mithradevtv-droid", color: "primary", delay: 2.0 },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/mithradev-t-v-1294652a2/", color: "accent", delay: 2.1 },
              { label: "WhatsApp", href: "https://wa.me/919633389027", color: "primary", delay: 2.2 },
            ].map(({ label, href, color, delay }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`text-muted-foreground ${color === "accent" ? "hover:text-accent" : "hover:text-primary"} transition-colors flex items-center gap-2`}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay }} whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${color === "accent" ? "bg-accent" : "bg-primary"}`} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
