import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto">
      <Separator className="mb-12 opacity-10" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold tracking-tighter">
            PORTFOLIO<span className="text-muted-foreground">.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Creative Portfolio. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/mithradevtv-droid" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/mithradev-t-v-1294652a2/" className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://wa.me/919633389027" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}