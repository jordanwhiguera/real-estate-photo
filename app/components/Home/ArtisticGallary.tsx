"use client";
import React from "react";
import Container from "../Container"; // Ensure the correct path

const ArtisticGallery: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        {/* Left side: two images stacked */}
        <div className="md:w-1/2 w-full">
          {/* Top image */}
          <img
            src="/images/home.webp" // Replace with actual paths to your images
            alt="Interior"
            className="w-full object-cover pb-2 rounded-3xl"
            style={{ height: "50vh" }}
          />
          {/* Bottom image */}
          <img
            src="/images/home.webp" // Replace with actual paths to your images
            alt="Exterior"
            className="w-full object-cover rounded-3xl"
            style={{ height: "50vh" }}
          />
        </div>
        {/* Right side: one long image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/images/home.webp" // Replace with actual paths to your images
            alt="Long view"
            className="w-full object-cover rounded-3xl"
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtisticGallery;
