"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";

// 1. ORIGINAL PHOTO IMAGES
const photoImages = [
  "/images/3-via in-28.webp",

  "/images/7-thumb IN-21.webp",
  "/images/coosa ex-5.webp",
  "/images/4-thumb IN-28.webp",
  "/images/or in-29.webp",
  "/images/kes port-1.webp",
  "/images/kitch-1.webp",
  "/images/cro-1.webp",
  "/images/kit-1.webp",
  "/images/be-1.webp",
  "/images/4-inlet in-35.webp",
  "/images/be-2.webp",
];

// 2. VIRTUAL STAGING IMAGES
const virtualStagingImages = [
  "/images/sal in-18.webp",
  "/images/sal in-17.webp",
  "/images/EOSR1410.webp",
  "/images/EOSR1254.webp",
  "/images/sal in-10.webp",
  "/images/sal in-2.webp",
];

export default function PhotographyShowcase() {
  const [selected, setSelected] = useState<string | null>(null);

  const close = () => setSelected(null);

  return (
    <Container>
      {/* LIGHTBOX - This handles clicks from BOTH sections */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={close}
        >
          <div className="relative w-full h-full">
            <Image
              src={selected}
              alt="Expanded view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <div className="py-10">
        {/* --- SECTION 1: PHOTOS --- */}
        <h3 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-8 -mt-8 md:mt-0 uppercase">
          Photos
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoImages.map((src, i) => (
            <Image
              key={`photo-${i}`}
              src={src}
              alt={`Photo ${i}`}
              width={500}
              height={500}
              className="rounded-3xl w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelected(src)} // Triggers Lightbox
            />
          ))}
        </div>

        {/* --- SECTION 2: VIRTUAL STAGING --- */}
        <h3 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-8 mt-16 uppercase">
          Virtual Staging
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {virtualStagingImages.map((src, i) => (
            <Image
              key={`staging-${i}`}
              src={src}
              alt={`Virtual staging ${i}`}
              width={500}
              height={500}
              className="rounded-3xl w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelected(src)} // This now works exactly like the photo section
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
