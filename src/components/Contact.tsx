import { motion } from "motion/react";
import { Mail, Send, MessageCircle, Loader2, CheckCircle2, XCircle, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto terminal-window p-8 md:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-glow">Connection_Request</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">
              Establish <br /><span className="text-muted-foreground">Uplink</span>
            </h2>
            <p className="text-muted-foreground text-base mb-10 leading-relaxed">
              Open to internships, freelance projects, and collaborations. Drop a message — response within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { href: "mailto:mithradevtv.work@gmail.com", Icon: Mail, label: "Email_Protocol", value: "mithradevtv.work@gmail.com" },
                { href: "https://wa.me/919633389027", Icon: MessageCircle, label: "WhatsApp_Direct", value: "+91 9633389027" },
                { href: "https://github.com/mithradevtv-droid", Icon: Github, label: "GitHub", value: "mithradevtv-droid", target: "_blank" },
                { href: "https://www.linkedin.com/in/mithradev-t-v-1294652a2/", Icon: Linkedin, label: "LinkedIn", value: "mithradev-t-v", target: "_blank" },
              ].map(({ href, Icon, label, value, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-11 h-11 border border-border flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{label}</p>
                    <p className="text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col gap-8">
            {/* Status banners */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 border border-primary/40 bg-primary/10 text-primary"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-sm font-bold">Transmission successful! I'll respond within 24 hours.</span>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 border border-red-500/40 bg-red-500/10 text-red-400"
              >
                <XCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-bold">Transmission failed. Please try emailing directly.</span>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Your Name</label>
                  <input type="text" name="from_name" placeholder="Name" required
                    className="w-full bg-muted/20 border border-border px-5 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Your Email</label>
                  <input type="email" name="from_email" placeholder="email@example.com" required
                    className="w-full bg-muted/20 border border-border px-5 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Subject</label>
                <input type="text" name="subject" placeholder="What's this about?" required
                  className="w-full bg-muted/20 border border-border px-5 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Message</label>
                <textarea name="message" placeholder="Describe your project or idea..." rows={5} required
                  className="w-full bg-muted/20 border border-border px-5 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40 font-medium" />
              </div>
              <button type="submit" disabled={status === "sending"}
                className="cyber-button w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Transmitting...</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
