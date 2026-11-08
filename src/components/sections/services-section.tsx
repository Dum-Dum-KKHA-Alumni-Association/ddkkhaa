import {
  Code,
  Layers,
  LineChart,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Engineering",
    description:
      "Enterprise-grade, high-performance web applications built on Next.js, React, and strict TypeScript architecture.",
  },
  {
    icon: Layers,
    title: "UI/UX & Product Design",
    description:
      "User-centric interface design systems that blend aesthetics with intuitive functionality and seamless interaction.",
  },
  {
    icon: Zap,
    title: "Performance & SEO Optimization",
    description:
      "Sub-second load times, Core Web Vitals excellence, and technical SEO architectures designed to maximize visibility.",
  },
  {
    icon: Smartphone,
    title: "Responsive Mobile Solutions",
    description:
      "Adaptive design patterns engineered to deliver flawless experiences across every screen size and device profile.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Clean Architecture",
    description:
      "Adherence to SOLID design principles, rigorous input validation, and rock-solid architectural standards.",
  },
  {
    icon: LineChart,
    title: "Digital Growth Strategy",
    description:
      "Data-informed technical strategies that convert user engagements into measurable business growth.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Services & Expertise
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            What We Bring to Your Business
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We provide full-spectrum digital product engineering—from initial concept to scalable production deployment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group transition-all duration-200 hover:shadow-md hover:border-foreground/20"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <CardTitle className="pt-4 text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

