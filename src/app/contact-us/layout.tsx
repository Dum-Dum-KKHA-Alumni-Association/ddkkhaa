import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location",
  description:
    "Get in touch with Dum Dum Krishna Kumar Hindu Academy. Campus address, telephone, office timings, public transit directions, and contact inquiry form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

