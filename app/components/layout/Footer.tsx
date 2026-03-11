import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">
        {/* Logo + Kurztext */}
        <div>
          <Image
            src="/logo.png"
            alt="ISARTAL"
            width={200}
            height={60}
            className="mb-4"
          />

          <p className="text-gray-600">
            Elektrotechnik, Trockenbau und Baustellenservice in München
            und Umgebung. Strukturierte Umsetzung und zuverlässige
            Projektabläufe.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Navigation
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li><Link href="/">Start</Link></li>
            <li><Link href="/elektrotechnik">Elektrotechnik</Link></li>
            <li><Link href="/trockenbau">Trockenbau</Link></li>
            <li><Link href="/baustellenservice">Baustellenservice</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        {/* Leistungen */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Leistungen
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Elektrotechnik</li>
            <li>Trockenbau & Innenausbau</li>
            <li>Baustellenservice</li>
            <li>Projektunterstützung</li>
          </ul>
        </div>

        {/* Kontakt + Rechtliches */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Kontakt
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Telefon: 0155 63005393</li>
            <li>E-Mail: info@isartal-muenchen.de</li>
            <li>München & Umgebung</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-8 mb-4">
            Rechtliches
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-sm py-6 text-gray-500">
  © {new Date().getFullYear()} ISARTAL Elektrotechnik & Innenausbau – München & Umgebung
  <div className="mt-2 space-x-4">
    <Link href="/impressum">Impressum</Link>
    <Link href="/datenschutz">Datenschutz</Link>
  </div>
</div>
    </footer>
  );
}