"use client";
import React from "react";
import Container from "../Container";

const InfoSection: React.FC = () => {
  return (
    <Container className="py-16 flex flex-col lg:flex-row">
      {/* Title Section */}
      <div className="lg:w-1/3 flex items-start lg:justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">SERVICES</h2>
      </div>

      {/* Text Block Section */}
      <div className="lg:w-2/3">
        <p className="text-base lg:text-lg mb-4 lg:pl-2">
          At Lumina Home Media, we specialize in bringing properties to life
          through high-definition photography and cinematographic videography.
          Our mission is to capture the essence and unique qualities of each
          property, ensuring it stands out in today&apos;s competitive real
          estate market. Here&apos;s an overview of the services we offer:
        </p>
        <ul className="list-disc pl-4 lg:pl-8 space-y-2">
          <li>
            <strong>Professional Real Estate Photography:</strong> Our
            photography service focuses on capturing every room and feature with
            precision and beauty. Using advanced equipment and techniques, we
            ensure each image is well-composed, properly lit, and showcases the
            property in its best light. From cozy interiors to sweeping
            landscapes, our photos tell a compelling story of your property.
          </li>
          <li>
            <strong>Cinematic Property Videography:</strong> Elevate your
            listings with our videography service. We create cinematic videos
            that offer potential buyers a dynamic and immersive experience of
            the property. Our videos are not just walkthroughs; they&apos;re
            engaging narratives that highlight the property&apos;s best features
            and give viewers a sense of what makes it special.
          </li>
          <li>
            <strong>Aerial Drone Photography & Videography:</strong> Gain a new
            perspective with our aerial drone services. Perfect for showcasing
            large estates, properties with unique landscapes, or highlighting
            the neighborhood and surrounding amenities. Our drone footage adds a
            dramatic and comprehensive view that captivates and impresses.
          </li>
          <li>
            <strong>Virtual Tours & 360 Photography:</strong> Allow potential
            buyers to explore properties from the comfort of their home. Our
            virtual tours and 360 photography services create an interactive
            experience, giving viewers a detailed look at the property&apos;s
            layout and features. It&apos;s a convenient and effective tool for
            engaging distant buyers or those who prefer a preliminary digital
            viewing.
          </li>
          <li>
            <strong>Editing & Post-Production:</strong> Every photo and video
            undergoes professional editing to ensure the final product is
            polished and market-ready. We adjust lighting, color, and
            composition to enhance the visual appeal and ensure consistency
            across all media.
          </li>
          <li>
            <strong>Custom Packages:</strong> Understanding that every property
            is unique, we offer customizable packages tailored to meet your
            specific needs. Whether you&apos;re listing a single-family home, a
            luxury estate, or a commercial property, we work with you to select
            the services that will best showcase your property.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default InfoSection;
