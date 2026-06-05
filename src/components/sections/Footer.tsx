import { Globe, MessageCircle, Printer, Send, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-gradient shadow-glow">
              <Printer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Print<span className="text-gradient">Zone</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Fast, affordable, premium-quality printing for students, professionals, and businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
            <li><a href="#how" className="hover:text-primary">How it Works</a></li>
            <li><a href="#order" className="hover:text-primary">Order Now</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Thesis Printing</li>
            <li>Business Cards</li>
            <li>Banners & Posters</li>
            <li>Binding & Laminating</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {[Globe, Send, MessageCircle, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary-gradient hover:text-primary-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PrintZone. All rights reserved.
      </div>
    </footer>
  );
}