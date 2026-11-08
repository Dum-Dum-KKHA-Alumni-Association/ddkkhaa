import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CONTACT_INFO } from "@/constants";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/20 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description} Dedicated to moral development, academic rigor, and producing responsible future leaders.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
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

          <div>
            <h3 className="text-sm font-semibold text-foreground">Academics & Info</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/admission" className="transition-colors hover:text-foreground">
                  Admission Guidelines
                </Link>
              </li>
              <li>
                <Link href="/staff-member" className="transition-colors hover:text-foreground">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link href="/managing-committee" className="transition-colors hover:text-foreground">
                  Governance & Committee
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  History & Legacy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition-colors hover:text-foreground">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/admission" className="hover:text-foreground">Admission</Link>
            <Link href="/contact-us" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
