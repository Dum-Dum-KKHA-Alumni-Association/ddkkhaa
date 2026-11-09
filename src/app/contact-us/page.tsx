import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/features/contact/components/contact-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Train,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { CONTACT_INFO } from "@/constants";

const departments = [
  {
    name: "Headmaster & Secretarial Office",
    email: "hm@ddkkha.com",
    purpose: "Institutional administration, official certifications, and academic approvals.",
  },
  {
    name: "Admission & Enrollment Counter",
    email: "admission@ddkkha.com",
    purpose: "Class V lottery inquiries, Class XI stream selection, and fee verification.",
  },
  {
    name: "Accounts & Scholarship Section",
    email: "accounts@ddkkha.com",
    purpose: "Fee collection, Kanyashree / Aikyashree / Oasis scholarship forms.",
  },
  {
    name: "Examination & Records Desk",
    email: "exam@ddkkha.com",
    purpose: "WBBSE Madhyamik & WBCHSE Higher Secondary registration and marksheets.",
  },
];

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Contact Us & Campus Directions"
        description="Connect with the administrative office, send an online inquiry, or find transit directions to Dum Dum Krishna Kumar Hindu Academy."
        badge="Campus Help Desk"
        breadcrumbs={[{ title: "Contact Us" }]}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* Core Info Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <MapPin className="size-5" />
              </div>
              <CardTitle className="text-sm font-bold">Campus Address</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              Motijheel Avenue, P.O. Motijheel, P.S. Dum Dum, Kolkata – 700074, West Bengal
            </CardContent>
          </Card>

          <Card className="hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Phone className="size-5" />
              </div>
              <CardTitle className="text-sm font-bold">Telephone Line</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-bold text-foreground hover:text-primary transition-colors block text-sm"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="text-[11px] block mt-1">Available during official hours</span>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Mail className="size-5" />
              </div>
              <CardTitle className="text-sm font-bold">Official Email</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-bold text-foreground hover:text-primary transition-colors block text-sm break-all"
              >
                {siteConfig.contact.email}
              </a>
              <span className="text-[11px] block mt-1">For general &amp; academic queries</span>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Clock className="size-5" />
              </div>
              <CardTitle className="text-sm font-bold">Office Timings</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed space-y-1">
              <div>Mon – Fri: <span className="font-semibold text-foreground">10:30 AM – 4:30 PM</span></div>
              <div>Saturday: <span className="font-semibold text-foreground">10:30 AM – 2:00 PM</span></div>
              <div className="text-[10px] text-muted-foreground">Closed on Sundays &amp; Govt. Holidays</div>
            </CardContent>
          </Card>
        </div>

        {/* Form and Public Transit Section */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Online Inquiry &amp; Grievance Redressal
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Have an inquiry regarding admissions, certificates, or school matters? Fill out the form below.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Transit & Landmark Directions */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Navigation className="size-5 text-primary" />
                <h3 className="text-base font-bold text-foreground">
                  How to Reach the Campus
                </h3>
              </div>

              <div className="space-y-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/30 p-3">
                  <Train className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground">By Metro Railway:</h4>
                    <p className="mt-0.5 leading-relaxed">
                      De-board at <strong>Dum Dum Metro Station</strong> (Blue Line). The campus on Motijheel Avenue is approximately 1.2 km away, reachable by rickshaw, auto-rickshaw, or a short walk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/30 p-3">
                  <Building className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground">By Local Train &amp; Road:</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Dum Dum Junction and Dum Dum Cantonment railway stations offer frequent local train connections. Buses along Jessore Road and Dum Dum Road provide direct transit.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-[11px] space-y-1">
                  <div className="font-semibold text-foreground">Prominent Landmark:</div>
                  <p>Located in the heart of Motijheel educational hub, in proximity to Dum Dum Motijheel College.</p>
                </div>
              </div>
            </div>

            {/* Departmental Email Directory */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-foreground">
                Departmental Contacts
              </h3>
              <div className="divide-y divide-border/60 text-xs">
                {departments.map((dept, i) => (
                  <div key={i} className="py-2.5 space-y-0.5">
                    <p className="font-semibold text-foreground">{dept.name}</p>
                    <p className="text-[11px] text-muted-foreground">{dept.purpose}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-primary font-medium hover:underline text-[11px] inline-block mt-0.5"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

