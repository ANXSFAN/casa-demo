"use client";

import { useState } from "react";
import { useLocale } from "@/lib/context";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ReservasPage() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    roomType: "",
    adults: 2,
    children: 0,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Simulate some booked dates
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-olive-600"
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
          <h1 className="font-serif text-3xl font-bold text-olive-800 mb-4">
            {t.reservations.success_title}
          </h1>
          <p className="text-stone-custom-600 mb-8 leading-relaxed">
            {t.reservations.success_text}
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            {t.reservations.back_home}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-olive-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t.reservations.title}
          </h1>
          <p className="text-olive-200 text-lg">{t.reservations.subtitle}</p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-sm border border-stone-custom-100 p-8 md:p-12"
          >
            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.checkin}
                </label>
                <input
                  type="date"
                  required
                  min={minDate}
                  value={form.checkin}
                  onChange={(e) =>
                    setForm({ ...form, checkin: e.target.value })
                  }
                  className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.checkout}
                </label>
                <input
                  type="date"
                  required
                  min={form.checkin || minDate}
                  value={form.checkout}
                  onChange={(e) =>
                    setForm({ ...form, checkout: e.target.value })
                  }
                  className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Room Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                {t.reservations.room_type}
              </label>
              <select
                required
                value={form.roomType}
                onChange={(e) =>
                  setForm({ ...form, roomType: e.target.value })
                }
                className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all bg-white"
              >
                <option value="">{t.reservations.select_room}</option>
                {t.rooms_data.map((room, i) => (
                  <option key={i} value={room.name}>
                    {room.name} — {room.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.adults}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        adults: Math.max(1, form.adults - 1),
                      })
                    }
                    className="w-10 h-10 rounded-full border border-stone-custom-200 flex items-center justify-center text-stone-custom-600 hover:bg-olive-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium text-stone-custom-700 w-8 text-center">
                    {form.adults}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        adults: Math.min(4, form.adults + 1),
                      })
                    }
                    className="w-10 h-10 rounded-full border border-stone-custom-200 flex items-center justify-center text-stone-custom-600 hover:bg-olive-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.children}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        children: Math.max(0, form.children - 1),
                      })
                    }
                    className="w-10 h-10 rounded-full border border-stone-custom-200 flex items-center justify-center text-stone-custom-600 hover:bg-olive-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium text-stone-custom-700 w-8 text-center">
                    {form.children}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setForm({
                        ...form,
                        children: Math.min(3, form.children + 1),
                      })
                    }
                    className="w-10 h-10 rounded-full border border-stone-custom-200 flex items-center justify-center text-stone-custom-600 hover:bg-olive-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-stone-custom-100 mb-8" />

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.name}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                    {t.reservations.email}
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
                    {t.reservations.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-custom-700 mb-2">
                  {t.reservations.notes}
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) =>
                    setForm({ ...form, notes: e.target.value })
                  }
                  className="w-full border border-stone-custom-200 rounded-xl px-4 py-3 text-stone-custom-700 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-olive-600 hover:bg-olive-700 text-white py-4 rounded-full text-lg font-medium transition-colors"
            >
              {t.reservations.submit}
            </button>
          </form>
        </FadeIn>
      </section>
    </div>
  );
}
