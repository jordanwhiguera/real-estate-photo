"use client";
import React from "react";
import Container from "../Container";

const InfoSection: React.FC = () => {
  return (
    <Container className="py-16 flex flex-col lg:flex-row">
      {/* Title Section */}
      <div className="lg:w-1/3 flex items-start  lg:justify-start">
        <h2 className="text-5xl font-bold mb-6">ABOUT ME</h2>
      </div>

      {/* Text Block Section */}
      <div className="lg:w-2/3">
        <p className="text-base lg:text-lg pl-0 lg:pl-2">
          Starting her career in fashion photography at the age of 18, it was on
          the sets of high end brand campaigns and fashion shows that Amelia
          learnt the technicalities of what has become her signature style.
          Having always been drawn to sociological documentary photography,
          Amelia applies her classic and energetic style seamlessly to her
          portraiture and documentary projects.
        </p>
      </div>
    </Container>
  );
};

export default InfoSection;
