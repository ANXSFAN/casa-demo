"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/context";
import { images } from "@/lib/images";
import FadeIn from "@/components/FadeIn";

export default function HabitacionesPage() {
  const { t } = useLocale();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-olive-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t.rooms_preview.title}
          </h1>
        </div>
      </section>

      {/* Room Details */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {t.rooms_data.map((room, index) => (
          <FadeIn key={index}>
            <RoomDetail
              room={room}
              images={images.rooms[index].gallery}
              reverse={index % 2 !== 0}
              bookLabel={t.rooms_preview.book_room}
              perNight={t.rooms_preview.per_night}
              guestsLabel={t.rooms_preview.guests}
            />
          </FadeIn>
        ))}
      </section>
    </div>
  );
}

function RoomDetail({
  room,
  images: roomImages,
  reverse,
  bookLabel,
  perNight,
  guestsLabel,
}: {
  room: {
    name: string;
    description: string;
    price: string;
    capacity: string;
    amenities: string[];
  };
  images: string[];
  reverse: boolean;
  bookLabel: string;
  perNight: string;
  guestsLabel: string;
}) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 mb-20 last:mb-0`}
    >
      {/* Image Gallery */}
      <div className="md:w-1/2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={roomImages[activeImg]}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex gap-2 mt-3">
          {roomImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                activeImg === i
                  ? "border-olive-600"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${room.name} ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="font-serif text-3xl font-bold text-olive-800 mb-4">
          {room.name}
        </h2>
        <p className="text-stone-custom-600 leading-relaxed mb-6">
          {room.description}
        </p>

        <div className="flex items-center gap-6 mb-6">
          <div>
            <span className="text-2xl font-bold text-olive-700">
              {room.price}
            </span>
            <span className="text-stone-custom-500 text-sm">{perNight}</span>
          </div>
          <div className="text-stone-custom-500 text-sm">
            <svg
              className="w-4 h-4 inline mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {room.capacity} {guestsLabel}
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.map((amenity, i) => (
            <span
              key={i}
              className="bg-olive-50 text-olive-700 px-3 py-1.5 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>

        <Link
          href="/reservas"
          className="inline-flex items-center justify-center bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-full font-medium transition-colors w-fit"
        >
          {bookLabel}
        </Link>
      </div>
    </div>
  );
}
