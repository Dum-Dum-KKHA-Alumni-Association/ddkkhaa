import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import {
  Compass,
  Eye,
  History,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Landmark,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { schoolData } from "@/config/school-data";
import { PhotoGallery } from "@/components/sections/photo-gallery";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="About & History of DDKKHA"
        description="The story of Dum Dum Krishna Kumar Hindu Academy from its foundation on January 3, 1933 to its standing today as a premier Govt. Sponsored Higher Secondary institution."
        badge="Heritage & Governance"
        breadcrumbs={[{ title: "About & History" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* Origin & Overview */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Establishment &amp; Heritage
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nurturing Minds in Dum Dum Since 1933
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.fullName} was founded on <strong>January 3, 1933</strong>, during a transformative period in Bengal&apos;s educational history. Driven by the selfless zeal of patriotic scholars, educationists, and social visionaries, the academy was established to offer accessible, high-standard secondary education to young boys in the historic township of Dum Dum.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Over the course of more than nine decades, the institution grew from modest thatched beginnings into a thriving government-sponsored campus on Motijheel Avenue, equipped with modern science laboratories, digital learning tools, a rich library, and a distinguished alumni body contributing globally.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button size="sm" asChild>
                <Link href="/staff-member" className="gap-2">
                  Meet Our Faculty <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/managing-committee">Managing Committee</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-card p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Sparkles className="size-4" />
                <span>Statutory Details &amp; Codes</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Official Recognition
              </h3>
              <div className="divide-y divide-border/60 text-xs text-muted-foreground">
                <div className="py-2 flex justify-between">
                  <span>WBBSE Secondary Index:</span>
                  <span className="font-bold text-foreground">{schoolData.institution.wbbseIndex}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>WBCHSE H.S. Code:</span>
                  <span className="font-bold text-foreground">{schoolData.institution.wbchseCode}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>National U-DISE Code:</span>
                  <span className="font-bold text-foreground">{schoolData.institution.udiseCode}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>Institution Category:</span>
                  <span className="font-bold text-foreground">Govt. Sponsored (Boys)</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>Campus Address:</span>
                  <span className="font-bold text-foreground">Motijheel, Kolkata – 700074</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-primary/30 bg-primary/[0.02]">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-2">
                <Compass className="size-5" />
              </div>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs leading-relaxed text-muted-foreground">
              <p>
                To impart rigorous, scientific, and value-based education that awakens intellectual curiosity and civic consciousness in every boy.
              </p>
              <p>
                To provide equal scholastic opportunities regardless of economic background, offering modern lab access, sports training, and moral character guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground mb-2">
                <Eye className="size-5" />
              </div>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs leading-relaxed text-muted-foreground">
              <p>
                To be recognised as one of West Bengal’s foremost government-sponsored secondary and higher secondary institutions.
              </p>
              <p>
                To mold thoughtful, empathetic young men who succeed in competitive examinations (JEE, NEET, WBJEE) while remaining grounded in patriotic duty and integrity.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Founding Fathers & Key Benefactors */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Guiding Visionaries
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Founders &amp; Early Patrons
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              We pay tribute to the visionary founding fathers whose generosity and relentless dedication brought this institution into being.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schoolData.founders.map((founder, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs shrink-0">
                  {founder.name
                    .split(" ")
                    .filter((n) => !n.startsWith("Dr.") && !n.startsWith("Late"))
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">{founder.name}</h4>
                  <p className="text-[11px] text-muted-foreground">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Timeline */}
        <section>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <History className="size-4" />
              <span>Nine Decades of Journey</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key Historical Milestones
            </h2>
          </div>

          <div className="mt-12 relative border-l border-border/80 ml-4 md:ml-28 space-y-8 pl-6 md:pl-10">
            {schoolData.historyTimeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary transition-transform group-hover:scale-125" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="text-base font-bold text-primary sm:w-28 shrink-0">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground max-w-3xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lineage of Headmasters Table */}
        <section className="border-t border-border/40 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Academic Stewardship
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Lineage of Headmasters (1933 – Present)
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              A historical chronicle of the distinguished Headmasters and Teachers-in-Charge who have guided DDKKHA.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/60 text-muted-foreground font-semibold">
                <tr>
                  <th className="px-4 py-3">Tenure / Period</th>
                  <th className="px-4 py-3">Name of Headmaster</th>
                  <th className="px-4 py-3">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {schoolData.headmastersLineage.map((hm, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-semibold text-primary">{hm.period}</td>
                    <td className="px-4 py-3 font-bold text-foreground">{hm.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{hm.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Campus Facilities & Photo Gallery */}
        <section className="border-t border-border/40 pt-16">
          <PhotoGallery />
        </section>
      </div>
    </div>
  );
}
