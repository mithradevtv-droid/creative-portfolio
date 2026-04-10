import { motion } from "motion/react";
import { Mail, MessageSquare, Send, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          alert('Transmission successful! Message received.');
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Transmission failed. Please try again or use direct email.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto terminal-window p-8 md:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-glow">Connection_Request</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-tight">
              Establish <br />
              <span className="text-muted-foreground">Uplink</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              System is ready to receive new project parameters. 
              Initiate communication protocol below.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:mithradevtv.work@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email_Protocol</p>
                  <p className="text-lg font-bold">mithradevtv.work@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/919633389027" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">WhatsApp_Direct</p>
                  <p className="text-lg font-bold">+91 9633389027</p>
                </div>
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">User_Identity</label>
                {/* Added text-white here */}
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="NAME"
                  required
                  className="w-full bg-muted/30 border border-border rounded-none px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-bold placeholder:text-muted-foreground/30"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Return_Address</label>
                {/* Added text-white here */}
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="EMAIL"
                  required
                  className="w-full bg-muted/30 border border-border rounded-none px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-bold placeholder:text-muted-foreground/30"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Data_Payload</label>
              {/* Added text-white here */}
              <textarea 
                name="message"
                placeholder="MESSAGE_CONTENT"
                rows={5}
                required
                className="w-full bg-muted/30 border border-border rounded-none px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none font-bold placeholder:text-muted-foreground/30"
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="cyber-button w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Transmitting...' : 'Transmit_Data'}
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
