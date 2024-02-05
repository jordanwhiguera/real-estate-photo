"use client";
import React from "react";
import Container from "../Container"; // Ensure the correct path

const ArtisticGallary: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Top left image */}
        <img
          src="/images/stowbasepreview.png" // Replace with actual paths to your images
          alt="Scenic view"
          className="w-full object-cover rounded-lg"
          style={{ height: "50vh" }} // Adjust height as needed
        />
        {/* Top right image */}
        <img
          src="/images/stowbasepreview.png" // Replace with actual paths to your images
          alt="Portrait"
          className="w-full object-cover rounded-lg"
          style={{ height: "50vh" }} // Adjust height as needed
        />
        {/* Bottom full-width image */}
        <img
          src="/images/stowbasepreview.png" // Replace with actual paths to your images
          alt="Workspace"
          className="w-full object-cover rounded-lg col-span-1 md:col-span-2"
          style={{ height: "50vh" }} // Adjust height as needed
        />
      </div>
    </Container>
  );
};

export default ArtisticGallary;
