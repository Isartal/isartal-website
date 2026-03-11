export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">

      {/* Eyebrow */}
      {eyebrow ? (
        <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold tracking-wider text-gray-700">
          {eyebrow}
        </div>
      ) : null}

      {/* Titel */}
      <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {/* Blaue Linie */}
      <div className="mx-auto mt-5 h-[2px] w-32 md:w-40 rounded bg-blue-600"></div>

      {/* Untertitel */}
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      ) : null}

    </div>
  );
}