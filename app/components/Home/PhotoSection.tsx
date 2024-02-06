"use client";
import React from "react";
import Container from "../Container";

const PhotoSection: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16">
        {/* Assuming you have 3 images */}
        <div className="w-full">
          <img
            src="/images/home.webp" // Replace with actual paths to your images
            alt="First"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/home.webp"
            alt="Second"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/home.webp"
            alt="Third"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotoSection;
