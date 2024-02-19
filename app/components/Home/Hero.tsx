"use client";
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Container className="">
      {/* Text Section */}
      <div className="pb-8  md:py-16">
        {/* <img
          src="/images/capture-big.png" // Replace with the actual path to the capturing image
          alt="Capturing"
          className="w-full object-contain " // Adjust the height as needed
        /> */}
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          CAPTURING EVEY HOME IN THEIR BEST LIGHT
        </h1>
      </div>

      {/* About Us & Image Section */}
      <div className="flex flex-col md:flex-row items-stretch md:space-x-4 pb-16">
        {/* About Us Section */}
        <div className="bg-black rounded-3xl text-white p-4 flex flex-col justify-between md:w-1/3">
          <p className="mb-4">
            Jordan is a professional photographer and videographer based in Port
            Saint Lucie. He specializes in real estate photography and
            videography, and understands the importance of capturing the essence
            of a property. He is dedicated to providing the best service to his
            clients.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="flex items-center mt-4"
          >
            <span className=" text-xl font-bold hover:underline">
              Contact me
            </span>
            <div className="ml-2 text-[white] hover:text-[#c5b49e] rotate-45">
              <FaArrowUp /> {/* Icon itself is white, background is black */}
            </div>
            {/* Replace with an actual arrow icon */}
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3 pt-4 md:pt-0">
          <img
            src="/images/home-reserve-1.jpg" // Replace with the actual path to your image
            alt="Photographer"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Hero;
