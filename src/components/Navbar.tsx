"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/context";
import { locales, localeNames, Locale } from "@/lib/i18n";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On non-home pages, always show solid background
  const solid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/habitaciones", label: t.nav.rooms },
    { href: "/reservas", label: t.nav.reservations },
    { href: "/sobre-nosotros", label: t.nav.about },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-warm-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`font-serif text-2xl font-bold transition-colors ${
                solid ? "text-olive-800" : "text-white"
              }`}
            >
              El Olivo
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-olive-600 ${
                  solid ? "text-stone-custom-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  solid ? "text-stone-custom-700" : "text-white/90"
                }`}
                aria-label="Change language"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  <path
                    strokeWidth="1.5"
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"
                  />
                </svg>
                <span>{locale.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-1 min-w-[120px]">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLocale(l as Locale);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-olive-50 ${
                        locale === l
                          ? "text-olive-700 font-medium"
                          : "text-stone-custom-600"
                      }`}
                    >
                      {localeNames[l as Locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                solid ? "text-olive-800" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-warm-white rounded-b-2xl shadow-lg pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-stone-custom-700 hover:text-olive-600 hover:bg-olive-50 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2 border-t border-stone-custom-100 mt-2">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l as Locale);
                    setMobileOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-sm ${
                    locale === l
                      ? "text-olive-700 font-medium"
                      : "text-stone-custom-500"
                  }`}
                >
                  {localeNames[l as Locale]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
