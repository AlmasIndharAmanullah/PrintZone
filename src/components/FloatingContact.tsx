import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-up">
          <a href="tel:+15555550123" className="flex items-center gap-3 px-4 py-3 rounded-full glass shadow-elegant hover:scale-105 transition">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Call us</span>
          </a>
          <a href="mailto:printzonemlg@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-full glass shadow-elegant hover:scale-105 transition">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact"
        className="h-14 w-14 rounded-full bg-accent-gradient text-accent-foreground shadow-accent-glow flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}