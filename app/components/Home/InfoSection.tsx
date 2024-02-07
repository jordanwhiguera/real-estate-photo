"use client";
import React from "react";
import Container from "../Container";

const InfoSection: React.FC = () => {
  return (
    <Container className="py-16 flex flex-col lg:flex-row">
      {/* Title Section */}
      <div className="lg:w-1/3 flex items-start  lg:justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Services</h2>
      </div>

      {/* Text Block Section */}
      <div className="lg:w-2/3">
        <p className="text-base lg:text-lg pl-0 lg:pl-2">
          At Jordy Photos, we specialize in bringing properties to life through
          high-definition photography and cinematographic videography. Our
          mission is to capture the essence and unique qualities of each
          property, ensuring it stands out in today's competitive real estate
          market. Here's an overview of the services we offer:
        </p>
      </div>
    </Container>
  );
};

export default InfoSection;
