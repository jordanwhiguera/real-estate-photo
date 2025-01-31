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
            src="/images/port house fin-2.webp" // Replace with actual paths to your images
            alt="home"
            width={400} // Set appropriate width
            height={300} // Set appropriate height
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/cro ex new-1.webp"
            //  src="/images/mar conc n-1.webp"
            alt="Second"
            width={400} // Set appropriate width
            height={300} // Set appropriate height
            className="w-full h-full  rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/port house fin-3.webp"
            alt="Third"
            width={400} // Set appropriate width
            height={300} // Set appropriate height
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotoSection;
