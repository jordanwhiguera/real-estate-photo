"use client";
import React, { useState, useRef } from "react";
import Container from "../Container";
import Image from "next/image";

const PhotographyShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoState = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(!video.paused);
  };

  return (
    <Container>
      <div className="py-10">
        {/* Photos Section */}
        <h3 className="text-3xl lg:text-5xl font-bold mb-8">PHOTOS</h3>
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
            alt="Home exterior"
            width={500}
            height={100}
            className="rounded-3xl w-full"
          />
        </div>

        {/* Videos Section */}
        <h3 className="text-3xl lg:text-5xl font-bold mt-12 mb-8">VIDEOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group">
            <video
              ref={videoRef}
              className="rounded-3xl w-full"
              poster="/images/Drone.webp"
              controls
              onPlay={handleVideoState}
              onPause={handleVideoState}
            >
              <source src="/videos/Drone Vid v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div
                className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full text-2xl font-bold group-hover:scale-110 transform transition-transform duration-300 pointer-events-auto"
                onClick={(e) => {
                  e.preventDefault();
                  handlePlayPause();
                }}
              >
                {isPlaying ? "||" : "▶"}
              </div>
            </div>
          </div>
          {/* Add more videos if needed */}
        </div>
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
