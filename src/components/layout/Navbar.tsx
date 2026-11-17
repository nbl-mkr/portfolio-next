"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Gallery", id: "gallery", href: "/#gallery" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const syncActiveSection = () => {
      setActiveSection(window.location.hash.slice(1) || "home");
    };

    syncActiveSection();
    window.addEventListener("hashchange", syncActiveSection);
    return () => window.removeEventListener("hashchange", syncActiveSection);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/#home"
          className="font-display text-lg font-bold tracking-tight text-ink"
          onClick={() => {
            setOpen(false);
            setActiveSection("home");
          }}
        >
          {profile.brand}
          <span className="text-muted">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === "/" && activeSection === item.id
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
                onClick={() => {
                  setOpen(false);
                  setActiveSection(item.id);
                }}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === "/" && activeSection === item.id
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