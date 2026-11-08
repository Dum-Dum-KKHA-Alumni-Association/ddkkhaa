import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & History",
  description:
    "Learn about the foundation, history, mission, vision, campus infrastructure, and legacy of DDKKHAA.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

