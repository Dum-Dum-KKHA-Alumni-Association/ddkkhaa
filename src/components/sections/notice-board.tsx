"use client";

import { useState } from "react";
import Image from "next/image";
import { schoolData, type NoticeItem } from "@/config/school-data";
import {
  Bell,
  Calendar,
  Download,
  Search,
  CheckCircle,
  FileText,
  X,
  ExternalLink,
} from "lucide-react";

export function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Notices");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalNotice, setActiveModalNotice] = useState<NoticeItem | null>(null);

  const categories = [
    "All Notices",
    "Admissions",
    "Examinations",
    "Scholarships",
    "Academic",
    "General",
  ];

  const filteredNotices = schoolData.notices.filter((notice) => {
    const matchesCategory =
      selectedCategory === "All Notices" || notice.category === selectedCategory;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (notice.description &&
        notice.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="notices" className="space-y-6 scroll-mt-20">
      {/* Section Header matching reference */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c59a53]">
          Official Announcements
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#07211a]">
          Institutional Notice Board
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#5a6f68]">
          Categorised bulletins, examination timetables, and verified admission announcements.
        </p>
      </div>

      {/* Main Notice Board Container */}
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-border/70">
          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded px-3.5 py-1.5 text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0e382e] text-white shadow-xs"
                    : "bg-[#f2f6f4] text-[#4d635c] hover:bg-[#e3ece9] hover:text-[#07211a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-2.5 size-4 text-[#758a82]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notices by title or keyword..."
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-xs text-[#07211a] placeholder:text-[#80968e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a53]"
            />
          </div>
        </div>

        {/* Status Count Line */}
        <div className="flex items-center justify-between py-4 text-xs border-b border-border/50">
          <span className="rounded bg-[#0e382e]/10 px-2.5 py-1 text-xs font-bold text-[#0e382e]">
            {filteredNotices.length} Notice{filteredNotices.length !== 1 ? "s" : ""} Listed
          </span>
          <span className="text-[11px] text-[#6d827a]">
            Session &amp; publication dates preserved from institutional archives
          </span>
        </div>

        {/* Notice Cards List */}
        <div className="divide-y divide-border/60">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <article
                key={notice.id}
                className={`py-5 transition-colors hover:bg-[#f9fbfa] px-3 rounded-xl my-1 ${
                  notice.isUrgent ? "border-l-4 border-l-[#c59a53] bg-[#fffdfa]" : ""
                }`}
              >
                {/* Meta Strip */}
                <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                      notice.category === "Admissions"
                        ? "bg-[#c59a53]/20 text-[#835b1c]"
                        : "bg-[#0e382e]/10 text-[#0e382e]"
                    }`}
                  >
                    {notice.category}
                  </span>

                  <span className="text-[11px] text-[#5e736b] flex items-center gap-1 font-medium">
                    <Calendar className="size-3 text-[#c59a53]" />
                    <span>Published: {notice.date}</span>
                  </span>

                  {notice.applicable && (
                    <span className="text-[11px] text-[#5e736b]">
                      • Applicable: <strong className="text-[#07211a]">{notice.applicable}</strong>
                    </span>
                  )}

                  {notice.verifiedTag && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#e8f3ee] px-2 py-0.5 text-[10px] font-bold text-[#1b633a]">
                      <CheckCircle className="size-2.5" />
                      <span>{notice.verifiedTag}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#07211a] hover:text-[#0e382e] transition-colors leading-snug">
                  {notice.title}
                </h3>

                {/* Description */}
                {notice.description && (
                  <p className="mt-1 text-xs text-[#556962] leading-relaxed">
                    {notice.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalNotice(notice)}
                    className="inline-flex items-center gap-1.5 rounded border border-border bg-white px-3 py-1.5 text-xs font-semibold text-[#07211a] hover:bg-[#f2f6f4] shadow-2xs transition-colors"
                  >
                    <FileText className="size-3 text-[#556962]" />
                    <span>View Details</span>
                  </button>

                  {notice.pdfUrl && (
                    <a
                      href={notice.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-1.5 rounded bg-[#0e382e] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#154a3e] shadow-2xs transition-colors"
                    >
                      <Download className="size-3 text-[#c59a53]" />
                      <span>Attachment</span>
                    </a>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="py-12 text-center text-xs text-[#6e857d]">
              No notices match the selected category or search keyword.
            </div>
          )}
        </div>
      </div>

      {/* Notice Detail Modal / Lightbox */}
      {activeModalNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalNotice(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-[#486057] hover:bg-[#eaf0ee] transition-colors"
              aria-label="Close dialog"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="rounded bg-[#0e382e]/10 px-2 py-0.5 text-xs font-bold text-[#0e382e]">
                {activeModalNotice.category}
              </span>
              <span className="text-xs text-[#5e736b]">
                {activeModalNotice.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#07211a]">
              {activeModalNotice.title}
            </h3>

            {activeModalNotice.applicable && (
              <p className="mt-1 text-xs text-[#5e736b]">
                Target Cohort: <strong className="text-[#07211a]">{activeModalNotice.applicable}</strong>
              </p>
            )}

            <div className="mt-4 rounded-xl border border-border bg-[#f8faf9] p-4 text-xs text-[#4b6058] leading-relaxed">
              <p>{activeModalNotice.description}</p>
            </div>

            {/* Embedded Attachment Preview if available */}
            {activeModalNotice.pdfUrl && (
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold text-[#07211a] block">
                  Official Scanned Circular Attachment:
                </span>
                <div className="relative aspect-[3/4] max-h-96 w-full rounded-xl border border-border overflow-hidden bg-black/5">
                  <Image
                    src={activeModalNotice.pdfUrl}
                    alt={activeModalNotice.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="pt-2 flex justify-end gap-2">
                  <a
                    href={activeModalNotice.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded bg-[#0e382e] px-4 py-2 text-xs font-bold text-white hover:bg-[#164e41]"
                  >
                    <Download className="size-3.5 text-[#c59a53]" />
                    <span>Download Scanned Document</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
