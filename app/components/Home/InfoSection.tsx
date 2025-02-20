"use client";
import React from "react";
import Container from "../Container";
const InfoSection: React.FC = () => {
  return (
    <Container className="py-6 md:py-10 flex flex-col lg:flex-row">
      {/* Title Section */}
      <div className="lg:w-1/3 flex items-start lg:justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">SERVICES</h2>
      </div>

      {/* Text Block Section */}
      <div className="lg:w-2/3">
        <p className="text-base lg:text-lg mb-4 lg:pl-2">
          Open Home Media is a one-stop-shop real estate photography company
          that offers high-quality media services at affordable prices, with all
          photos delivered by the next morning. We are available Monday through
          Saturday, ready to help showcase your property with a variety of
          services:
        </p>
        <ul className="list-disc pl-4 lg:pl-8 space-y-2 lg:text-lg ">
          <li>
            <strong>Photography:</strong> Capture interiors and exteriors with
            aerial photos included.
          </li>
          <li>
            <strong>Videography:</strong> Short 30-second aerial videos, or
            comprehensive 1-2 minute property videos.
          </li>
          <li>
            <strong>3D Tours:</strong> Interactive 3D virtual tours powered by
            Zillow, offering a detailed and immersive property experience.
          </li>
          <li>
            <strong>Floor Plans:</strong> Accurate layouts to give a clear sense
            of space and design.
          </li>
        </ul>
        <p className="text-sm lg:text-base mt-4 lg:pl-8">
          <em>
            Note: For areas outside our primary service area (Jupiter,
            Sebastian, and Okeechobee), a $25 travel fee may apply.
          </em>
        </p>
      </div>
    </Container>
  );
};

export default InfoSection;
