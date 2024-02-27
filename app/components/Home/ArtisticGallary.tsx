"use client";
import React from "react";
import Container from "../Container"; // Ensure the correct path
import Image from "next/image"; // Import the Image component

const ArtisticGallery: React.FC = () => {
  return (
    <Container className="pb-16">
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* Left side: two images stacked */}
        <div className="md:w-1/2 w-full">
          {/* Top image */}
          <Image
            src="/images/Lofgren-HD-7.webp" // Replace with actual paths to your images
            alt="Interior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full pb-4 rounded-3xl "
            style={{ height: "50vh" }}
          />
          {/* Bottom image */}
          <Image
            src="/images/Lofgren-HD-6.webp" // Replace with actual paths to your images
            alt="Exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full  rounded-3xl "
            style={{ height: "50vh" }}
          />
        </div>
        {/* Right side: one long image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/IG-2.webp" // Replace with actual paths to your images
            alt="Long view"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="w-full  rounded-3xl "
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtisticGallery;
