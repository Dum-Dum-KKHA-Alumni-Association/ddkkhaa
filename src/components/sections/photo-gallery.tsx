"use client";

import { useState } from "react";
import { schoolData, type GalleryItem } from "@/config/school-data";
import { Camera, Image as ImageIcon, Filter } from "lucide-react";

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Campus", "Academics", "Sports", "Cultural"];

  const filteredItems = schoolData.gallery.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Camera className="size-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Campus Life & Infrastructure Gallery
            </h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            A glimpse into the daily life, laboratories, and events at Dum Dum Krishna Kumar Hindu Academy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="flex items-center gap-1 font-semibold text-muted-foreground shrink-0 pr-1">
            <Filter className="size-3" />
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 font-medium transition-colors shrink-0 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of gallery cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item: GalleryItem) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
          >
            {/* Visual Thumbnail Placeholder with subtle gradient */}
            <div className="relative flex h-48 w-full items-center justify-center bg-gradient-to-tr from-muted via-muted/60 to-primary/5 transition-transform group-hover:scale-[1.02]">
              <div className="flex flex-col items-center gap-2 text-muted-foreground/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-xs">
                  <ImageIcon className="size-6 text-primary" />
                </div>
                <span className="text-[11px] font-semibold text-foreground/70">
                  {item.category} Photography
                </span>
              </div>
              <span className="absolute top-3 left-3 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-bold text-primary shadow-xs">
                {item.category}
              </span>
            </div>

            <div className="p-4">
              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

