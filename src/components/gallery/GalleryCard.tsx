import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-colors duration-200 hover:border-ink motion-reduce:transition-none">
      <div className="relative aspect-video bg-snow">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
          {item.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <p className="mt-5 text-xs font-medium text-muted">
          {item.tags.join(", ")}
        </p>
      </div>
    </article>
  );
}
