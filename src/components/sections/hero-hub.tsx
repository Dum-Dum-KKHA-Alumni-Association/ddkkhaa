"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Bell,
  Calendar,
  Download,
  GraduationCap,
  FileText,
  ExternalLink,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
} from "lucide-react";
import { schoolData, type NoticeItem } from "@/config/school-data";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function HeroHub() {
  const [activeNoticeTab, setActiveNoticeTab] = useState<string>("All");

  const noticeTabs = ["All", "Admission", "Examination", "Circular"];

  const filteredNotices = schoolData.notices.filter((n) => {
    if (activeNoticeTab === "All") return true;
    return n.category === activeNoticeTab;
  });

  return (
    <div className="flex flex-col">
      {/* 1. Breaking Notice Marquee / Ticker */}
      <div className="bg-[#07211a] border-b border-[#133d32] py-2">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded bg-[#c59a53] px-2.5 py-0.5 text-[10px] font-bold text-[#07211a] uppercase tracking-wider shrink-0 shadow-xs">
            <Bell className="size-3" />
            <span>Latest Notice</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap text-xs text-[#d8e6e2] flex-1">
            <div className="inline-block animate-marquee hover:[animation-play-state:paused]">
              <span className="mx-4 font-medium">
                ★ Class XI Higher Secondary Admission Portal is now accepting online inquiry for Science, Commerce &amp; Humanities (2026-2027 session).
              </span>
              <span className="text-[#c59a53]">•</span>
              <span className="mx-4 font-medium">
                ★ Class V Lottery Notification and document verification window announced on the administrative notice board.
              </span>
              <span className="text-[#c59a53]">•</span>
              <span className="mx-4 font-medium">
                ★ Madhyamik and H.S. Pre-Board mock examination routines are published.
              </span>
            </div>
          </div>

          <Link
            href="/admission"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#c59a53] hover:underline shrink-0"
          >
            <span>All Circulars</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>

      {/* 2. Main Hero Section (Deep Forest Green with Golden Frame) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a2e25] via-[#0d382e] to-[#07221b] text-white py-14 sm:py-20 lg:py-24 border-b border-[#c59a53]/30">
        {/* Subtle decorative background glow */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#c59a53]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#1b5e4f]/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Framed Hero Container matching user's uploaded mockup */}
          <div className="relative rounded-3xl border border-[#c59a53]/40 bg-[#092b23]/70 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xs">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                {/* 93+ Years Badge with Golden Star */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c59a53]/60 bg-[#103a30]/90 px-3.5 py-1 text-xs font-bold tracking-wider text-[#dcb16a] uppercase shadow-xs">
                  <span>★</span>
                  <span>93+ YEARS OF ACADEMIC INTEGRITY</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                  <span className="block text-white">A Legacy of Learning.</span>
                  <span className="block text-[#dcb16a] mt-1">A Future of Possibilities.</span>
                </h2>

                {/* Subtitle / Paragraph */}
                <p className="text-sm sm:text-base text-[#d1e2dc] leading-relaxed max-w-2xl">
                  Since 3rd January 1933, Dum Dum Krishna Kumar Hindu Academy has remained committed to nurturing knowledge, discipline, character, and educational development across generations of scholars.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="bg-[#c59a53] text-[#07211a] hover:bg-[#b88c44] font-bold shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href="/about" className="gap-2">
                      Explore the School
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#c59a53]/80 bg-transparent text-[#ffffff] hover:bg-[#c59a53]/15 font-semibold"
                    asChild
                  >
                    <Link href="/admission">Admission Portal</Link>
                  </Button>
                </div>

                {/* Sub-meta details */}
                <div className="pt-4 border-t border-[#1a4a3e]/80 flex flex-wrap items-center gap-6 text-xs text-[#a9c2b9]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#c59a53]" />
                    <span>WBBSE Affiliation: B1-039</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#c59a53]" />
                    <span>WBCHSE H.S. Code: 103084</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#c59a53]" />
                    <span>Govt. Sponsored (Boys)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Campus Image Card with Golden Frame */}
              <div className="lg:col-span-5">
                <div className="relative group overflow-hidden rounded-2xl border-2 border-[#c59a53]/70 bg-[#07211a] shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-[4/3] w-full bg-[#12382e] overflow-hidden">
                    <Image
                      src="/images/hero-campus.jpg"
                      alt="Dum Dum Krishna Kumar Hindu Academy Campus"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  </div>

                  {/* Caption Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-[#07211a]/95 border-t border-[#c59a53]/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#e6f1ed] flex items-center gap-1.5">
                        <Building className="size-3.5 text-[#c59a53]" />
                        <span>Main Institutional Campus</span>
                      </span>
                      <span className="text-[#b1c7bf] text-[11px]">
                        Motijheel Avenue, Kolkata
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multiple Sections / Interactive Hub Grid (Notice Section + Headmaster's Desk + Portals) */}
      <section className="py-14 sm:py-16 bg-[#f4f7f6] border-b border-border/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Section 1: Notice Board & Circulars (Col 6) */}
            <div className="lg:col-span-6 rounded-2xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-border/70 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0e382e] text-[#c59a53]">
                      <Bell className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#07211a]">
                        Administrative Notice Board
                      </h3>
                      <p className="text-[11px] text-[#556962]">
                        Official notices, circulars, and exam routines
                      </p>
                    </div>
                  </div>

                  {/* Notice Tabs */}
                  <div className="flex items-center gap-1 overflow-x-auto text-xs">
                    {noticeTabs.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveNoticeTab(tab)}
                        className={`rounded px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                          activeNoticeTab === tab
                            ? "bg-[#0e382e] text-white"
                            : "bg-[#eaf0ee] text-[#4d635c] hover:bg-[#dce6e3]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notices List */}
                <div className="mt-4 divide-y divide-border/60">
                  {filteredNotices.slice(0, 4).map((notice: NoticeItem) => (
                    <div
                      key={notice.id}
                      className="py-3 flex items-start justify-between gap-3 group hover:bg-[#f8faf9] px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex flex-col items-center justify-center rounded bg-[#eaf0ee] px-2 py-1 text-[9px] text-[#0e382e] font-bold shrink-0">
                          <Calendar className="size-2.5 mb-0.5 text-[#c59a53]" />
                          <span>{notice.date.split(",")[0]}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-[#0e382e]/10 px-1.5 py-0.2 text-[9px] font-bold text-[#0e382e]">
                              {notice.category}
                            </span>
                            {notice.isUrgent && (
                              <span className="rounded bg-red-100 px-1.5 py-0.2 text-[9px] font-bold text-red-700 animate-pulse">
                                New
                              </span>
                            )}
                          </div>
                          <h4 className="mt-1 text-xs font-bold text-[#142923] group-hover:text-[#0e382e] transition-colors line-clamp-2">
                            {notice.title}
                          </h4>
                        </div>
                      </div>

                      <a
                        href={notice.pdfUrl || "#"}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Simulating document download for: ${notice.title}`);
                        }}
                        className="inline-flex items-center gap-1 rounded border border-border bg-white px-2 py-1 text-[10px] font-semibold text-[#07211a] hover:bg-[#eaf0ee] shrink-0 shadow-2xs"
                      >
                        <Download className="size-3 text-[#c59a53]" />
                        <span>PDF</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#556962]">
                  Updated daily by Academic Council
                </span>
                <Link
                  href="/admission"
                  className="font-bold text-[#0e382e] hover:text-[#c59a53] inline-flex items-center gap-1 text-xs"
                >
                  <span>View All Circulars</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Section 2: Headmaster's Desk Snippet (Col 3) */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-border/70">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c59a53] text-[#07211a]">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#07211a]">
                      Headmaster&apos;s Desk
                    </h3>
                    <p className="text-[11px] text-[#556962]">From the Leadership</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0e382e] text-[#c59a53] font-bold text-sm shrink-0 border border-[#c59a53]/40">
                    PM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#07211a]">
                      Sri Prabir Kumar Mondal
                    </h4>
                    <p className="text-[10px] font-semibold text-[#0e382e]">
                      Headmaster &amp; Secretary
                    </p>
                    <p className="text-[10px] text-[#697f78]">DDKKHA (H.S.)</p>
                  </div>
                </div>

                <blockquote className="mt-4 text-xs italic text-[#4b6058] leading-relaxed border-l-2 border-[#c59a53] pl-3 py-0.5">
                  &ldquo;Our vision is to provide every boy an environment where academic curiosity thrives hand-in-hand with moral fortitude, discipline, and scientific inquiry.&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60">
                <Link
                  href="/about"
                  className="text-xs font-bold text-[#0e382e] hover:text-[#c59a53] inline-flex items-center gap-1"
                >
                  <span>Read Full Message &amp; History</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Section 3: Essential Portals & Quick Services (Col 3) */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-border/70">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0e382e] text-white">
                    <ExternalLink className="size-4 text-[#c59a53]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#07211a]">
                      Quick Gateways
                    </h3>
                    <p className="text-[11px] text-[#556962]">Portals &amp; Forms</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2.5">
                  <Link
                    href="/admission"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/80 bg-[#f8faf9] hover:border-[#c59a53] hover:bg-white transition-all text-xs font-semibold text-[#07211a] group"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="size-3.5 text-[#0e382e] group-hover:text-[#c59a53]" />
                      <span>Class XI Admission Form</span>
                    </div>
                    <ChevronRight className="size-3.5 text-[#7c948c] group-hover:text-[#0e382e]" />
                  </Link>

                  <Link
                    href="/admission#class-v"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/80 bg-[#f8faf9] hover:border-[#c59a53] hover:bg-white transition-all text-xs font-semibold text-[#07211a] group"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-3.5 text-[#0e382e] group-hover:text-[#c59a53]" />
                      <span>Class V Lottery Portal</span>
                    </div>
                    <ChevronRight className="size-3.5 text-[#7c948c] group-hover:text-[#0e382e]" />
                  </Link>

                  <a
                    href={siteConfig.externalPortals.banglarShiksha}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/80 bg-[#f8faf9] hover:border-[#c59a53] hover:bg-white transition-all text-xs font-semibold text-[#07211a] group"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink className="size-3.5 text-[#0e382e] group-hover:text-[#c59a53]" />
                      <span>Banglar Shiksha Portal</span>
                    </div>
                    <ExternalLink className="size-3 text-[#7c948c]" />
                  </a>

                  <Link
                    href="/staff-member"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/80 bg-[#f8faf9] hover:border-[#c59a53] hover:bg-white transition-all text-xs font-semibold text-[#07211a] group"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="size-3.5 text-[#0e382e] group-hover:text-[#c59a53]" />
                      <span>Faculty &amp; Staff Directory</span>
                    </div>
                    <ChevronRight className="size-3.5 text-[#7c948c] group-hover:text-[#0e382e]" />
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60 text-[11px] text-[#556962] flex items-center gap-1.5">
                <Clock className="size-3 text-[#c59a53]" />
                <span>Office: 10:30 AM – 4:30 PM (Mon-Fri)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
