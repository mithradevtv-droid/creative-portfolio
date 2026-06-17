import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto">
      <Separator className="mb-12 opacity-10" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <p className="text-xl font-bold tracking-tighter text-primary text-glow">
            MITHRA_DEV<span className="text-muted-foreground">.</span>
          </p>
          <p className="text-sm text-muted-foreground">© 2026 Mithradev T V. All rights reserved.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-8 text-sm font-medium text-muted-foreground"
        >
          <a href="#" className="hover:text-foreground transition-colors text-[10px] uppercase tracking-widest">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors text-[10px] uppercase tracking-widest">Terms</a>
          <a href="#about" className="hover:text-foreground transition-colors text-[10px] uppercase tracking-widest">About</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4"
        >
          {[
            { href: "https://github.com/mithradevtv-droid", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/mithradev-t-v-1294652a2/", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://wa.me/919633389027", Icon: MessageCircle, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              title={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
