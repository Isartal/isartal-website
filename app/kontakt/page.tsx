import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt in München und Umgebung | ISARTAL",
  description:
    "Kontaktieren Sie ISARTAL für Elektrotechnik, Trockenbau und Baustellenservice in München und Umgebung.",
};

export default function KontaktPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Kontakt
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Kontakt für Projekte in München & Umgebung
          </h1>

          <p className="text-lg leading-relaxed text-gray-600">
            Sprechen Sie mit ISARTAL über Elektrotechnik, Trockenbau oder
            Baustellenservice. Wir melden uns zeitnah zurück und besprechen Ihr
            Vorhaben persönlich und unkompliziert.
          </p>
        </div>
      </section>

      {/* KONTAKT + FORMULAR */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LINKE KARTE */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Direktkontakt
            </p>

            <h2 className="mb-8 text-3xl font-semibold">
              Schnell erreichbar und klar abgestimmt
            </h2>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm text-gray-500">Telefon</p>
                <a
                  href="tel:+4915563005393"
                  className="text-2xl font-semibold text-gray-900 hover:text-blue-600"
                >
                  0155 63005393
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-500">E Mail</p>
                <a
                  href="mailto:info@isartal-muenchen.de"
                  className="text-xl font-semibold text-gray-900 hover:text-blue-600"
                >
                  info@isartal-muenchen.de
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-500">Einsatzgebiet</p>
                <p className="text-xl font-semibold text-gray-900">
                  München & Umgebung
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+4915563005393"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Anrufen
              </a>

              <a
                href="mailto:info@isartal-muenchen.de"
                className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:border-blue-600 hover:text-blue-600"
              >
                E Mail senden
              </a>
            </div>
          </div>

          {/* RECHTE KARTE */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Anfrage
            </p>

            <h2 className="mb-8 text-3xl font-semibold">
              Projekt unverbindlich anfragen
            </h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="telefon"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input
                  id="telefon"
                  type="text"
                  placeholder="Ihre Telefonnummer"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  E Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ihre E Mail"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="nachricht"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  rows={6}
                  placeholder="Kurz Ihr Projekt beschreiben, Ort, Zeitraum und Umfang"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Anfrage senden
              </button>

              <p className="text-sm leading-relaxed text-gray-500">
                Hinweis: Das Formular ist aktuell als Design eingebunden. Den
                Versand können wir im nächsten Schritt mit E Mail oder Formular
                Backend verbinden.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* HELLBLAUER BLOCK */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Schnelle Rückmeldung
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Klare Abstimmung für Ihr Vorhaben
            </h2>

            <p className="max-w-4xl leading-relaxed text-gray-700">
              Teilen Sie uns Ihr Projekt kurz mit. Ob Elektrotechnik,
              Trockenbau oder Baustellenservice, ISARTAL steht für saubere
              Kommunikation, kurze Wege und strukturierte Abläufe vom ersten
              Kontakt bis zur Ausführung.
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
            Jetzt Projekt anfragen
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            Sprechen Sie mit uns über Ihr Bauvorhaben in München und Umgebung.
          </p>

          <a
            href="tel:+4915563005393"
            className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Jetzt anrufen
          </a>
        </div>
      </section>
    </main>
  );
}