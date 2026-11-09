"use client";

import { useState } from "react";
import { schoolData, type FacultyMember } from "@/config/school-data";
import { Search, GraduationCap, Briefcase, Filter, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FacultyDirectory() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const departments = [
    "All",
    "Leadership",
    "Science & Mathematics",
    "Humanities & Social Sciences",
    "Languages & Literature",
    "ICT & Computer Science",
    "Non-Teaching & Support",
  ];

  const filteredFaculty = schoolData.facultyMembers.filter((staff) => {
    const matchesDept =
      selectedDept === "All" || staff.department === selectedDept;
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between rounded-xl border border-border bg-card p-4 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by faculty name, designation, or subject..."
            className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        {/* Department Filter Count */}
        <div className="text-xs text-muted-foreground shrink-0 flex items-center gap-1.5">
          <UserCheck className="size-4 text-primary" />
          <span>Showing <strong className="text-foreground">{filteredFaculty.length}</strong> staff members</span>
        </div>
      </div>

      {/* Department Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        <span className="flex items-center gap-1 font-semibold text-muted-foreground shrink-0 pr-1">
          <Filter className="size-3" /> Department:
        </span>
        {departments.map((dept) => (
          <button
            key={dept}
            type="button"
            onClick={() => setSelectedDept(dept)}
            className={`rounded-full px-3 py-1 font-medium transition-colors shrink-0 ${
              selectedDept === dept
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((staff: FacultyMember) => (
            <Card
              key={staff.id}
              className={`group transition-all hover:border-primary/50 hover:shadow-sm ${
                staff.isLeadership
                  ? "border-primary/40 bg-gradient-to-b from-primary/[0.03] to-card"
                  : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-base transition-transform group-hover:scale-105">
                    {staff.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  {staff.isLeadership && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">
                      Head of School
                    </span>
                  )}
                </div>
                <CardTitle className="pt-3 text-base font-bold text-foreground">
                  {staff.name}
                </CardTitle>
                <p className="text-xs font-semibold text-primary">{staff.designation}</p>
              </CardHeader>
              <CardContent className="space-y-2 border-t border-border/40 pt-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-foreground">Department:</span>
                  <span>{staff.department}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <GraduationCap className="size-3.5 shrink-0 text-primary mt-0.5" />
                  <span>{staff.qualification}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="size-3.5 shrink-0 text-muted-foreground" />
                  <span>{staff.experience}</span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-xs text-muted-foreground rounded-xl border border-dashed border-border">
            No faculty or staff found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

