import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Explore admission procedures, eligibility criteria, required documents, key dates, and submit an online inquiry for DDKKHAA.",
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

