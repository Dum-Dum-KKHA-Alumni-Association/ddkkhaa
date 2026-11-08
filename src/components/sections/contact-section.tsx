import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/constants";
import { ContactForm } from "@/features/contact/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
                Get In Touch
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s Build Something Extraordinary Together
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                Whether you have an upcoming project, need architectural consultation, or want to explore digital transformation, our team is ready to help.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email us directly</div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-medium text-foreground hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <span className="text-sm font-medium text-foreground">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <span className="text-sm font-medium text-foreground">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-border/60 bg-muted/20 p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Rapid Response Guarantee
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                We review every inquiry within 24 business hours to discuss timeline, architecture, and scope.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

