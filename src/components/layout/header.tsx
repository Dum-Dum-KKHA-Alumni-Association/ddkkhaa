"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  Menu,
  X,
  GraduationCap,
  Phone,
  Mail,
  ExternalLink,
  LogIn,
  FileText,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. Very Top Utility Bar (Dark Forest/Black) */}
      <div className="bg-[#07211a] py-1.5 text-[11px] text-[#b8ccc5] border-b border-[#12382e]">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Contact & Codes */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="size-3 text-[#c59a53]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-[#1e483d] hidden sm:inline">•</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="size-3 text-[#c59a53]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="text-[#1e483d] hidden md:inline">•</span>
            <span className="hidden md:inline rounded bg-[#103a30] px-1.5 py-0.2 text-[10px] text-[#e0ece8]">
              U-DISE: {siteConfig.affiliation.udise}
            </span>
            <span className="text-[#1e483d] hidden md:inline">•</span>
            <span className="hidden md:inline rounded bg-[#103a30] px-1.5 py-0.2 text-[10px] text-[#e0ece8]">
              H.S. Code: {siteConfig.affiliation.hsCode}
            </span>
          </div>

          {/* External Gov / Alumni Portals */}
          <div className="hidden lg:flex items-center space-x-5 text-[11px]">
            <a
              href={siteConfig.externalPortals.banglarShiksha}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-[#c59a53]"
            >
              <span>Banglar Shiksha Portal</span>
              <ExternalLink className="size-2.5" />
            </a>
            <span className="text-[#1e483d]">•</span>
            <Link
              href="/about#alumni"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Alumni Association (DDKKHAAA)</span>
              <ExternalLink className="size-2.5 text-[#c59a53]" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Middle Identity Header Bar (Clean White) */}
      <div className="bg-white py-3 border-b border-border/80">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            {/* School Crest Emblem */}
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[#c59a53] shadow-sm transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/images/school/cropped-ddkkha_icon.jpg"
                alt="DDKKHA Crest"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title Hierarchy */}
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl font-bold tracking-tight text-[#07211a] leading-tight">
                {siteConfig.fullName}
              </h1>
              <p className="text-[11px] sm:text-xs font-medium text-[#486057] mt-0.5">
                {siteConfig.tagline}
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#a07736] uppercase mt-0.5">
                {siteConfig.subTagline}
              </p>
            </div>
          </Link>

          {/* Right Header Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/admission"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-[#c59a53] px-4 text-xs font-bold text-[#07211a] shadow-xs hover:bg-[#b58b45] transition-colors"
            >
              <FileText className="size-3.5" />
              <span>Admission Portal</span>
            </Link>
            <Link
              href="#teacher-login"
              onClick={(e) => {
                e.preventDefault();
                alert("Teacher & Admin Portal: Secure login gateway for faculty marks entry and attendance.");
              }}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-white px-3.5 text-xs font-semibold text-[#07211a] hover:bg-[#f4f6f5] transition-colors shadow-2xs"
            >
              <LogIn className="size-3.5 text-[#556962]" />
              <span>Teacher Login</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0e382e] hover:bg-[#f0f3f2] xl:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* 3. Lower Navigation Bar (Deep Forest Green #0e382e) */}
      <div className="bg-[#0e382e] border-b border-[#08241d]">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Main Navigation Items */}
          <nav className="hidden xl:flex items-center space-x-1 py-1">
            {siteConfig.mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2.5 text-xs font-semibold tracking-wide transition-colors uppercase text-[#e2ede9] hover:text-[#c59a53]",
                    isActive && "text-[#c59a53]"
                  )}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59a53]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Floating Quick Action Buttons in Nav */}
          <div className="hidden xl:flex items-center space-x-2 py-1.5">
            <Link
              href="/admission"
              className="inline-flex items-center gap-1.5 rounded bg-[#c59a53] px-3 py-1.5 text-[11px] font-bold text-[#07211a] hover:bg-[#b88c44] transition-colors"
            >
              <FileText className="size-3" />
              <span>Admission Portal (Online Form)</span>
            </Link>
            <Link
              href="#admin-portal"
              onClick={(e) => {
                e.preventDefault();
                alert("Teacher Login / Admin Portal gateway for school staff.");
              }}
              className="inline-flex items-center gap-1.5 rounded border border-[#1e5849] bg-[#092b23] px-3 py-1.5 text-[11px] font-semibold text-[#d6e5e0] hover:bg-[#103a30] transition-colors"
            >
              <UserCheck className="size-3 text-[#c59a53]" />
              <span>Teacher Login / Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="bg-[#0e382e] text-white px-4 py-4 xl:hidden border-b border-[#061d17] shadow-xl">
          <div className="pb-3 border-b border-[#1b4b3f] text-xs">
            <p className="font-bold text-[#c59a53]">{siteConfig.fullName}</p>
            <p className="text-[11px] text-[#b4ccc4] mt-0.5">Motijheel, Dum Dum, Kolkata – 700074</p>
          </div>
          <nav className="mt-3 flex flex-col space-y-1">
            {siteConfig.mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors",
                    isActive
                      ? "bg-[#164e41] text-[#c59a53]"
                      : "text-[#d6e5e0] hover:bg-[#124237]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#1b4b3f] space-y-2">
              <Link
                href="/admission"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded bg-[#c59a53] py-2 text-xs font-bold text-[#07211a]"
              >
                Admission Portal (Online Form)
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  alert("Teacher Login / Admin Portal");
                }}
                className="flex w-full items-center justify-center rounded border border-[#1e5849] bg-[#092b23] py-2 text-xs font-semibold text-[#d6e5e0]"
              >
                Teacher Login / Admin Portal
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
