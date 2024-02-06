"use client";
import React from "react";
import Container from "../Container"; // Ensure this is the correct path to your Container component

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className=" py-10">
        <h2 className="text-5xl font-bold mb-8">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace the src attribute with the actual paths to your images */}
          <img
            src="/images/home.webp"
            alt="Home exterior"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/home.webp"
            alt="Living room"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/home.webp"
            alt="Kitchen"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/home.webp"
            alt="Backyard pool"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/home.webp"
            alt="House interior"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/home.webp"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
