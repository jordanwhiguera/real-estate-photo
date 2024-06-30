"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotoSection: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16">
        {/* Assuming you have 3 ...images */}
        <div className="w-full">
          <Image
            src="/images/h1.webp" // Replace with actual paths to your images
            alt="home"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/h2.webp"
            alt="Second"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full h-full  rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/3p4.webp"
            alt="Third"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotoSection;
