import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Sparkles,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schoolData } from "@/config/school-data";
import { HeroHub } from "@/components/sections/hero-hub";
import { QuickAccessStrip } from "@/components/sections/quick-access-strip";
import { NoticeBoard } from "@/components/sections/notice-board";
import { AlumniBanner } from "@/components/sections/alumni-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Hub: Ticker + Framed Heritage Hero matching reference + Top Hub */}
      <HeroHub />

      {/* 2. Stats Strip & Institutional Quick Access Grid */}
      <div className="py-12 bg-[#f4f7f6]">
        <QuickAccessStrip />
      </div>

      {/* 3. Comprehensive Institutional Notice Board Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NoticeBoard />
        </div>
      </section>

      {/* 4. Higher Secondary Academic Streams */}
      <section className="py-16 sm:py-20 bg-[#f8faf9] border-b border-border/70">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59a53]">
              Higher Secondary Education
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#07211a]">
              Academic Streams Offered (Class XI &amp; XII)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5a6f68] leading-relaxed">
              Curriculum in compliance with the West Bengal Council of Higher Secondary Education (WBCHSE).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {schoolData.admissionStreams.map((stream) => (
              <Card
                key={stream.id}
                className="flex flex-col justify-between border-border bg-white hover:border-[#c59a53] transition-all hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#0e382e]/10 px-2.5 py-0.5 text-xs font-bold text-[#0e382e]">
                      {stream.seats} Seats
                    </span>
                    <Sparkles className="size-4 text-[#c59a53]" />
                  </div>
                  <CardTitle className="pt-3 text-lg font-bold text-[#07211a]">
                    {stream.name.split("(")[0].trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-xs text-[#556962] flex-1 flex flex-col justify-between">
                  <p className="leading-relaxed">{stream.description}</p>
                  <div className="pt-3 border-t border-border/50">
                    <p className="font-bold text-[#07211a] mb-1">Key Subject Electives:</p>
                    <p className="text-[11px] leading-snug">{stream.electiveSubjects.join(", ")}</p>
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs font-bold border-[#0e382e] text-[#0e382e] hover:bg-[#0e382e] hover:text-white transition-colors"
                      asChild
                    >
                      <Link href="/admission">Check Cutoffs &amp; Combinations &rarr;</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Campus Facilities with Authentic Downloaded Photos */}
      <section className="py-16 sm:py-20 bg-white border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59a53]">
              Infrastructure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#07211a]">
              Campus &amp; Learning Facilities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5a6f68]">
              Dedicated physical spaces designed for academic rigour, scientific inquiry, and healthy student development.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolData.facilities.map((fac) => (
              <div
                key={fac.id}
                className="group overflow-hidden rounded-xl border border-border bg-white shadow-2xs hover:shadow-md hover:border-[#c59a53]/60 transition-all flex flex-col"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full bg-[#12382e] overflow-hidden">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-bold text-white drop-shadow-sm">
                    {fac.title}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#556962] leading-relaxed">
                    {fac.description}
                  </p>
                  <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-bold text-[#0e382e]">
                    <span>Verified Facility</span>
                    <span>DDKKHA</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Alumni Network & Heritage Section */}
      <AlumniBanner />
    </div>
  );
}
