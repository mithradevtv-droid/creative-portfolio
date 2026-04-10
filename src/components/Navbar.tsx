import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="terminal-window flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-3 pointer-events-auto"
      >
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-black tracking-tighter uppercase text-primary text-glow">
            Mithra_Dev_OS
          </a>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-primary">System_Online</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all"
            >
              {item.name}.sh
            </a>
          ))}
          <div className="h-4 w-[1px] bg-border mx-2" />
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-glow transition-all">
            Access_Root
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 terminal-window p-6 md:hidden flex flex-col gap-4 pointer-events-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
          <Button variant="outline" className="w-full rounded-2xl mt-4">
            Resume
          </Button>
        </motion.div>
      )}
    </nav>
  );
}