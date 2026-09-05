"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink" onClick={() => setOpen(false)}>
          {profile.brand}
          <span className="text-muted">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-ink text-paper"
                  : "text-muted hover:bg-snow hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="rounded-xl border border-line p-2 text-ink transition-colors hover:bg-snow md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-ink text-paper"
                    : "text-muted hover:bg-snow hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}