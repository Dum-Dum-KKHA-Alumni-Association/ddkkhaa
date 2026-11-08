import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary to-accent blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground transition-colors">
          <Sparkles className="size-3.5 text-primary" />
          <span>Next-Gen Agency Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Crafting <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">Digital Excellence</span> for the Future.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We design and engineer high-performance web experiences, scalable digital platforms, and tailor-made business software that accelerate your growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact" className="gap-2">
              Start Your Project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#services">Our Capabilities</Link>
          </Button>
        </div>

        {/* Social Proof / Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/40 pt-10 sm:grid-cols-4">
          <div>
            <div className="text-3xl font-bold tracking-tight text-foreground">100%</div>
            <div className="mt-1 text-xs text-muted-foreground">Type-Safe & Scalable</div>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight text-foreground">&lt;100ms</div>
            <div className="mt-1 text-xs text-muted-foreground">Ultra-Fast Performance</div>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight text-foreground">24/7</div>
            <div className="mt-1 text-xs text-muted-foreground">Dedicated Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight text-foreground">A+</div>
            <div className="mt-1 text-xs text-muted-foreground">Modern Accessibility</div>
          </div>
        </div>
      </div>
    </section>
  );
}

