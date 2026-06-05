import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-printing.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">#1 Trusted Print Shop</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Fast, Affordable, and{" "}
            <span className="text-gradient">High-Quality</span> Printing Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            From thesis printing to vibrant banners — PrintZone delivers crisp, professional
            prints with same-day turnaround. Upload your file and we'll handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground shadow-glow hover:opacity-90 group">
              <a href="#order">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="#services">View Services</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Same-day delivery</div>
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Premium quality</div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-hero-gradient rounded-3xl blur-3xl opacity-30" />
          <img
            src={heroImg}
            alt="Modern printing shop with printer and colorful documents"
            width={1280}
            height={1024}
            className="relative rounded-3xl shadow-elegant w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}