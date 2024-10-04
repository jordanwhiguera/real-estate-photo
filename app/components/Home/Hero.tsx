"use client";
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Container className="">
      {/* Text Section */}

      {/* About Us & Image Section */}
      <div className="flex flex-col md:flex-row items-stretch md:space-x-4 py-8 md:py-12">
        {/* About Us Section */}
        <div className="bg-black rounded-3xl text-white p-4 flex flex-col justify-between md:w-1/3">
          <h1 className="mb-4">
            Open Home Media is a real estate media company based in Port Saint
            Lucie, FL. We proudly serve the following cities at no additional
            charge: <u>Port Saint Lucie</u>, <u>Fort Pierce</u>,{" "}
            <u>Vero Beach</u>, <u>Stuart</u>, <u>Palm City</u>,{" "}
            <u>Jensen Beach</u>,and <u>Hobe Sound</u>.
          </h1>
          <button
            onClick={() =>
              window.open("https://openhomemedia.hd.pics/order", "_blank")
            }
            className="flex items-center mt-4"
          >
            <span className=" text-xl font-bold hover:underline">Book Now</span>
            <div className="ml-2 text-[white] hover:text-[#c5b49e] rotate-45">
              <FaArrowUp /> {/* Icon itself is white, background is black */}
            </div>
            {/* Replace with an actual arrow icon */}
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3 pt-4 md:pt-0">
          <Image
            src="/images/5386 mara new-1.jpg"
            alt="Photographer"
            layout="responsive" // Responsive layout maintains aspect ratio
            width={600} // Define width to keep the aspect ratio
            height={600} // Define height to make it square
            quality={100} // Keeps image at high resolution
            objectFit="cover" // Ensures the image maintains its aspect ratio within the container
            className="rounded-3xl"
          />
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Hero;
