"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";

// ORIGINAL IMAGE PATHS
const images = [
  "/images/cro-1.webp",
  "/images/7-thumb IN-21.webp",
  "/images/coosa ex-5.webp",
  "/images/4-thumb IN-28.webp",
  "/images/or in-29.webp",
  "/images/kes port-1.webp",
  "/images/kitch-1.webp",
  "/images/4-tram exterior new-6.webp",
  "/images/kit-1.webp",
  "/images/be-1.webp",
  "/images/5-tram exterior new-8.webp",
  "/images/be-2.webp",
];

export default function PhotographyShowcase() {
  const [selected, setSelected] = useState<string | null>(null);

  const close = () => setSelected(null);

  return (
    <Container>
      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={close}
        >
          <Image
            src={selected}
            alt="Expanded"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      )}

      <div className="py-10">
        <h3 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-8 -mt-8 md:mt-0">
          PHOTO
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Gallery image ${i}`}
              width={500}
              height={500}
              className="rounded-3xl w-full h-full object-cover cursor-pointer hover:opacity-80"
              onClick={() => setSelected(src)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
