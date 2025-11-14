"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className="py-10">
        {/* Photos Section */}
        <h3 className="text-3xl lg:text-5xl font-bold  mb-4 md:mb-8 -mt-8 md:mt-0">
          PHOTO
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/images/cro-1.webp" // Replace with actual paths to your images
            alt="Image 3"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-3xl"
          />
          <Image
            src="/images/7-thumb IN-21.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/coosa ex-5.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />

          <Image
            src="/images/4-thumb IN-28.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/or in-29.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />

          <Image
            src="/images/2-a1a in-32.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />

          <Image
            src="/images/kitch-1.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/4-tram exterior new-6.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/kit-1.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />

          <Image
            src="/images/be-1.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/5-tram exterior new-8.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />

          <Image
            src="/images/be-2.webp"
            alt="Home exteriors"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
        </div>

        {/* Video Section */}
        {/* <div className="pt-10">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-6">VIDEO</h3>
          <p className="text-md font-medium my-4">Drone Video</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="https://vimeo.com/1047355337?share=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/drone play1-1.webp"
                alt="Video thumbnail"
                width={500}
                height={100}
                className="rounded-3xl w-full h-full cursor-pointer hover:opacity-80"
              />
            </a>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
