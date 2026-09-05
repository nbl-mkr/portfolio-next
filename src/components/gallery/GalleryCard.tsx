import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-snow border border-line flex items-center justify-center p-4 text-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover absolute inset-0"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
        <span className="text-xs font-medium text-muted">
          {item.title}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        <span>{item.category}</span>
        <span>{item.year}</span>
      </div>
      <h3 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-line bg-snow px-3 py-1 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}