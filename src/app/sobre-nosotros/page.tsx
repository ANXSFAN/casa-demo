"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context";
import { images } from "@/lib/images";
import FadeIn from "@/components/FadeIn";

export default function SobreNosotrosPage() {
  const { t } = useLocale();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-olive-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <FadeIn className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={images.about.story}
                alt="Casa Rural El Olivo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn className="md:w-1/2" delay={200}>
            <h2 className="font-serif text-3xl font-bold text-olive-800 mb-6">
              {t.about.story_title}
            </h2>
            <div className="space-y-4">
              {t.about.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-stone-custom-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="bg-olive-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-olive-800 text-center mb-12">
              {t.about.team_title}
            </h2>
          </FadeIn>
          <div className="flex justify-center gap-8 flex-wrap">
            {images.about.team.map((img, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="text-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <Image
                      src={img}
                      alt={i === 0 ? "Marc Puig" : "Laia Puig"}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-olive-800">
                    {i === 0 ? "Marc Puig" : "Laia Puig"}
                  </h3>
                  <p className="text-stone-custom-500 text-sm mt-1">
                    {i === 0 ? "Fundador & Anfitrión" : "Co-fundadora & Chef"}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-olive-800 text-center mb-4">
            {t.about.location_title}
          </h2>
          <p className="text-stone-custom-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.about.location_desc}
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={images.about.location}
              alt="Alt Empordà, Girona"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 text-center shadow-lg">
                <p className="font-serif text-xl font-bold text-olive-800">
                  Alt Empordà, Girona
                </p>
                <p className="text-stone-custom-500 text-sm mt-1">
                  Cataluña, España
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
