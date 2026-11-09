import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty & Staff Members",
  description:
    "Meet the qualified educators, department heads, and administrative staff at DDKKHAA.",
};

export default function StaffMemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

