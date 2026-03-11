import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center">
      
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* dunkles Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Inhalt */}
      <div className="relative z-10 max-w-4xl px-6 text-white">

        {/* Firmenname */}
        <h1 className="text-6xl md:text-8xl font-semibold tracking-widest">
          ISARTAL
        </h1>

        {/* Blaue Linie */}
        <div className="mx-auto mt-6 mb-8 h-[2px] w-32 md:w-40 rounded bg-blue-500" />

        {/* Leistungen */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Elektrotechnik · Trockenbau · Baustellenservice
        </h2>

        {/* Beschreibung */}
        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
          Zuverlässige Ausführung für Neubau, Umbau und Sanierung in München und
          Umgebung.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          {/* Anrufen */}
          <a
            href="tel:+4915563005393"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Jetzt anrufen
          </a>

          {/* Leistungen */}
          <Link
            href="/elektrotechnik"
            className="border border-white px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition"
          >
            Leistungen ansehen
          </Link>

        </div>

        {/* Trust Zeile */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm md:text-base text-white/90">
          <span>✓ München & Umgebung</span>
          <span>✓ Kooperation mit Elektromeisterbetrieb</span>
          <span>✓ Saubere und zuverlässige Ausführung</span>
        </div>

      </div>
    </section>
  );
}