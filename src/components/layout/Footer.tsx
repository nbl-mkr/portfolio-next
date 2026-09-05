import Link from "next/link";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:gap-24 px-6 py-16">
        <div className="max-w-sm">
          <p className="font-display text-lg font-bold tracking-tight">
            {profile.brand}
            <span className="text-muteddark">.</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muteddark">
            Portofolio pribadi {profile.name}, siswa {profile.school} jurusan {profile.major}.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors hover:text-muteddark"
          >
            {profile.email}
          </a>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">Links</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper transition-colors hover:text-muteddark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">Status</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-paper">
            <li>Vocational Student (RPL)</li>
            <li className="text-muteddark">{profile.school}</li>
            <li className="text-muteddark">{profile.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linedark">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muteddark sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.shortName}. All rights reserved.</p>
          <p>Dibangun dengan Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}