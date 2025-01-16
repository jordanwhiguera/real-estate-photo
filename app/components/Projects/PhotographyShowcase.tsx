"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className="py-10">
        {/* Photos Section */}
        <h3 className="text-3xl lg:text-5xl font-bold  mb-4 md:mb-8 -mt-4 md:mt-0">
          PHOTO
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/images/mara in5.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/port other-12.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lomb ex p2-13.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Bella in-13.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/mon-3.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/bath.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-15.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/violet-14.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-6.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-3.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-9.webp"
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-2.webp"
            alt="Home exteriors"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
        </div>

        {/* Video Section */}
        <div className="pt-10">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-6">VIDEO</h3>
          <p className="text-md font-medium my-4">Aerial Video</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="https://vimeo.com/1047355337?share=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Drone Play-1.webp"
                alt="Video thumbnail"
                width={500}
                height={100}
                className="rounded-3xl w-full h-full cursor-pointer hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
