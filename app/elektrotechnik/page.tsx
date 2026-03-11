import Image from "next/image";

export const metadata = {
  title: "Elektrotechnik in München | ISARTAL Elektrotechnik",
  description:
    "ISARTAL bietet moderne Elektrotechnik in München und Umgebung. Elektroinstallation, Zählerschränke, Smart Home, Netzwerktechnik und Beleuchtung für Neubau und Sanierung.",
};

const services = [
  {
    title: "Elektroinstallation",
    text: "Komplette Elektroinstallationen für Neubau, Umbau und Modernisierung mit klarer Struktur und sauberer Ausführung.",
  },
  {
    title: "Zählerschränke & Verteilungen",
    text: "Vorbereitung und Umsetzung von Hauptverteilungen, Unterverteilungen und Zählerschranklösungen für private und gewerbliche Objekte.",
  },
  {
    title: "Beleuchtung",
    text: "Moderne Lichtlösungen für Wohnräume, Gewerbeflächen und Außenbereiche mit funktionalem und hochwertigem Charakter.",
  },
  {
    title: "Smart Home",
    text: "Intelligente Gebäudetechnik und vorbereitete Systeme für mehr Komfort, Effizienz und moderne Steuerung.",
  },
  {
    title: "Netzwerktechnik",
    text: "Strukturierte Datenverkabelung und Netzwerktechnik für private und gewerbliche Anwendungen.",
  },
  {
    title: "Wallbox Vorbereitung",
    text: "Vorbereitung und technische Umsetzung für moderne Ladeinfrastruktur im privaten und gewerblichen Bereich.",
  },
];

const supportItems = [
  "Schlitzen & Stemmarbeiten",
  "Dosen setzen",
  "Leitungsverlegung",
  "Kabelzug",
  "Montageunterstützung",
  "Projektbezogene Teams",
];

export default function Elektrotechnik() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/hero-elektro.jpg"
          alt="Moderne Beleuchtung und Elektrotechnik"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
              Elektrotechnik
            </p>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Elektrotechnik in München & Umgebung
            </h1>

            <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-600" />

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Moderne Elektroinstallation, Beleuchtungssysteme und intelligente
              Gebäudetechnik für Neubau, Sanierung und anspruchsvolle
              Innenausbauprojekte.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+4915563005393"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Jetzt anrufen
              </a>
              <a
                href="/kontakt"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Leistung im Überblick
          </p>

          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Strukturierte Elektrotechnik für private und gewerbliche Projekte
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            ISARTAL realisiert moderne Elektrotechnik für Neubau, Sanierung und
            Modernisierung. Von der strukturierten Vorbereitung bis zur sauberen
            Umsetzung stehen Sicherheit, Qualität und verlässliche Abläufe im
            Fokus.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-1 w-12 rounded bg-blue-600" />
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
              <p className="leading-relaxed text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Planung & Struktur
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Durchdachte Elektroinstallation für Neubau und Sanierung
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Eine moderne Elektroinstallation beginnt mit klarer Planung,
              sinnvoller Leitungsführung und einer sauberen Struktur im Objekt.
              ISARTAL unterstützt bei der Vorbereitung und Umsetzung
              elektrotechnischer Arbeiten mit Blick auf Funktion, Sicherheit und
              spätere Erweiterbarkeit.
            </p>

            <p className="leading-relaxed text-gray-600">
              So entstehen Lösungen, die nicht nur technisch überzeugen,
              sondern auch im Alltag langfristig zuverlässig funktionieren.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/elektro-planung.png"
              alt="Planung moderner Elektroinstallation"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:order-1">
            <Image
              src="/smarthome-elektro.jpg"
              alt="Smart Home und moderne Gebäudesteuerung"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Smart Home
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Intelligente Gebäudetechnik für mehr Komfort und Effizienz
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Moderne Smart Home Lösungen schaffen mehr Komfort, bessere
              Steuerbarkeit und eine effiziente Nutzung technischer Systeme im
              Gebäude. Licht, Beschattung, Temperatur und weitere Funktionen
              lassen sich strukturiert einbinden und intelligent vorbereiten.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL unterstützt bei der Vorbereitung und Integration
              intelligenter Gebäudetechnik für zeitgemäße Wohn und
              Gewerbeobjekte.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Verteilungen
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Zählerschränke und Verteilungen mit klarer Systematik
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Zählerschränke, Hauptverteilungen und Unterverteilungen bilden das
              technische Rückgrat einer zuverlässigen Elektroinstallation.
              Entscheidend sind eine saubere Struktur, eine nachvollziehbare
              Anordnung und eine fachgerechte Vorbereitung im Projekt.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL unterstützt bei der strukturierten Umsetzung von
              Verteilungslösungen für private und gewerbliche Anwendungen.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/zaehlerschrank-elektro.jpg"
              alt="Zählerschrank und elektrische Verteilung"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:order-1">
            <Image
              src="/elektro-zonen.jpg"
              alt="Fachgerechte Installationszonen in der Elektroinstallation"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Fachgerechte Ausführung
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Saubere Leitungsführung und normgerechte Umsetzung
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Elektrotechnische Arbeiten erfordern Präzision, Übersicht und eine
              fachgerechte Vorbereitung. Gerade bei Umbau und Sanierung sind
              saubere Installationszonen, abgestimmte Abläufe und eine
              zuverlässige Ausführung entscheidend.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL arbeitet strukturiert, sauber und mit Blick auf
              praktikable Lösungen im realen Baustellenalltag.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Projektunterstützung
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Elektrovorarbeiten und Unterstützung auf der Baustelle
            </h2>

            <p className="leading-relaxed text-gray-600">
              Zusätzlich unterstützt ISARTAL eingetragene
              Elektromeisterbetriebe bei der strukturierten Umsetzung größerer
              Projekte. Wir übernehmen vorbereitende Arbeiten sowie technische
              Montageunterstützung im Rahmen kooperativer Projektabwicklung.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supportItems.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
              >
                <div className="mb-3 h-1 w-10 rounded bg-blue-600" />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Sicherheit & Verantwortung
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Meisterstruktur und fachgerechte Projektabwicklung
            </h2>

            <p className="max-w-4xl leading-relaxed text-gray-700">
              Meisterpflichtige elektrotechnische Leistungen erfolgen in
              Zusammenarbeit mit einem kooperierenden, eingetragenen
              Elektromeisterbetrieb. Dadurch gewährleistet ISARTAL eine
              fachgerechte, normkonforme und sichere Umsetzung
              elektrotechnischer Projekte.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
            Kontakt
          </p>

          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Elektrotechnik Projekt geplant?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            Sprechen Sie mit uns über Ihr Bauvorhaben in München und Umgebung.
            ISARTAL unterstützt Sie mit strukturierter Ausführung und
            zuverlässiger Projektabwicklung.
          </p>

          <a
            href="/kontakt"
            className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>
    </main>
  );
}