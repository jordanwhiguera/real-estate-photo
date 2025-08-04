"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotoSection: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16">
        <div className="w-full">
          <Image
            src="/images/aspect-1.webp"
            alt="home"
            width={600} // Increased resolution
            height={400}
            quality={100} // Ensures high-quality rendering
            layout="intrinsic" // Maintains original quality and aspect ratio
            objectFit="cover" // Prevents distortion while filling the space
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/1-tram twi-1.webp"
            alt="Second"
            width={600}
            height={400}
            quality={100}
            layout="intrinsic"
            objectFit="cover"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/1-thumb ex-4.webp"
            alt="Third"
            width={600}
            height={400}
            quality={100}
            layout="intrinsic"
            objectFit="cover"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotoSection;
