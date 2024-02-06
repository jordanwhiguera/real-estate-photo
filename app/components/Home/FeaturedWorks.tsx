"use client";
import React from "react";
import Container from "../Container";

const FeaturedWorks: React.FC = () => {
  // Define your featured works data structure
  const works = [
    {
      id: 1,
      title: "ART DIRECTOR",

      imageUrl: "/images/home.webp", // Replace with your image path
    },
    {
      id: 2,
      title: "PHOTOGRAPHER",
      imageUrl: "/images/home.webp", // Replace with your image path
    },
    {
      id: 3,
      title: "VIDEOGRAPHER",
      imageUrl: "/images/home.webp", // Replace with your image path
    },
  ];

  return (
    <Container className="bg-black">
      <div className="py-8">
        <h2 className="text-5xl font-bold text-white mb-10">FEATURED WORKS</h2>
        <div className="grid grid-cols-1 gap-4">
          {works.map((work) => (
            <div key={work.id} className="relative text-white">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full object-cover rounded-3xl"
                style={{ height: "25vh" }} // Set image height to 50% of the viewport height
              />
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  work.id === 2 ? "right-4" : "left-4"
                }`}
              >
                <p className="text-3xl font-bold">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedWorks;
