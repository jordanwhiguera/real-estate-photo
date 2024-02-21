"use client";
import React from "react";
import Container from "../Container"; // Ensure this is the correct path to your Container component

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className=" py-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">PHOTOS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace the src attribute with the actual paths to your images */}
          <img
            src="/images/IG-7.jpg"
            alt="Home exterior"
            className="w-full h-full object-cover rounded-3xl"
          />
          <img
            src="/images/IG-6.jpg"
            alt="Living room"
            className="w-full h-full object-cover rounded-3xl"
          />
          <img
            src="/images/IG-3.jpg"
            alt="Kitchen"
            className="w-full h-full object-cover rounded-3xl"
          />
          <img
            src="/images/IG-5.jpg"
            alt="Kitchen"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/IG-1.jpg"
            alt="Backyard pool"
            className="w-full h-full object-cover rounded-3xl"
          />

          <img
            src="/images/IG-2.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />

          <img
            src="/images/Lofgren-HD-2.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Lofgren-HD-3.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Lofgren-HD-6.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Lofgren-HD-7.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Lofgren-HD-8.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-2.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-3.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-4.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-5.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-6.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-9.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
          <img
            src="/images/Deville-HD-8.jpg"
            alt="Sunset view"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
