import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Building,
  Bell,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const announcements = [
  {
    date: "November 2026",
    title: "Admissions Open for Academic Session 2027",
    category: "Admission",
    href: "/admission",
  },
  {
    date: "October 2026",
    title: "Annual Sports & Cultural Exhibition Schedule Announced",
    category: "Events",
    href: "/about",
  },
  {
    date: "October 2026",
    title: "Parent-Teacher Advisory Meeting Scheduled",
    category: "Academic",
    href: "/contact-us",
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Holistic Academic Curriculum",
    description:
      "A balanced curriculum designed to instill deep knowledge, analytical skills, and lifelong curiosity.",
  },
  {
    icon: Users,
    title: "Distinguished Faculty",
    description:
      "Educators committed to mentoring, student well-being, and academic mastery.",
  },
  {
    icon: ShieldCheck,
    title: "Character & Moral Values",
    description:
      "A culture rooted in discipline, respect, integrity, and ethical conduct.",
  },
  {
    icon: Building,
    title: "Modern Infrastructure",
    description:
      "Well-equipped digital classrooms, comprehensive library, and science/computer laboratories.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-background py-20 md:py-28 lg:py-36 border-b border-border/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-15"
          aria-hidden="true"
        >
          <div className="h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-primary to-accent blur-[140px]" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs">
            <GraduationCap className="size-4 text-primary" />
            <span>Welcoming New Students for Academic Year 2027</span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Empowering Minds.{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">
              Inspiring Character.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Welcome to {siteConfig.fullName}. We are dedicated to providing excellence in education, building strong ethical foundations, and preparing our students to thrive in a dynamic world.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/admission" className="gap-2">
                Apply for Admission
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn Our History</Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-10 sm:grid-cols-4">
            <div className="p-4">
              <div className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                25+
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Years of Heritage</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                1,500+
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Enrolled Students</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                60+
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Dedicated Teachers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                98%
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Academic Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board / Announcements */}
      <section className="border-b border-border/40 bg-muted/20 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-border/40">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Bell className="size-4" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Latest Notices & Announcements
              </h2>
            </div>
            <Link
              href="/admission"
              className="mt-2 sm:mt-0 text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              View Admission Guidelines <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {announcements.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group rounded-xl border border-border bg-card p-5 shadow-xs transition hover:border-primary/50 hover:shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">{item.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Highlights */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose DDKKHAA
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nurturing Potential with Values and Vision
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Our campus provides an enriching environment where students develop both intellectually and morally.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="text-center border-border hover:shadow-sm transition-shadow">
                  <CardHeader className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="pt-3 text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal's / Welcome Note */}
      <section className="border-t border-b border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Leadership Message
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Message from the Principal
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                &ldquo;At {siteConfig.name}, we believe every student possesses unique talents waiting to be nurtured. Our mission extends beyond textbook education—we aim to mold empathetic, principled individuals equipped to navigate the challenges of tomorrow with wisdom, integrity, and diligence.&rdquo;
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="size-4 text-primary" />
                  <span>Student-first academic and extracurricular guidance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="size-4 text-primary" />
                  <span>Transparent leadership and continuous community dialogue</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/about">Read Full History & Leadership</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-4 border-b border-border/40 pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                  DK
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Principal & Academic Head</h3>
                  <p className="text-xs text-muted-foreground">{siteConfig.fullName}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  &ldquo;We encourage prospective parents and students to visit our campus, observe our classrooms, and interact with our teachers and staff.&rdquo;
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <Link href="/staff-member" className="font-medium text-primary hover:underline">
                    Meet Our Faculty &rarr;
                  </Link>
                  <Link href="/managing-committee" className="font-medium text-primary hover:underline">
                    Governing Committee &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Banner */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Join the DDKKHAA Family?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base opacity-90">
              Applications for the upcoming academic session are now open. Discover our curriculum, eligibility criteria, and simple registration process.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/admission">Proceed to Admissions</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact-us">Contact Campus Office</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
