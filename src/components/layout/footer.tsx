import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GraduationCap, Mail, MapPin, Phone, Clock, Award } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border/60 bg-muted/30 text-muted-foreground">
      {/* Upper Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* School Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white border border-[#c59a53] shadow-xs overflow-hidden">
                <Image
                  src="/images/school/cropped-ddkkha_icon.jpg"
                  alt="DDKKHA Crest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-foreground leading-snug">
                  {siteConfig.fullName}
                </span>
                <span className="text-xs font-medium text-primary">
                  {siteConfig.bengaliName}
                </span>
              </div>
            </Link>

            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              A prestigious Government-Sponsored Higher Secondary School located in Motijheel, Dum Dum. Dedicated to academic brilliance, moral fortitude, and nation-building since January 3, 1933.
            </p>

            <div className="rounded-lg border border-border/60 bg-card p-3 text-xs space-y-1">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Award className="size-3.5 text-primary" />
                <span>Recognition & Affiliation Codes</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                WBBSE Index: <span className="font-semibold text-foreground">B1-039</span> | WBCHSE Code: <span className="font-semibold text-foreground">101032</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                U-DISE Code: <span className="font-semibold text-foreground">{siteConfig.affiliation.udise}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Institutional Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Portals */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Academic Wings
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/admission" className="transition-colors hover:text-foreground">
                  Class V Admission Lottery
                </Link>
              </li>
              <li>
                <Link href="/admission" className="transition-colors hover:text-foreground">
                  Class XI Higher Secondary
                </Link>
              </li>
              <li>
                <Link href="/staff-member" className="transition-colors hover:text-foreground">
                  Faculty & Non-Teaching Staff
                </Link>
              </li>
              <li>
                <Link href="/managing-committee" className="transition-colors hover:text-foreground">
                  Managing Committee
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  Heritage & Headmasters (1933–Present)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Campus Contact
            </h3>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Motijheel Avenue, P.O. Motijheel, P.S. Dum Dum, Kolkata – 700074, West Bengal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-border/40">
                <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  {siteConfig.contact.officeHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[11px]">
            <span>Official Redesigned Web Portal</span>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-foreground">
              Help Desk
            </Link>
            <span>•</span>
            <Link href="/admission" className="hover:text-foreground font-medium text-primary">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
