import Image from "next/image";

export const metadata = {
  title: "Trockenbau in München | ISARTAL Innenausbau",
  description:
    "Professioneller Trockenbau und Innenausbau in München und Umgebung. Trennwände, Deckensysteme, Schallschutz und Spachtelarbeiten für Neubau, Umbau und Sanierung.",
};

const services = [
  {
    title: "Trennwände & Raumkonzepte",
    text: "Flexible Raumlösungen für Wohn, Gewerbe und Umbauprojekte mit klarer Struktur und sauberer Ausführung.",
  },
  {
    title: "Vorsatzschalen & Verkleidungen",
    text: "Saubere Verkleidungen für Wände, Schächte und technische Bereiche im modernen Innenausbau.",
  },
  {
    title: "Abhangdecken",
    text: "Funktionale und gestalterische Deckensysteme mit sauberer Integration in moderne Raumkonzepte.",
  },
  {
    title: "Schallschutz & Brandschutz",
    text: "Trockenbaulösungen mit Fokus auf Komfort, Schutz und technische Anforderungen im Objekt.",
  },
  {
    title: "Spachtelarbeiten",
    text: "Von der Fugenverspachtelung bis zur malerfertigen Oberfläche für hochwertige Endbeschichtungen.",
  },
  {
    title: "Rückbau & Sanierung",
    text: "Anpassungen, Rückbauarbeiten und strukturierte Vorbereitung für Umbau und Sanierungsprojekte.",
  },
];

const detailItems = [
  "Metallständerkonstruktionen",
  "Dachgeschossausbau",
  "Schachtverkleidungen",
  "Feuchtraumlösungen",
  "Technische Sonderlösungen",
  "Baustellenvorbereitung & Koordination",
];

export default function Trockenbau() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/hero-trockenbau.jpg"
          alt="Moderner Trockenbau und Innenausbau"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Trockenbau
            </p>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Trockenbau in München & Umgebung
            </h1>

            <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-600" />

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Moderne Raumlösungen, saubere Konstruktionen und hochwertiger
              Innenausbau für Neubau, Umbau und Sanierung.
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
            Strukturierter Trockenbau für moderne Raumlösungen
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            ISARTAL bietet professionellen Trockenbau von der Konstruktion bis
            zur malerfertigen Oberfläche. Ob Neubau, Umbau oder Sanierung — wir
            realisieren funktionale und gestalterisch hochwertige
            Innenausbaulösungen mit klaren Abläufen und sauberer Ausführung.
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
              Konstruktion
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Präzise Wandkonstruktionen als Grundlage für sauberen Ausbau
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Trockenbau beginnt mit einer präzisen Unterkonstruktion. Sauber
              geplante Metallständerwände und konstruktiv durchdachte
              Aufbauten schaffen die Grundlage für funktionale, belastbare und
              optisch hochwertige Raumlösungen.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL realisiert Wand und Deckenkonstruktionen mit Blick auf
              Stabilität, Ausführungsqualität und reibungslose Weiterarbeit
              nachfolgender Gewerke.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/trockenbau-wandkonstruktion.jpg"
              alt="Wandkonstruktion im Trockenbau"
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
              src="/trockenbau-trennwand.jpg"
              alt="Trennwände und Raumaufteilung im Trockenbau"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Raumaufteilung
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Flexible Trennwände für Wohnräume, Büros und Umbauten
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Mit modernen Trennwandlösungen lassen sich Räume schnell,
              effizient und sauber neu strukturieren. Trockenbau ermöglicht
              flexible Raumkonzepte für Wohnungen, Gewerbeflächen und
              Sanierungsprojekte.
            </p>

            <p className="leading-relaxed text-gray-600">
              So entstehen funktionale Bereiche mit klarer Gliederung und
              hochwertiger Ausführung im Innenausbau.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Schallschutz & Schutzsysteme
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Schallschutz, Brandschutz und technische Anforderungen sauber umgesetzt
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Je nach Objekt und Nutzung spielen Schallschutz, Brandschutz und
              spezielle Anforderungen im Ausbau eine zentrale Rolle.
              Durchdachte Trockenbausysteme schaffen hier funktionale und
              zugleich wirtschaftliche Lösungen.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL setzt Konstruktionen um, die auf Komfort, Sicherheit und
              technische Anforderungen abgestimmt sind.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/trockenbau-schallschutz.jpg"
              alt="Schallschutz und Dämmung im Trockenbau"
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
              src="/trockenbau-spachtel.jpg"
              alt="Spachtelarbeiten und Oberflächen im Trockenbau"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Oberflächen
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Malerfertige Oberflächen und saubere Spachtelarbeiten
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Hochwertiger Trockenbau endet nicht bei der Konstruktion.
              Entscheidend ist die saubere Oberflächenbearbeitung von der
              Fugenverspachtelung bis zur glatten, beschichtungsfähigen Fläche.
            </p>

            <p className="leading-relaxed text-gray-600">
              ISARTAL übernimmt Spachtel und Schleifarbeiten für eine
              hochwertige Vorbereitung auf Maler und Beschichtungsarbeiten.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Weitere Leistungen
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Ergänzende Leistungen im Trockenbau und Innenausbau
            </h2>

            <p className="leading-relaxed text-gray-600">
              Neben klassischen Wand und Deckensystemen übernimmt ISARTAL
              weitere Leistungen im Rahmen von Ausbau, Anpassung und
              Projektvorbereitung für Neubau, Umbau und Sanierung.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {detailItems.map((item) => (
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
              Ausführung & Qualität
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Saubere Abläufe und hochwertige Umsetzung im Innenausbau
            </h2>

            <p className="max-w-4xl leading-relaxed text-gray-700">
              ISARTAL steht für strukturierte Ausführung im Trockenbau mit
              Blick auf Präzision, saubere Baustellenabläufe und ein
              hochwertiges Endergebnis. So entstehen Raumlösungen, die
              funktional überzeugen und optisch dauerhaft wirken.
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
            Trockenbau Projekt geplant?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            Sprechen Sie mit uns über Ihr Bauvorhaben in München und Umgebung.
            ISARTAL unterstützt Sie mit strukturiertem Trockenbau und
            hochwertigem Innenausbau.
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