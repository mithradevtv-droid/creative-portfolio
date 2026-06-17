import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { href: "https://github.com/mithradevtv-droid", Icon: Github, label: "GitHub", color: "hover:text-primary hover:border-primary" },
  { href: "https://www.linkedin.com/in/mithradev-t-v-1294652a2/", Icon: Linkedin, label: "LinkedIn", color: "hover:text-accent hover:border-accent" },
  { href: "https://wa.me/919633389027", Icon: MessageCircle, label: "WhatsApp", color: "hover:text-primary hover:border-primary" },
];

export default function FloatingSocial() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Social Dock — right side */}
      <div className="social-dock hidden lg:flex">
        {socials.map(({ href, Icon, label, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 + i * 0.15 }}
            className={`w-9 h-9 border border-border bg-background flex items-center justify-center text-muted-foreground transition-all ${color}`}
            whileHover={{ scale: 1.2, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={16} />
          </motion.a>
        ))}

        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="w-[1px] h-16 bg-primary/30 mx-auto mt-2"
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="back-to-top"
            title="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} className="text-primary" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
