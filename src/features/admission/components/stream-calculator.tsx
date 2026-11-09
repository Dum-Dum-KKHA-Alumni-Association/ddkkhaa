"use client";

import { useState } from "react";
import { schoolData, type StreamItem } from "@/config/school-data";
import { CheckCircle2, AlertCircle, Sparkles, BookOpen } from "lucide-react";

export function StreamCalculator() {
  const [selectedStreamId, setSelectedStreamId] = useState<string>("science");
  const [enteredPercentage, setEnteredPercentage] = useState<string>("");

  const activeStream: StreamItem =
    schoolData.admissionStreams.find((s) => s.id === selectedStreamId) ||
    schoolData.admissionStreams[0];

  const pct = parseFloat(enteredPercentage);
  const hasEntered = !isNaN(pct) && pct > 0 && pct <= 100;

  const isEligible = () => {
    if (!hasEntered) return null;
    if (selectedStreamId === "science") return pct >= 75;
    if (selectedStreamId === "commerce") return pct >= 60;
    if (selectedStreamId === "humanities") return pct >= 50;
    return false;
  };

  const eligibleStatus = isEligible();

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center gap-2">
        <Sparkles className="size-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">
          Class XI Stream Combinations & Eligibility Checker
        </h3>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Select your intended stream and check subject combinations approved under WBCHSE.
      </p>

      {/* Stream Tabs */}
      <div className="mt-6 flex flex-wrap gap-2 border-b border-border/60 pb-4">
        {schoolData.admissionStreams.map((stream) => (
          <button
            key={stream.id}
            type="button"
            onClick={() => setSelectedStreamId(stream.id)}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              selectedStreamId === stream.id
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {stream.name.split("(")[0].trim()}
          </button>
        ))}
      </div>

      {/* Stream Details */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: Stream Info & Eligibility Check */}
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-bold text-foreground">
              {activeStream.name}
            </h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {activeStream.description}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Available Seats:</span>
              <span className="font-bold text-foreground">{activeStream.seats} Seats</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <span className="text-muted-foreground">Minimum Requirement:</span>
              <span className="font-semibold text-right text-foreground">
                {activeStream.eligibilityMarks}
              </span>
            </div>
          </div>

          {/* Calculator Input */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
            <label htmlFor="percentageInput" className="text-xs font-semibold text-foreground block">
              Check Your Eligibility (Enter Madhyamik Aggregate %):
            </label>
            <div className="flex gap-2">
              <input
                id="percentageInput"
                type="number"
                min="0"
                max="100"
                step="0.1"
                placeholder="e.g. 78.5"
                value={enteredPercentage}
                onChange={(e) => setEnteredPercentage(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {hasEntered && (
              <div
                className={`flex items-start gap-2.5 rounded-lg p-3 text-xs ${
                  eligibleStatus
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                {eligibleStatus ? (
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold">
                    {eligibleStatus
                      ? `Eligible for ${activeStream.name}!`
                      : `Criteria not met for ${activeStream.name}`}
                  </p>
                  <p className="mt-0.5 text-[11px]">
                    {eligibleStatus
                      ? "You meet the standard cutoff criteria. You may submit your online admission inquiry below."
                      : `Minimum required aggregate is ${
                          selectedStreamId === "science"
                            ? "75%"
                            : selectedStreamId === "commerce"
                            ? "60%"
                            : "50%"
                        }. You may explore other streams or contact the admission cell.`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Subject Combinations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-primary" />
            <h4 className="text-sm font-bold text-foreground">
              Approved Subject Combinations (WBCHSE)
            </h4>
          </div>

          {/* Compulsory */}
          <div className="rounded-xl border border-border p-4 bg-card">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              1. Compulsory Language Papers
            </span>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {activeStream.compulsorySubjects.map((sub, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Electives */}
          <div className="rounded-xl border border-border p-4 bg-card">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              2. Elective Subject Combinations (Choose 3 Main + 1 Optional)
            </span>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              {activeStream.electiveSubjects.map((sub, i) => (
                <li key={i} className="flex items-center gap-2 rounded bg-muted/50 p-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  <span className="font-medium text-foreground">{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

