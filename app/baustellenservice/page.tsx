import Image from "next/image";

export const metadata = {
  title: "Baustellenservice in München und Umgebung | ISARTAL",
  description:
    "ISARTAL bietet Baustellenservice in München und Umgebung. Vorbereitung, Materialtransport, Ordnung und praktische Unterstützung für Bauprojekte und Handwerksbetriebe.",
};

export default function Baustellenservice() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/hero-baustellenservice.jpg"
          alt="Baustellenservice Unterstützung auf der Baustelle in München"
          fill
          priority
          className="object-cover"
        />

<div className="absolute inset-0 bg-black/45" />

<div className="relative z-10 flex h-full items-center justify-center px-6">
  <div className="max-w-2xl text-center text-white">

    <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
      Baustellenservice
    </p>

    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
      Baustellenservice in München und Umgebung
    </h1>

    <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-600"></div>

    <p className="mb-8 text-lg text-white/90">
      Praktische Unterstützung auf der Baustelle,
      Vorbereitung, Materialtransport und zuverlässige Hilfe
      für Bauprojekte und Handwerksbetriebe.
    </p>


            <div className="flex justify-center gap-4">
              <a
                href="tel:+4915563005393"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
              >
                Jetzt anrufen
              </a>

              <a
                href="/kontakt"
                className="bg-blue-600 px-6 py-3 rounded-lg font-medium text-white hover:bg-blue-700 transition"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Baustellenservice
        </p>

        <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Zuverlässiger Baustellenservice in München und Umgebung
        </h2>

        <p className="mb-12 max-w-3xl text-lg text-gray-600">
          ISARTAL unterstützt Bauprojekte in München und Umgebung mit
          zuverlässigem Baustellenservice. Wir übernehmen vorbereitende
          Arbeiten, sorgen für saubere Baustellenbereiche und bieten
          praktische Unterstützung für Handwerksbetriebe und Bauunternehmen.
        </p>

        <h3 className="mb-6 text-2xl font-semibold">
          Typische Leistungen im Baustellenservice
        </h3>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Vorbereitung von Baustellenbereichen</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Unterstützung bei Bauprojekten</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Materialtransport und Organisation</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Aufräum und Freiräumarbeiten</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Unterstützung für Handwerksbetriebe</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-1 w-10 rounded bg-blue-600" />
            <p className="font-semibold">Flexible Baustellenhilfe</p>
          </div>
        </div>
      </section>

      {/* MATERIAL */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Material & Unterstützung
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Materialtransport und praktische Baustellenhilfe
            </h2>

            <p className="text-gray-600">
              Auf vielen Baustellen fallen täglich Aufgaben an,
              die Zeit und Personal binden. ISARTAL unterstützt
              Bauprojekte durch Materialtransport, Zuarbeiten
              und praktische Hilfe direkt vor Ort.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow">
            <Image
              src="/baustellenservice-material.jpg"
              alt="Materialtransport auf der Baustelle"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SAUBERKEIT */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-xl shadow md:order-1">
            <Image
              src="/baustellenservice-sauberkeit.jpg"
              alt="Saubere Baustelle und vorbereitende Arbeiten"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Vorbereitung
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Saubere Baustellen und vorbereitende Arbeiten
            </h2>

            <p className="text-gray-600">
              Ordnung und Sauberkeit sind wichtige Faktoren
              für effiziente Bauprojekte. Wir kümmern uns um
              Aufräumarbeiten, Freiräumung und vorbereitende
              Maßnahmen, damit andere Gewerke effizient arbeiten können.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Organisation
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              Strukturierte Abläufe auf der Baustelle
            </h2>

            <p className="text-gray-600">
              Durch strukturierte Unterstützung auf der Baustelle
              entstehen klare Abläufe und bessere Arbeitsbedingungen
              für alle Beteiligten. ISARTAL unterstützt Bauprojekte
              dort, wo praktische Hilfe benötigt wird.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow">
            <Image
              src="/baustellenservice-organisation.jpg"
              alt="Organisation und Unterstützung auf der Baustelle"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
<section>
  <div className="mx-auto max-w-6xl px-6 py-20">
    <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-12">

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Baustellenservice
      </p>

      <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
        Zuverlässige Baustellenunterstützung für Bauprojekte
      </h2>

      <p className="max-w-4xl leading-relaxed text-gray-700">
        ISARTAL unterstützt Bauprojekte in München und Umgebung mit
        praktischer Hilfe direkt auf der Baustelle. Von vorbereitenden
        Arbeiten bis zu Materialtransport und Ordnung sorgen wir für
        strukturierte Abläufe und entlasten Handwerksbetriebe.
      </p>

    </div>
  </div>
</section>

{/* CTA */}
<section className="bg-blue-600 text-white">
  <div className="mx-auto max-w-6xl px-6 py-20 text-center">
    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
      Kontakt
    </p>

    <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
      Unterstützung für Ihr Bauprojekt?
    </h2>

    <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
      Sprechen Sie mit uns über Baustellenservice in München und Umgebung.
      ISARTAL unterstützt Sie mit zuverlässiger Hilfe, sauberer Vorbereitung
      und praktischer Baustellenunterstützung.
    </p>

    <a
      href="/kontakt"
      className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
    >
      Jetzt Kontakt aufnehmen
    </a>
  </div>
</section>

      {/* MOBILE CALL BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:+4915563005393"
          className="block bg-blue-600 py-4 text-center text-lg font-semibold text-white shadow-lg"
        >
          Jetzt anrufen: 0155 63005393
        </a>
      </div>
    </main>
  );
}