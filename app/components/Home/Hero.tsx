"use client";
import React from "react";
import Container from "../Container";

const Hero: React.FC = () => {
  return (
    <Container>
      {/* Text Section */}
      <div className="py-8 md:py-16">
        <img
          src="/images/capturing 2.png" // Replace with the actual path to the capturing image
          alt="Capturing"
          className="w-full object-contain " // Adjust the height as needed
        />
        <p className="text-2xl mb-4">THE MOMENTS THAT CAPTIVATE YOUR HEART</p>
      </div>

      {/* About Us & Image Section */}
      <div className="flex flex-col md:flex-row items-stretch md:space-x-4 pb-8">
        {/* About Us Section */}
        <div className="bg-black text-white p-4 flex flex-col justify-between md:w-1/3">
          <p className="mb-4">
            Amelia Allen is a lifestyle, portrait and documentary photographer
            from Somerset who now lives and works in London.
          </p>
          <button className="flex items-center mt-4">
            <span className="font-semibold mr-2">ABOUT US</span>
            <span className="text-xl">↑</span>{" "}
            {/* Replace with an actual arrow icon */}
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3">
          <img
            src="/images/stowbasepreview.png" // Replace with the actual path to your image
            alt="Photographer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Hero;
