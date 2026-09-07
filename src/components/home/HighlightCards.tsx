import Link from "next/link";
import { ArrowUpRight, Code, Images, RocketLaunch } from "@phosphor-icons/react/ssr";
import { skillGroups } from "@/data/profile";
import { galleryItems } from "@/data/gallery";

type HighlightCard = {
  index: string;
  label: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  href: string;
  cta: string;
  icon: typeof Code;
  accent?: boolean;
};

export default function HighlightCards() {
  const totalSkills = skillGroups.reduce((acc, group) => acc + group.skills.length, 0);
  const totalProjects = galleryItems.filter((item) => item.category === "Proyek").length;
  const totalItems = galleryItems.length;

  const cards: HighlightCard[] = [
    {
      index: "01",
      label: "Karya",
      title: "Proyek Terbaru",
      description: `${totalProjects} proyek pengerjaan mulai dari website hingga aplikasi mobile sebagai bukti belajar.`,
      stat: String(totalProjects),
      statLabel: "proyek terdokumentasi",
      href: "/gallery",
      cta: "Lihat proyek",
      icon: RocketLaunch,
      accent: true,
    },
    {
      index: "02",
      label: "Kemampuan",
      title: "Skill & Tools",
      description: `${totalSkills} teknologi yang aku pelajari, dari HTML hingga Firebase, terus bertambah seiring waktu.`,
      stat: String(totalSkills),
      statLabel: "teknologi dipelajari",
      href: "/about",
      cta: "Kenali kemampuan",
      icon: Code,
    },
    {
      index: "03",
      label: "Dokumentasi",
      title: "Gallery",
      description: `${totalItems} karya terkumpul dalam satu galeri, mencakup proyek, prestasi, dan keikutsertaan.`,
      stat: String(totalItems),
      statLabel: "karya terkumpul",
      href: "/gallery",
      cta: "Buka galeri",
      icon: Images,
    },
  ];

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Sorotan</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Sekilas tentang saya
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className={[
                  "group relative flex h-full flex-col rounded-3xl border p-6 transition-colors duration-300 motion-reduce:transition-none md:p-7",
                  card.accent
                    ? "border-linedark bg-ink text-paper md:row-span-2 md:justify-between"
                    : "border-line bg-snow text-ink",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "inline-flex items-center justify-center rounded-2xl border transition-colors duration-300",
                      card.accent
                        ? "h-12 w-12 border-linedark bg-coal text-paper group-hover:border-paper"
                        : "h-10 w-10 border-line bg-paper text-ink group-hover:border-ink",
                    ].join(" ")}
                  >
                    <Icon
                      className={card.accent ? "h-6 w-6" : "h-5 w-5"}
                      weight="duotone"
                    />
                  </span>
                  <span
                    className={[
                      "font-display text-xs font-semibold tracking-[0.25em] transition-colors duration-300",
                      card.accent
                        ? "text-muteddark group-hover:text-paper"
                        : "text-muted group-hover:text-ink",
                    ].join(" ")}
                  >
                    {card.index}
                  </span>
                </div>

                <div
                  className={[
                    "flex flex-1 flex-col justify-center",
                    card.accent ? "mt-8 md:mt-12" : "mt-8",
                  ].join(" ")}
                >
                  <div className="flex items-end gap-3">
                    <span
                      className={[
                        "font-display font-semibold leading-none tracking-tight",
                        card.accent
                          ? "text-6xl md:text-7xl"
                          : "text-4xl md:text-5xl",
                      ].join(" ")}
                    >
                      {card.stat}
                    </span>
                    <span
                      className={[
                        "pb-0.5 text-sm font-medium leading-snug",
                        card.accent ? "text-muteddark" : "text-muted",
                      ].join(" ")}
                    >
                      {card.statLabel}
                    </span>
                  </div>
                  <h3
                    className={[
                      "mt-4 font-display font-semibold tracking-tight",
                      card.accent
                        ? "text-2xl md:text-3xl"
                        : "text-lg md:text-xl",
                    ].join(" ")}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={[
                      "mt-2 max-w-sm leading-relaxed",
                      card.accent
                        ? "text-base text-muteddark md:text-lg"
                        : "text-sm text-muted",
                    ].join(" ")}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  className={
                    card.accent
                      ? "mt-auto pt-6 md:pt-10"
                      : "mt-auto pt-6 md:pt-8"
                  }
                >
                  <div
                    className={[
                      "flex items-center justify-between border-t pt-4",
                      card.accent ? "border-linedark" : "border-line",
                    ].join(" ")}
                  >
                    <span className="text-sm font-semibold">{card.cta}</span>
                    <span
                      className={[
                        "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300",
                        card.accent
                          ? "border-linedark text-paper group-hover:border-paper group-hover:bg-paper group-hover:text-ink"
                          : "border-line text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-paper",
                      ].join(" ")}
                    >
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
                        weight="bold"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
