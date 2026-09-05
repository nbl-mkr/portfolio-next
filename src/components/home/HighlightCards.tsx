import Link from "next/link";
import { skillGroups, journey } from "@/data/profile";
import { galleryItems } from "@/data/gallery";

export default function HighlightCards() {
  const totalSkills = skillGroups.reduce((acc, group) => acc + group.skills.length, 0);
  const totalProjects = galleryItems.filter((item) => item.category === "Proyek").length;

  const cards = [
    {
      title: "Skill & Tools",
      description: `${totalSkills} teknologi yang aku pelajari, dari HTML hingga Firebase, terus bertambah seiring waktu.`,
      href: "/about",
      cta: "Kenali kemampuan",
    },
    {
      title: "Proyek Terbaru",
      description: `${totalProjects} proyek pengerjaan mulai dari website hingga aplikasi mobile sebagai bukti belajar.`,
      href: "/gallery",
      cta: "Lihat proyek",
    },
    {
      title: "Perjalanan & Prestasi",
      description: `${journey.length} tonggak perjalanan dari pertama mengenal programming hingga membangun portfolio.`,
      href: "/about",
      cta: "Ikuti perjalanan",
    },
  ];

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Sorotan</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Sekilas tentang saya
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col rounded-3xl border border-line bg-snow p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                {card.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}