"use client";

import Link from "next/link";
import { useLocale } from "@/lib/context";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-olive-900 text-olive-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              El Olivo
            </h3>
            <p className="text-olive-300 text-sm leading-relaxed">
              Casa Rural El Olivo
              <br />
              Alt Empordà, Girona
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-white mb-3 text-sm uppercase tracking-wider">
              {t.nav.home}
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-olive-300 hover:text-white text-sm transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/habitaciones"
                className="text-olive-300 hover:text-white text-sm transition-colors"
              >
                {t.nav.rooms}
              </Link>
              <Link
                href="/reservas"
                className="text-olive-300 hover:text-white text-sm transition-colors"
              >
                {t.nav.reservations}
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-olive-300 hover:text-white text-sm transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contacto"
                className="text-olive-300 hover:text-white text-sm transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-white mb-3 text-sm uppercase tracking-wider">
              {t.nav.contact}
            </h4>
            <div className="flex flex-col gap-2 text-olive-300 text-sm">
              <span>{t.contact.phone}</span>
              <span>WhatsApp: {t.contact.whatsapp}</span>
              <span>{t.contact.email_addr}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-olive-800 mt-8 pt-8 text-center">
          <p className="text-olive-400 text-sm">
            © {new Date().getFullYear()} Casa Rural El Olivo. {t.footer.rights}
          </p>
          <p className="text-olive-500 text-xs mt-2">{t.footer.demo_note}</p>
        </div>
      </div>
    </footer>
  );
}
