import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import {
  Compass,
  Eye,
  History,
  Library,
  Cpu,
  Trophy,
  Landmark,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const timelineEvents = [
  {
    year: "1998",
    title: "The Inception",
    description:
      "Founded by community visionaries with a humble batch of 45 students and 4 passionate teachers, aiming to bring accessible, value-based education.",
  },
  {
    year: "2005",
    title: "Campus Expansion & Recognition",
    description:
      "Constructed the central academic block, introduced dedicated science laboratories, and earned formal regional affiliation.",
  },
  {
    year: "2014",
    title: "Digital Integration & Library Modernization",
    description:
      "Inaugurated the central multimedia library and first computer science laboratory to prepare students for the modern technological era.",
  },
  {
    year: "2020",
    title: "Sports Complex & Auditorium",
    description:
      "Expanded outdoor sports grounds and constructed a multi-purpose auditorium for cultural exhibitions and student debates.",
  },
  {
    year: "Present",
    title: "A Beacon of Excellence",
    description:
      "Today, DDKKHAA serves over 1,500 students with a modern curriculum blending moral integrity, competitive academics, and holistic development.",
  },
];

const facilities = [
  {
    icon: Library,
    title: "Central Academic Library",
    description:
      "Housing over 10,000 academic titles, reference journals, periodicals, and quiet study alcoves for serious learners.",
  },
  {
    icon: Cpu,
    title: "Advanced Computer Lab",
    description:
      "Equipped with modern workstations, high-speed connectivity, and coding resources to develop digital literacy.",
  },
  {
    icon: Landmark,
    title: "Multi-Disciplinary Science Labs",
    description:
      "Fully compliant Physics, Chemistry, and Biology laboratories enabling hands-on experimental learning.",
  },
  {
    icon: Trophy,
    title: "Athletics & Playgrounds",
    description:
      "Spacious grounds dedicated to football, cricket, volleyball, badminton, and annual inter-house athletics tournaments.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About & History of DDKKHAA"
        description="Discover the legacy, foundational philosophy, milestones, and campus infrastructure that define our institution."
        badge="Our Legacy"
        breadcrumbs={[{ title: "About & History" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* Origin & Overview */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Genesis
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Legacy Built on Integrity, Discipline & Learning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {siteConfig.fullName} was established with a singular conviction: that education should cultivate both intellectual brilliance and righteous moral character. Over the decades, we have remained steadfast in our commitment to academic rigor and community service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We provide an environment where curiosity is celebrated, questions are encouraged, and students are prepared to face real-world challenges with confidence and composure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/staff-member" className="gap-2">
                  Meet Our Staff <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/managing-committee">Managing Committee</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-muted p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Our Fundamental Pledge</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;To provide every child an accessible, enriching, and morally grounded educational journey that nurtures their mind, strengthens their character, and empowers their future.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-border/60 pt-4 text-xs">
                <div>
                  <span className="font-semibold text-foreground">Affiliated & Recognized</span>
                  <p className="text-muted-foreground mt-0.5">Accredited by State Board</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Medium of Instruction</span>
                  <p className="text-muted-foreground mt-0.5">English & Regional Language</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-2">
                <Compass className="size-6" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                To deliver comprehensive educational experiences through dedicated mentorship, modern pedagogies, and ethical learning frameworks.
              </p>
              <p>
                We strive to eliminate social and economic barriers, providing equitable opportunities for every aspiring student to reach their highest academic and personal potential.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                <Eye className="size-6" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                To stand as a nationally acknowledged center of educational excellence, celebrated for academic merit, holistic character development, and community impact.
              </p>
              <p>
                Our vision envisions alumni who contribute positively to nation-building as enlightened leaders, skilled professionals, and conscientious citizens.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline / Historical Milestones */}
        <section>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <History className="size-4" />
              <span>Historical Milestones</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Journey Through the Years
            </h2>
          </div>

          <div className="mt-12 relative border-l border-border/80 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary transition-transform group-hover:scale-125" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="text-lg font-bold text-primary sm:w-28 shrink-0">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {event.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <section className="border-t border-border/40 pt-16">
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Campus & Environment
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              State-of-the-Art Facilities
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              A serene, secure campus environment thoughtfully designed to support multifaceted student growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <Card key={i} className="hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

