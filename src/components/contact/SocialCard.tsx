import type { SocialItem } from "@/data/socials";

interface SocialCardProps {
  social: SocialItem;
}

export default function SocialCard({ social }: SocialCardProps) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Buka ${social.name}`}
      className="group flex h-full flex-col justify-center rounded-3xl border border-line bg-snow p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
    >
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{social.name}</h3>
      <p className="text-sm text-muted">{social.handle}</p>
    </a>
  );
}