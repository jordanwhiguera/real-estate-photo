"use client";
import React from "react";
import Container from "../Container";

const Hero: React.FC = () => {
  return (
    <Container className="flex flex-1">
      {/* Text Section */}
      <div className="flex flex-col justify-center py-8 pr-8 md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">CAPTURING</h1>
        <p className="text-2xl mb-4">THE MOMENTS THAT CAPTIVATE YOUR HEART</p>
        <div className="bg-black text-white p-4">
          <p className="mb-4">
            Amelia Allen is a lifestyle, portrait and documentary photographer
            from Somerset who now lives and works in London.
          </p>
          <button className="flex items-center">
            <span className="font-semibold mr-2">ABOUT US</span>
            <span className="text-xl">↑</span>{" "}
            {/* Replace with an actual arrow icon */}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-end">
        <img
          src="/images/stowbasepreview.png" // Replace with the actual path to your image
          alt="Photographer"
          className="w-full h-full object-cover"
        />
      </div>
    </Container>
  );
};

export default Hero;
