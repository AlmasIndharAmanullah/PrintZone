import { Star } from "lucide-react";

const reviews = [
  { name: "Dembelle", role: "Graduate Student", text: "PrintZone saved my thesis defense. Crisp binding, delivered in 4 hours.", rating: 5, avatar: "SM" },
  { name: "Desire Doue", role: "Marketing Lead", text: "Banner quality is outstanding. Our event looked incredibly professional.", rating: 5, avatar: "JC" },
  { name: "Kylian Mbappe", role: "Small Business Owner", text: "Business cards arrived ahead of schedule. The premium finish is gorgeous.", rating: 5, avatar: "AK" },
];

export function Testimonials() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Loved by 8,000+ customers</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-foreground/90">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-primary-gradient text-primary-foreground flex items-center justify-center font-bold">
                {r.avatar}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}