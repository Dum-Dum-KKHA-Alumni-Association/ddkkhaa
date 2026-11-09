import { PageHeader } from "@/components/layout/page-header";
import { schoolData, type CommitteeMember } from "@/config/school-data";
import {
  ShieldCheck,
  FileCheck,
  Building2,
  Users2,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const governanceFunctions = [
  {
    icon: Building2,
    title: "Campus Infrastructure & Maintenance",
    description:
      "Overseeing capital grants, laboratory modernization, sanitary maintenance, and school building safety in accordance with government regulations.",
  },
  {
    icon: FileCheck,
    title: "Financial Auditing & Accountability",
    description:
      "Reviewing and approving annual financial budgets, government grant distributions, and ensuring transparent bookkeeping.",
  },
  {
    icon: Users2,
    title: "Student Welfare & Mid-Day Meal",
    description:
      "Supervising hygienic cooking standards for the government mid-day meal scheme, clean drinking water plants, and textbook distribution.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory Regulatory Compliance",
    description:
      "Ensuring strict compliance with WBBSE and WBCHSE academic directives, examination guidelines, and teacher staffing quotas.",
  },
];

export default function ManagingCommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Managing Committee & School Governance"
        description="The statutory governing body of Dum Dum Krishna Kumar Hindu Academy overseeing administrative policies, student welfare, and academic progress."
        badge="Institutional Governance"
        breadcrumbs={[{ title: "Managing Committee" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* Governance Introduction */}
        <section className="rounded-2xl border border-border bg-gradient-to-r from-card to-muted/30 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Democratic Institutional Leadership
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Governing Body of DDKKHA
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Formed in accordance with the Management of Recognized Non-Government Institutions (Aided and Sponsored) Rules enacted by the Government of West Bengal. The Managing Committee consists of elected Teachers&apos; Representatives, Guardian Representatives, Non-Teaching representatives, alongside the Headmaster (Ex-Officio Secretary) and government nominees.
            </p>
          </div>
        </section>

        {/* Committee Members Grid */}
        <section>
          <div className="border-b border-border/60 pb-4 mb-8">
            <h3 className="text-xl font-bold text-foreground">
              Current Committee Members (Executive &amp; Elected)
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Active representatives entrusted with school leadership and policy oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schoolData.managingCommittee.map((member: CommitteeMember) => (
              <Card
                key={member.id}
                className={`transition-shadow hover:shadow-sm ${
                  member.roleType === "Executive"
                    ? "border-primary/50 bg-primary/[0.02]"
                    : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      {member.roleType}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {member.tenure}
                    </span>
                  </div>
                  <CardTitle className="pt-3 text-base font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-xs font-semibold text-primary">{member.designation}</p>
                </CardHeader>
                <CardContent className="border-t border-border/40 pt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                    <span>Authorized Governing Member</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Governance Responsibilities */}
        <section className="border-t border-border/40 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Core Mandates
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Key Responsibilities of the Committee
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Ensuring the academy maintains its historic standards of discipline, educational excellence, and civic safety.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governanceFunctions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-5 shadow-xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Meeting Notice & Minutes Archive Note */}
        <section className="rounded-xl border border-border/60 bg-muted/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CalendarCheck className="size-6 text-primary shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-foreground">
                Managing Committee Meetings &amp; Proceedings
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Committee meetings are scheduled periodically at the Headmaster&apos;s conference room. Agenda notices and ratified resolutions are displayed on the administrative notice board.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

