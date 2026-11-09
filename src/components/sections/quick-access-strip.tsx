import Link from "next/link";
import {
  UserPlus,
  FileText,
  Calendar,
  Award,
  Lock,
  MapPin,
} from "lucide-react";
import { schoolData } from "@/config/school-data";

export function QuickAccessStrip() {
  const iconMap: Record<string, React.ElementType> = {
    UserPlus,
    FileText,
    Calendar,
    Award,
    Lock,
    MapPin,
  };

  return (
    <div className="space-y-16">
      {/* 1. Stats Strip (Matching localhost:3001 stats-strip) */}
      <section className="bg-white border-y border-border py-6 shadow-2xs">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center divide-x divide-border/60">
            {schoolData.stats.map((stat, i) => (
              <div key={i} className="px-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0e382e] tracking-tight">
                  {stat.number}
                </span>
                <span className="block text-xs font-semibold text-[#5a6f68] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Institutional Quick Access Grid */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c59a53]">
            Quick Navigation
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#07211a]">
            Institutional Quick Access
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#5a6f68]">
            Direct gateways to primary school functions, official announcements, and academic portals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schoolData.quickAccess.map((item, idx) => {
            const Icon = iconMap[item.icon] || FileText;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-2xs transition-all hover:border-[#c59a53] hover:shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0e382e]/10 text-[#0e382e] transition-colors group-hover:bg-[#0e382e] group-hover:text-[#c59a53]">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#07211a] group-hover:text-[#0e382e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#556962] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

