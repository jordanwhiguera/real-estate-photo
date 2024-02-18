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
            src="/images/home-2.jpg" // Replace with actual paths to your images
            alt="First"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/Deville-HD-1.jpg"
            alt="Second"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/Lofgren-HD-1.jpg"
            alt="Third"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotoSection;
