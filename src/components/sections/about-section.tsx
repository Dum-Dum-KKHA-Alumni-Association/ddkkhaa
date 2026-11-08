import { CheckCircle } from "lucide-react";

const highlights = [
  "Strict TypeScript codebases with zero unsafe type escapes",
  "React Server Component architecture for minimal client-bundle weight",
  "Design system alignment with accessible, responsive shadcn/ui components",
  "Engineered with Core Web Vitals and top SEO rankings as baseline standards",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-20 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              About DDKKHAA
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Engineered with Precision. Designed for Impact.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At DDKKHAA, we bridge the gap between sophisticated software engineering and modern visual design. We partner with ambitious businesses to develop digital products that are resilient, scalable, and delightful to use.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-emerald-500 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-border bg-gradient-to-br from-card to-muted p-8 shadow-sm lg:p-12">
            <div className="space-y-6">
              <div className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Our Core Philosophy
              </div>
              <blockquote className="text-lg font-medium italic text-foreground sm:text-xl">
                &ldquo;Simplicity, maintainability, and exceptional user experience are not afterthoughts—they are the foundational requirements of every piece of software we build.&rdquo;
              </blockquote>
              <div className="border-t border-border/60 pt-4">
                <div className="font-semibold text-foreground">DDKKHAA Engineering</div>
                <div className="text-xs text-muted-foreground">Digital Products & Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

