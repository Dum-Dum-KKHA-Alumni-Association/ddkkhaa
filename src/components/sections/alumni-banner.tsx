import Link from "next/link";
import { ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AlumniBanner() {
  return (
    <section className="bg-[#0e382e] text-white py-16 sm:py-20 border-y-4 border-[#c59a53]">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c59a53]/60 bg-[#164e41] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#dcb16a]">
          <Users className="size-3.5" />
          <span>Alumni Network &amp; Heritage</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          &ldquo;Connected by Our Heritage. United for Our Future.&rdquo;
        </h2>

        <p className="text-xs sm:text-base text-[#d1e2dc] leading-relaxed max-w-3xl mx-auto">
          Our alumni remain an essential cornerstone of the institution&apos;s legacy. Through the Alumni Association, former students reconnect, collaborate, mentor current batches, support infrastructure initiatives, and celebrate over nine decades of brotherhood.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#c59a53] text-[#07211a] hover:bg-[#b88c44] font-bold shadow-md"
            asChild
          >
            <Link href="/about#alumni">Explore Alumni Network</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/80 bg-transparent text-white hover:bg-white/10 font-semibold"
            asChild
          >
            <a
              href="https://ddkkhaaa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <span>Visit Official Alumni Portal (ddkkhaaa.org)</span>
              <ExternalLink className="size-4 text-[#c59a53]" />
            </a>
          </Button>
        </div>

        <p className="text-[11px] text-[#9ebcb2] pt-2">
          Official Body: Dum Dum Krishna Kumar Hindu Academy Alumni Association (DDKKHAAA)
        </p>
      </div>
    </section>
  );
}

