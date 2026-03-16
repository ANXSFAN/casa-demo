"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/context";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

function getIcon(icon: string) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "pool":
      return (
        <svg {...props}>
          <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path d="M2 17c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path d="M6 12V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
          <path d="M10 5h4a2 2 0 0 1 2 2v5" />
        </svg>
      );
    case "hiking":
      return (
        <svg {...props}>
          <path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
          <path d="M7 21l3-7 2.5 2.5L17 11" />
          <path d="M10 14l-2.5 2.5L4 21" />
          <path d="M17 11l2 5h2" />
        </svg>
      );
    case "breakfast":
      return (
        <svg {...props}>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <path d="M6 1v3" />
          <path d="M10 1v3" />
          <path d="M14 1v3" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...props}>
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M8.5 16.9a5 5 0 0 1 7 0" />
        </svg>
      );
    case "parking":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      );
    case "pet":
      return (
        <svg {...props}>
          <path d="M10 5.172C10 3.782 8.884 2.5 7.5 2.5S5 3.782 5 5.172c0 1.39.884 2.328 2.5 2.328S10 6.562 10 5.172z" />
          <path d="M19 5.172C19 3.782 17.884 2.5 16.5 2.5S14 3.782 14 5.172c0 1.39.884 2.328 2.5 2.328S19 6.562 19 5.172z" />
          <path d="M7.5 14c-1.5 0-3.5 1-3.5 3.5S5 21 7.5 21c1.5 0 2.5-.5 4.5-.5s3 .5 4.5.5 3.5-1 3.5-3.5S18 14 16.5 14c-1.5 0-2.5 1-4.5 1s-3-1-4.5-1z" />
          <path d="M4.5 11c1.105 0 2-.672 2-1.5S5.605 8 4.5 8s-2 .672-2 1.5.895 1.5 2 1.5z" />
          <path d="M19.5 11c1.105 0 2-.672 2-1.5S20.605 8 19.5 8s-2 .672-2 1.5.895 1.5 2 1.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src={images.hero}
          alt="Casa Rural El Olivo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-xl text-white/80">{t.hero.subtitle}</p>
          <Link
            href="/reservas"
            className="mt-8 inline-block bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
          >
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-stone-custom-600 leading-relaxed">
              {t.intro.text}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              {t.rooms_preview.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.rooms_data.map((room, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={images.rooms[i].main}
                      alt={room.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold">{room.name}</h3>
                    <p className="mt-2 text-stone-custom-600">
                      {room.price}
                      <span className="text-sm">{t.rooms_preview.per_night}</span>
                    </p>
                    <Link
                      href="/habitaciones"
                      className="mt-4 inline-block text-olive-600 hover:text-olive-700 font-medium transition-colors"
                    >
                      {t.rooms_preview.view_details} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            {t.highlights.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {t.highlights.items.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-olive-600">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-bold mb-1">{item.label}</h3>
                  <p className="text-sm text-stone-custom-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            {t.reviews.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.reviews.items.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="text-olive-600 mb-3">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-stone-custom-600 italic mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-olive-800 text-white text-center py-20">
        <h2 className="font-serif text-4xl font-bold mb-6">
          {t.cta_bottom.title}
        </h2>
        <Link
          href="/reservas"
          className="inline-block bg-white text-olive-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all"
        >
          {t.cta_bottom.button}
        </Link>
      </section>
    </main>
  );
}
