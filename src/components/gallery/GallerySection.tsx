"use client";

import { useState } from "react";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import GalleryCard from "@/components/gallery/GalleryCard";

const filters = ["Semua", "Proyek", "Prestasi", "Keikutsertaan"] as const;

type Filter = (typeof filters)[number];

export default function GallerySection() {
  const [active, setActive] = useState<Filter>("Semua");

  const filtered =
    active === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === (active as GalleryCategory));

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active === filter
                    ? "bg-ink text-paper"
                    : "border border-line bg-paper text-muted hover:bg-snow hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted">
            {filtered.length} entri ditampilkan
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}