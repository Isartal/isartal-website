export const metadata = {
  title: "Elektrotechnik & Trockenbau in München",
  description:
    "ISARTAL bietet Elektrotechnik, Trockenbau und Innenausbau in München und Umgebung. Elektroinstallation, Smart Home, Trennwände, Schallschutz und hochwertige Bauleistungen aus einer Hand.",
  alternates: {
    canonical: "https://isartal-bau.de",
  },
  openGraph: {
    title: "Elektrotechnik & Trockenbau in München | ISARTAL Bau & Elektrotechnik",
    description:
      "ISARTAL bietet Elektrotechnik, Trockenbau und Innenausbau in München und Umgebung.",
    url: "https://isartal-bau.de",
    images: ["/og-image.jpg"],
  },
};

import Hero from "./components/ui/Hero";
import Container from "./components/ui/Container";
import SectionTitle from "./components/ui/SectionTitle";
import Card from "./components/ui/Card";
import Link from "next/link";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ISARTAL Bau & Elektrotechnik",
    image: "https://isartal-bau.de/og-image.jpg",
    url: "https://isartal-bau.de",
    telephone: "+4915563005393",
    areaServed: {
      "@type": "City",
      name: "München",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "München",
      addressCountry: "DE",
    },
    description:
      "ISARTAL bietet Elektrotechnik, Trockenbau und Baustellenservice in München und Umgebung.",
    serviceType: [
      "Elektrotechnik",
      "Trockenbau",
      "Baustellenservice",
      "Innenausbau",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main>
        <Hero />

        {/* Intro / Schnellvertrauen */}
        <section className="border-b border-gray-100 bg-white py-10">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Anspruch
                </p>
                <p className="text-gray-800">
                  Saubere Ausführung mit klaren Abläufen und verlässlicher
                  Abstimmung.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Region
                </p>
                <p className="text-gray-800">
                  Elektrotechnik, Trockenbau und Baustellenservice in München
                  und Umgebung.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Zusammenarbeit
                </p>
                <p className="text-gray-800">
                  Strukturierte Unterstützung für Privatkunden, Sanierungen und
                  Projektpartner.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Leistungen */}
        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Leistungsbereiche"
              title="Strukturierte Lösungen für Bau & Technik"
              subtitle="ISARTAL vereint Elektrotechnik, Trockenbau und Baustellenservice in einem klar organisierten Projektablauf."
            />

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <Card
                title="Elektrotechnik"
                text={`• Zählerschrank & Verteilungen
• Steckdosen, Licht & Anschlüsse
• Smart Home Vorbereitung`}
                href="/elektrotechnik"
                cta="Mehr erfahren"
              />
              <Card
                title="Trockenbau"
                text={`• Trennwände & Decken
• Schallschutz & Brandschutz
• Malerfertige Oberflächen`}
                href="/trockenbau"
                cta="Mehr erfahren"
              />
              <Card
                title="Baustellenservice"
                text={`• Stemmarbeiten & Vorbereitung
• Unterstützung für Meisterbetriebe
• Strukturierte Baustellenhilfe`}
                href="/baustellenservice"
                cta="Mehr erfahren"
              />
            </div>
          </Container>
        </section>

        {/* Für wen wir arbeiten */}
        <section className="bg-gray-50 py-20">
          <Container>
            <SectionTitle
              eyebrow="Für wen wir arbeiten"
              title="Passende Lösungen für unterschiedliche Bauvorhaben"
              subtitle="ISARTAL unterstützt private Bauherren, Sanierungen im Bestand sowie Bauprojekte, bei denen zuverlässige Ausführung und saubere Abstimmung gefragt sind."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Privatkunden
                </h3>
                <p className="mt-4 text-gray-700">
                  Ob Modernisierung, Umbau oder kleinere Ausbauarbeiten: Wir
                  unterstützen private Auftraggeber mit klarer Kommunikation,
                  sauberer Ausführung und verlässlicher Terminabstimmung.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sanierung & Umbau
                </h3>
                <p className="mt-4 text-gray-700">
                  Gerade im Bestand sind saubere Abläufe und durchdachte
                  Vorbereitung besonders wichtig. Wir begleiten Sanierungs und
                  Umbauprojekte strukturiert und mit Blick auf eine reibungsarme
                  Umsetzung.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Unterstützung für Meisterbetriebe
                </h3>
                <p className="mt-4 text-gray-700">
                  Im Bereich Baustellenservice und vorbereitender Arbeiten
                  unterstützen wir Meisterbetriebe und Projektpartner dort, wo
                  zuverlässige Ausführung und strukturierte Zusammenarbeit
                  gefragt sind.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* So arbeiten wir */}
        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="So arbeiten wir"
              title="Klar strukturierte Abläufe von der Anfrage bis zur Umsetzung"
              subtitle="Ein sauberer Projektablauf sorgt für Planungssicherheit. Deshalb legen wir großen Wert auf klare Abstimmung, strukturierte Vorbereitung und zuverlässige Ausführung."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-blue-600">1</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  Anfrage & Abstimmung
                </h3>
                <p className="mt-2 text-gray-700">
                  Zu Beginn klären wir das Vorhaben, den Umfang der Arbeiten und
                  die wichtigsten Rahmenbedingungen für das Projekt.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  Planung & Vorbereitung
                </h3>
                <p className="mt-2 text-gray-700">
                  Anschließend strukturieren wir die nächsten Schritte und
                  bereiten die Ausführung so vor, dass die Arbeiten effizient
                  umgesetzt werden können.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  Ausführung vor Ort
                </h3>
                <p className="mt-2 text-gray-700">
                  Die Arbeiten werden zuverlässig, sauber und mit Blick auf
                  strukturierte Abläufe auf der Baustelle umgesetzt.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  Abschluss & Übergabe
                </h3>
                <p className="mt-2 text-gray-700">
                  Nach Fertigstellung erfolgt die saubere Übergabe des
                  Projektergebnisses und eine klare Abstimmung zum Abschluss.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Warum ISARTAL */}
        <section className="relative overflow-hidden bg-gray-50 py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <Container>
            <SectionTitle
              eyebrow="Warum ISARTAL"
              title="Organisation trifft Handwerk"
              subtitle="Klare Abläufe, saubere Umsetzung und zuverlässige Projektstruktur stehen im Mittelpunkt."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  Strukturierte Projektabwicklung
                </h3>
                <p className="mt-3 text-gray-700">
                  Von Planung bis Umsetzung sorgen wir für klare Abläufe und
                  transparente Kommunikation.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  Fachliche Kompetenz
                </h3>
                <p className="mt-3 text-gray-700">
                  Elektrotechnische Leistungen erfolgen in Kooperation mit
                  eingetragenem Meisterbetrieb.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  Zuverlässigkeit
                </h3>
                <p className="mt-3 text-gray-700">
                  Termine, Qualität und saubere Ausführung stehen im Fokus jeder
                  Projektphase.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Vertrauen */}
        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Vertrauen"
              title="Zuverlässige Umsetzung für Bauprojekte"
              subtitle="Saubere Ausführung, strukturierte Abläufe und klare Kommunikation stehen bei jedem Projekt im Mittelpunkt."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-gray-700">
                  Saubere Arbeitsweise, verlässliche Terminabstimmung und klare
                  Kommunikation sind für uns die Grundlage professioneller
                  Bauprojekte.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-gray-700">
                  Wir arbeiten strukturiert und lösungsorientiert, damit
                  Bauabläufe im Alltag möglichst reibungslos funktionieren.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-gray-700">
                  ISARTAL steht für verlässliche Unterstützung in den Bereichen
                  Elektrotechnik, Trockenbau und Baustellenservice in München
                  und Umgebung.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Einsatzgebiet */}
        <section className="bg-gray-50 py-20">
          <Container>
            <SectionTitle
              eyebrow="Einsatzgebiet"
              title="Elektrotechnik & Trockenbau in München und Umgebung"
              subtitle="Wir begleiten Bauprojekte im Raum München und in umliegenden Regionen mit klarer Struktur und zuverlässiger Ausführung."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">München</h3>
                <p className="mt-3 text-gray-700">
                  Projekte in München und im direkten Stadtgebiet mit Fokus auf
                  saubere Ausführung und verlässliche Abläufe.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Umland
                </h3>
                <p className="mt-3 text-gray-700">
                  Je nach Projektumfang unterstützen wir auch Bauvorhaben in
                  umliegenden Regionen rund um München.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Sanierung & Umbau
                </h3>
                <p className="mt-3 text-gray-700">
                  Besonders bei Bestandsobjekten sind strukturierte Vorbereitung
                  und saubere Abstimmung entscheidend.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
                Kontakt
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Bereit für Ihr Projekt?
              </h2>

              <p className="mt-4 text-white/90">
                Wir begleiten Bauvorhaben in München & Umgebung strukturiert und
                zuverlässig.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+4915563005393"
                  className="rounded-2xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
                >
                  Jetzt anrufen
                </a>

                <Link
                  href="/kontakt"
                  className="rounded-2xl border border-white/60 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Mobile Call Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <a
            href="tel:+4915563005393"
            className="block bg-blue-600 py-4 text-center text-lg font-semibold text-white shadow-lg"
          >
            📞 Jetzt anrufen: 0155 63005393
          </a>
        </div>
      </main>
    </>
  );
}