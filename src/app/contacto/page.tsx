"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/context";
import { images } from "@/lib/images";
import FadeIn from "@/components/FadeIn";

export default function ContactoPage() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-olive-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h1>
          <p className="text-olive-200 text-lg">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn>
            {submitted ? (
              <div className="bg-olive-50 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-olive-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-olive-800 font-medium leading-relaxed">
                    {t.contact.success}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-sm border border-stone-custom-100 p-8"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-olive-600 hover:bg-olive-700 text-white py-4 rounded-full text-lg font-medium transition-colors"
                  >
                    {t.contact.submit}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>

          {/* Contact Info & Map */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-olive-50 rounded-3xl p-8">
                <h3 className="font-serif text-xl font-bold text-olive-800 mb-6">
                  {t.contact.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-olive-100 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-olive-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-stone-custom-500">
                        {t.contact.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-olive-100 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-olive-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-stone-custom-500">
                        WhatsApp: {t.contact.whatsapp}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-olive-100 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-olive-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-stone-custom-500">
                        {t.contact.email_addr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={images.about.location}
                  alt="Location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                    <p className="font-serif font-bold text-olive-800">
                      Casa Rural El Olivo
                    </p>
                    <p className="text-stone-custom-500 text-sm">
                      Alt Empordà, Girona, Catalunya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
