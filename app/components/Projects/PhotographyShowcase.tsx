"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className=" py-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">PHOTOS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace the src attribute with the actual paths to your images */}
          <Image
            src="/images/IG-7.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/IG-6.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/IG-3.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/IG-5.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/IG-1.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />

          <Image
            src="/images/IG-2.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />

          <Image
            src="/images/Lofgren-HD-2.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lofgren-HD-3.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lofgren-HD-6.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lofgren-HD-7.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lofgren-HD-8.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-2.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-3.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-4.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-5.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-6.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-9.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Deville-HD-8.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
