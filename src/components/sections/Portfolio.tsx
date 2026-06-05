const items = [
  { title: "Bound Reports", tag: "Office", color: "from-blue-500 to-blue-700" },
  { title: "Graduation Thesis", tag: "Academic", color: "from-orange-500 to-red-500" },
  { title: "Photo Prints", tag: "Personal", color: "from-cyan-500 to-blue-600" },
  { title: "Certificates", tag: "Awards", color: "from-amber-500 to-orange-600" },
  { title: "Event Banners", tag: "Marketing", color: "from-indigo-500 to-blue-700" },
  { title: "Business Cards", tag: "Branding", color: "from-orange-400 to-pink-500" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Portfolio</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recent work</h2>
          <p className="mt-4 text-muted-foreground">A glimpse at projects we've recently delivered.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${it.color}`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-wider opacity-80">{it.tag}</span>
                <h3 className="text-2xl font-bold mt-1 transition-transform group-hover:-translate-y-1">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}