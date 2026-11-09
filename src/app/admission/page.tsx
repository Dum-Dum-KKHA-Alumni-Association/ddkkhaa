import { PageHeader } from "@/components/layout/page-header";
import { AdmissionForm } from "@/features/admission/components/admission-form";
import { StreamCalculator } from "@/features/admission/components/stream-calculator";
import {
  FileText,
  CalendarDays,
  CheckCircle,
  HelpCircle,
  PhoneCall,
  Download,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const classVGuidelines = [
  "Admission to Class V is conducted strictly through the transparent Government lottery system in compliance with Department of School Education, Govt. of West Bengal rules.",
  "Guardians must submit the physical or online lottery registration form within the designated window announced on the school notice board.",
  "Age criterion: The candidate must have attained the age of 10+ years as on the statutory cutoff date specified by the Education Department.",
  "Selected lottery candidates will be verified for original birth certificate (issued by Municipal Corporation / Panchayat) and transfer certificate from primary school.",
];

const classXIGuidelines = [
  "Admissions for Class XI (Boys only) are offered across Science (Pure / Bio), Commerce, and Humanities / Arts streams.",
  "Both internal candidates (Madhyamik passed from DDKKHA) and external candidates from recognized boards (WBBSE, ICSE, CBSE) are eligible to apply based on merit cutoffs.",
  "Subject combinations must be chosen in strict accordance with the regulations laid down by the West Bengal Council of Higher Secondary Education (WBCHSE).",
  "Candidates must submit attested copies of their Madhyamik admit card, mark sheet, category certificates (SC/ST/OBC/EWS if applicable), and Aadhaar card at the admission counter.",
];

const admissionDates = [
  { event: "Class XI Online Application Window Opens", date: "Immediately following Madhyamik Results", status: "Active" },
  { event: "First Merit List Publication for Class XI", date: "As notified by WBCHSE", status: "Scheduled" },
  { event: "Document Verification & Fee Deposit (Round 1)", date: "Within 5 days of Merit List", status: "Upcoming" },
  { event: "Class V Lottery Notice & Form Distribution", date: "November – December", status: "Annual" },
  { event: "Academic Session Commencement", date: "As per West Bengal Board Calendar", status: "Scheduled" },
];

const faqs = [
  {
    q: "Are girls admitted to Dum Dum Krishna Kumar Hindu Academy?",
    a: "DDKKHA is a Government-Sponsored Higher Secondary School exclusively for Boys across both Secondary (Class V to X) and Higher Secondary (Class XI & XII) sections.",
  },
  {
    q: "Can students from ICSE or CBSE boards apply for Class XI?",
    a: "Yes. External students from recognized boards such as CBSE and ICSE are eligible to apply provided they meet the minimum aggregate marks and subject cutoff criteria.",
  },
  {
    q: "Is there any financial concession or scholarship for needy students?",
    a: "Eligible students are assisted with various state and central government scholarship schemes including Kanyashree (for vocational tracks), Aikyashree, and Oasis SC/ST/OBC scholarships, subject to verification.",
  },
  {
    q: "What is the fee payment procedure for admission?",
    a: "Nominal government-regulated fees are accepted at the school cash counter or through the designated bank challan / digital portal during the verified admission schedule.",
  },
];

export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Admission Guidelines & Online Inquiry"
        description="Official admission criteria, Class V lottery rules, Class XI Higher Secondary stream combinations (Science, Commerce, Arts), and online application form."
        badge="Academic Year 2026-2027"
        breadcrumbs={[{ title: "Admission" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* Important Notice Callout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Class XI Higher Secondary Admission Portal Is Active
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Students who have cleared the Madhyamik / 10th Standard examination can check eligibility criteria below and submit their pre-admission inquiry.
              </p>
            </div>
          </div>
          <a
            href="#inquiry-form"
            className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
          >
            Go to Inquiry Form
          </a>
        </div>

        {/* Interactive Stream Calculator */}
        <section>
          <StreamCalculator />
        </section>

        {/* Class V & Class XI Guidelines Side by Side */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Class V */}
          <Card>
            <CardHeader>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Junior Section
              </span>
              <CardTitle className="text-lg">Class V Admission (Lottery System)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              {classVGuidelines.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Class XI */}
          <Card>
            <CardHeader>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Higher Secondary Section
              </span>
              <CardTitle className="text-lg">Class XI Admission (Science / Commerce / Arts)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              {classXIGuidelines.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Form and Documents Grid */}
        <section id="inquiry-form" className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start scroll-mt-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>

          {/* Side Info */}
          <div className="space-y-6 lg:col-span-5">
            {/* Required Documents */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-primary" />
                  <CardTitle className="text-base">Document Checklist for Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Attested photocopy of Madhyamik / 10th Board Admit Card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Attested photocopy of 10th Board Mark Sheet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Original Transfer Certificate (for external students)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Attested copy of SC/ST/OBC certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Original &amp; copy of Student Aadhaar Card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>4 recent passport-size colored photographs of the student</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" />
                  <CardTitle className="text-base">Key Academic Dates</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="divide-y divide-border/60">
                {admissionDates.map((item, i) => (
                  <div key={i} className="py-2.5 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{item.event}</p>
                      <p className="text-[11px] text-muted-foreground">{item.date}</p>
                    </div>
                    <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-bold text-foreground">
                      {item.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Help desk card */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <PhoneCall className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs">Admission Inquiry Counter</h4>
                  <p className="text-[11px] text-muted-foreground">{siteConfig.contact.officeHours}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40 text-xs text-muted-foreground space-y-1">
                <p>Telephone: <span className="font-semibold text-foreground">{siteConfig.contact.phone}</span></p>
                <p>Email: <span className="font-semibold text-foreground">{siteConfig.contact.email}</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border/40 pt-16">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Common Queries on Admission
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-foreground">{faq.q}</h3>
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
