import Image from "next/image";
import Link from "next/link";
import { profile, toolsMarquee } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">
            Hi, I'm
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.shortName}
          </h1>
          <p className="mt-4 text-base font-medium text-muteddark">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muteddark">
            Building modern, clean, and responsive web experiences.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-linedark px-6 py-3.5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-coal"
            >
              Contact Me
            </Link>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muteddark">
            {profile.city}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-linedark" />
          <div aria-hidden className="absolute -bottom-8 -left-8 h-28 w-28 rounded-3xl bg-coal" />
          <span aria-hidden className="absolute -top-10 right-10 text-2xl text-muteddark">+</span>
          <div className="relative flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-linedark bg-coal">
            <Image
              src="/photo_profile.jpg"
              alt="Profile photo of Muhammad Nabil Makarim Rofi'i"
              width={736}
              height={736}
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
      <div className="border-t border-linedark py-6">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max">
            <div className="flex w-max items-center">
              {toolsMarquee.map((tool) => (
                <span key={tool} className="flex items-center">
                  <span className="px-6 text-xs font-medium uppercase tracking-[0.25em] text-muteddark">
                    {tool}
                  </span>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-linedark" />
                </span>
              ))}
            </div>
            <div aria-hidden className="flex w-max items-center">
              {toolsMarquee.map((tool) => (
                <span key={`${tool}-dup`} className="flex items-center">
                  <span className="px-6 text-xs font-medium uppercase tracking-[0.25em] text-muteddark">
                    {tool}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-linedark" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}