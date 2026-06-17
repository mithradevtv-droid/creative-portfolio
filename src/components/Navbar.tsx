import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const ids = navItems.map(i => i.href.replace("#", ""));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ width: progressWidth }} />

      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
        <motion.div
          initial={{ y: -100 }} animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="terminal-window flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-3 pointer-events-auto"
        >
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-black tracking-tighter uppercase text-primary text-glow">Mithra_Dev</a>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Online</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a key={item.name} href={item.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                    isActive ? "nav-active" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary" />
                  )}
                </a>
              );
            })}
            <a href="#contact"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-glow transition-all border border-accent/30 px-3 py-1.5 hover:bg-accent/10"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-4 right-4 terminal-window p-6 md:hidden flex flex-col gap-4 pointer-events-auto"
          >
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                className="text-base font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >{item.name}</a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="cyber-button text-center mt-2 block">
              Hire Me
            </a>
          </motion.div>
        )}
      </nav>
    </>
  );
}
