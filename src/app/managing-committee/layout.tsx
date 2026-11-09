import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managing Committee & Governance",
  description:
    "Learn about the governing body, executive committee members, and leadership overseeing DDKKHAA.",
};

export default function ManagingCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

