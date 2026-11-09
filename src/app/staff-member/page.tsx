import { PageHeader } from "@/components/layout/page-header";
import { FacultyDirectory } from "@/features/staff/components/faculty-directory";
import { Award, BookOpen, HeartHandshake, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function StaffMemberPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Faculty & Staff Members"
        description="Meet the dedicated educators, subject specialists, para-teachers, and non-teaching personnel at Dum Dum Krishna Kumar Hindu Academy."
        badge="Academic Directory"
        breadcrumbs={[{ title: "Staff Members" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* Core Faculty Directory with Live Search & Department Filter */}
        <section>
          <FacultyDirectory />
        </section>

        {/* Administrative Details on Faculty Standards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3 border-t border-border/40 pt-16">
          <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
              <Award className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">
              Government Commission Recruited
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Our teachers are selected and recommended through the West Bengal Central School Service Commission (WBCSSC), ensuring supreme pedagogical qualifications.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
              <BookOpen className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">
              Continuous In-Service Training
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Faculty routinely attend government-sponsored pedagogical seminars, digital classroom orientations, and curriculum upgrade workshops.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
              <HeartHandshake className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">
              Parent-Teacher Consultation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Parents can schedule periodic meetings with subject teachers and class mentors through the Headmaster’s office during working hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
