"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Start" },
  { href: "/elektrotechnik", label: "Elektrotechnik" },
  { href: "/trockenbau", label: "Trockenbau" },
  { href: "/baustellenservice", label: "Baustellenservice" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ISARTAL Logo"
            width={260}
            height={70}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-lg font-medium text-gray-700 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-blue-600"
            >
              {item.label}
             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span> 
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Button */}
        <div className="flex items-center gap-3">

          <Link
            href="/kontakt"
            className="hidden rounded-xl bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow md:inline-flex"
          >
            Angebot anfragen
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 md:hidden"
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">{open ? "×" : "☰"}</span>
          </button>

        </div>
      </div>

      {/* Mobile Menü */}
      {open ? (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-3 text-base">

              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-gray-900 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/kontakt"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                Angebot anfragen
              </Link>

            </div>
          </div>
        </div>
      ) : null}

    </header>
  );
}