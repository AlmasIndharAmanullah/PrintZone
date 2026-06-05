import { Upload, ListChecks, CheckCircle2, Package } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload File", desc: "Send us your document in any format." },
  { icon: ListChecks, title: "Choose Service", desc: "Pick paper, finishing & quantity." },
  { icon: CheckCircle2, title: "Confirm Order", desc: "Review your quote and confirm." },
  { icon: Package, title: "Receive Prints", desc: "Pickup or fast delivery to your door." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Process</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">How it works</h2>
        <p className="mt-4 text-muted-foreground">Four simple steps from upload to delivery.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, i) => (
          <div key={s.title} className="relative p-6 rounded-2xl glass hover:shadow-elegant transition">
            <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-accent-gradient text-accent-foreground flex items-center justify-center font-bold shadow-accent-glow">
              {i + 1}
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-gradient shadow-glow">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}