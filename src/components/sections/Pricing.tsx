import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Student",
    price: "Rp.15.000",
    desc: "Perfect for assignments & reports.",
    features: ["Up to 100 B/W pages", "Basic binding", "Standard paper", "24h turnaround"],
    cta: "Start with Student",
    highlight: false,
  },
  {
    name: "Office",
    price: "Rp.150.000",
    desc: "Reliable printing for teams.",
    features: ["Up to 500 color pages", "Premium binding", "High-grade paper", "Priority queue", "Free pickup"],
    cta: "Choose Office",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Rp.500.000",
    desc: "For businesses & events.",
    features: ["Unlimited pages", "Custom finishes", "Banners & posters included", "Same-day delivery", "Dedicated support"],
    cta: "Go Premium",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Simple plans for everyone</h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
                t.highlight
                  ? "bg-primary-gradient text-primary-foreground border-transparent shadow-glow scale-105"
                  : "bg-card border-border hover:shadow-elegant"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-gradient text-accent-foreground text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.highlight ? "opacity-90" : "text-muted-foreground"}`}>{t.desc}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold">{t.price}</span>
                <span className={t.highlight ? "opacity-80" : "text-muted-foreground"}>/order</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`h-4 w-4 ${t.highlight ? "text-accent-foreground" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full ${
                  t.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary-gradient text-primary-foreground shadow-glow"
                }`}
              >
                <a href="#order">{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}