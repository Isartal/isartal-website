import Link from "next/link";
import { Zap, Hammer, Wrench } from "lucide-react";

export default function Card({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {

  function getIcon() {
    if (title === "Elektrotechnik") return <Zap size={22} />;
    if (title === "Trockenbau") return <Hammer size={22} />;
    if (title === "Baustellenservice") return <Wrench size={22} />;
  }

  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Icon */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 ring-1 ring-blue-600/20 transition group-hover:scale-110">
        {getIcon()}
      </div>

      {/* Titel */}
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      {/* Text */}
      <p className="mt-3 text-gray-600 whitespace-pre-line">
        {text}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3"
      >
        {cta}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>

    </div>
  );
}