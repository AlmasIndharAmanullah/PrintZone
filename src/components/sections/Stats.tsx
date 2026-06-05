const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "500+", label: "Print Orders" },
  { value: "2+", label: "Years of Experience" },
  { value: "99%", label: "On-Time Delivery" },
];

export function Stats() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-8 text-center hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}