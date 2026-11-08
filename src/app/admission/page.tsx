import { PageHeader } from "@/components/layout/page-header";
import { AdmissionForm } from "@/features/admission/components/admission-form";
import {
  FileText,
  CalendarDays,
  CheckCircle,
  HelpCircle,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_INFO } from "@/constants";

const steps = [
  {
    step: "01",
    title: "Inquiry & Form Submission",
    description:
      "Submit the online inquiry form or collect the physical admission prospectus from our administrative office.",
  },
  {
    step: "02",
    title: "Document Verification",
    description:
      "Submit attested copies of the student’s birth certificate, previous school records, and photographs.",
  },
  {
    step: "03",
    title: "Interactive Assessment",
    description:
      "Students participate in an age-appropriate written review and friendly interaction with faculty members.",
  },
  {
    step: "04",
    title: "Enrollment & Orientation",
    description:
      "Receive the formal admission offer letter, complete fee formalities, and attend the student-parent orientation session.",
  },
];

const requiredDocs = [
  "Attested copy of Birth Certificate (Municipal Corporation or Gram Panchayat)",
  "Transfer Certificate (TC) / School Leaving Certificate from previous institution",
  "Previous 2 years' academic report cards / mark sheets",
  "Recent passport-sized photographs (4 copies of student, 2 of each guardian)",
  "Address Proof of parent/guardian (Aadhaar / Voter ID / Utility Bill)",
  "Medical fitness certificate & immunization record copy",
];

const importantDates = [
  { event: "Online Applications Open", date: "October 15, 2026", status: "Active" },
  { event: "First Round Application Deadline", date: "December 20, 2026", status: "Upcoming" },
  { event: "Student Assessments & Interaction", date: "January 05 - 12, 2027", status: "Upcoming" },
  { event: "First Merit List Announcement", date: "January 20, 2027", status: "Upcoming" },
  { event: "Academic Session Orientation", date: "March 15, 2027", status: "Upcoming" },
];

const faqs = [
  {
    q: "What is the age criterion for admission?",
    a: "For Class 1 admission, the child should ideally be 6 years of age as of March 31 of the academic year. Equivalent age criteria apply sequentially for higher grades.",
  },
  {
    q: "Is transportation facility available for students?",
    a: "Yes, our institution operates supervised bus and van routes connecting major surrounding neighborhoods.",
  },
  {
    q: "Are scholarships or concessions available for deserving students?",
    a: "Yes, merit-cum-means financial aid and fee concessions are reviewed by the Managing Committee for meritorious and underprivileged students.",
  },
  {
    q: "Can admission be sought mid-term?",
    a: "Mid-term admissions depend strictly on vacancy availability in the requested class and require an approved Transfer Certificate.",
  },
];

export default function AdmissionPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Admission Guidelines & Enrollment"
        description="Join DDKKHAA's vibrant learning community. Discover our application process, eligibility criteria, schedule, and apply online."
        badge="Academic Year 2027-2028"
        breadcrumbs={[{ title: "Admission" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* Step by step process */}
        <section>
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Step-by-Step Flow
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              How the Admission Process Works
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-extrabold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form and Documents Grid */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>

          {/* Right Info: 5 cols */}
          <div className="space-y-8 lg:col-span-5">
            {/* Required Documents Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="size-5 text-primary" />
                  <CardTitle className="text-lg">Required Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-xs text-muted-foreground">
                  {requiredDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Key Dates Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-5 text-primary" />
                  <CardTitle className="text-lg">Important Dates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-border/60">
                  {importantDates.map((d, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 text-xs">
                      <div>
                        <div className="font-medium text-foreground">{d.event}</div>
                        <div className="text-muted-foreground">{d.date}</div>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-[10px] text-primary">
                        {d.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help desk */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <PhoneCall className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Admission Help Desk</h4>
                  <p className="text-xs text-muted-foreground">Mon - Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                <p>Phone: <span className="font-medium text-foreground">{CONTACT_INFO.phone}</span></p>
                <p className="mt-1">Email: <span className="font-medium text-foreground">{CONTACT_INFO.email}</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border/40 pt-16">
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Got Questions?
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently Asked Questions
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

