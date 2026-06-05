import {
  FileText, Image as ImageIcon, Award, Megaphone, CreditCard, Mail,
  Copy, ScanLine, Layers, BookOpen,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Report & Thesis Printing", desc: "Bound, professional academic prints." },
  { icon: ImageIcon, title: "Photo Printing", desc: "Vivid color, gallery-quality finish." },
  { icon: Award, title: "Diploma & Certificates", desc: "Premium paper, perfect for framing." },
  { icon: Megaphone, title: "Banners & Posters", desc: "Large-format prints that stand out." },
  { icon: CreditCard, title: "Business Cards", desc: "Matte, glossy, or premium textured." },
  { icon: Mail, title: "Invitations", desc: "Elegant designs for any occasion." },
  { icon: Copy, title: "Photocopy Services", desc: "Fast, accurate copies in any volume." },
  { icon: ScanLine, title: "Scanning & Conversion", desc: "Digitize documents in minutes." },
  { icon: Layers, title: "Laminating", desc: "Protect and preserve your prints." },
  { icon: BookOpen, title: "Binding", desc: "Spiral, thermal, and hardcover binding." },
];

export function Services() {
  return (
    <section id="services" className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Everything you need, all in one place</h2>
        <p className="mt-4 text-muted-foreground">Ten specialized services backed by professional equipment and quick turnaround.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-2 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gradient text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}