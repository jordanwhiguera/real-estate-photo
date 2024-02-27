"use client";
import React from "react";
import Container from "../Container"; // Ensure the correct path

const ArtisticGallery: React.FC = () => {
  return (
    <Container className="pb-16">
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* Left side: two images stacked */}
        <div className="md:w-1/2 w-full">
          {/* Top image */}
          <img
            src="/images/Lofgren-HD-7.webp" // Replace with actual paths to your images
            alt="Interior"
            className="w-full pb-4 rounded-3xl "
            style={{ height: "50vh" }}
          />
          {/* Bottom image */}
          <img
            src="/images/Lofgren-HD-6.webp" // Replace with actual paths to your images
            alt="Exterior"
            className="w-full  rounded-3xl "
            style={{ height: "50vh" }}
          />
        </div>
        {/* Right side: one long image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/images/IG-2.webp" // Replace with actual paths to your images
            alt="Long view"
            className="w-full  rounded-3xl "
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtisticGallery;
