"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const PhotographyShowcase: React.FC = () => {
  return (
    <Container>
      <div className=" py-10">
        <h3 className="text-3xl lg:text-5xl font-bold mb-8">PHOTOS</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace the src attribute with the actual paths to your images */}
          {/* <Image
            src="/images/lago hd-1.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          /> */}
          <Image
            src="/images/mara in5.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/port other-12.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />
          <Image
            src="/images/Lomb ex p2-13.webp"
            // src="/images/violet-30.jpg"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full h-full"
          />

          <Image
            src="/images/Bella in-13.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />

          <Image
            src="/images/mon-3.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/bath.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-15.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/violet-14.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-6.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-3.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-9.webp"
            alt="Home exterior"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />
          <Image
            src="/images/port other-2.webp"
            alt="Home exteriofr"
            width={500} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-3xl w-full"
          />

          {/* <Image
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
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
