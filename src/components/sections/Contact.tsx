import { Mail, MapPin, Phone, Clock } from "lucide-react";

const items = [
  { icon: Mail, label: "Email", value: "printzonemlg@gmail.com" },
  { icon: Phone, label: "Phone", value: "+62-819-34805752" },
  { icon: MapPin, label: "Address", value: "JL. Raya Karanglo No.KM. 2, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 8AM – 8PM" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Contact</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Get in touch</h2>
        <p className="mt-4 text-muted-foreground">Visit our store or drop us a line — we love hearing from you.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.label} className="p-6 rounded-2xl glass hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-xl bg-primary-gradient flex items-center justify-center shadow-glow">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">{it.label}</div>
              <div className="font-semibold">{it.value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elegant min-h-[320px]">
          <iframe
            title="PrintZone location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31613.584025451742!2d112.60357169138834!3d-7.92657759420455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62a279a073467%3A0x69e87084f09ed6c3!2sInstitut%20Teknologi%20Nasional%20-%20Kampus%202!5e0!3m2!1sen!2sid!4v1780642007442!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}