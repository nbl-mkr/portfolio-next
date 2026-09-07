import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import SocialCard from "@/components/contact/SocialCard";

export default function ContactSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col rounded-3xl bg-ink p-8 text-paper md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Mari terhubung dan bekerja sama
          </h2>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muteddark">
            Terbuka untuk diskusi, kolaborasi proyek, maupun kesempatan magang.
            Kirim pesan lewat email atau sapa saya melalui media sosial di samping.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-paper bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-transparent hover:bg-coal hover:text-paper motion-reduce:transition-none"
          >
            {profile.email}
          </a>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muteddark">
            {profile.city}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {socials.map((social) => (
            <SocialCard key={social.name} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}