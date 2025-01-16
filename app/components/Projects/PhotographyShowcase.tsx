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
      </div>
    </Container>
  );
};

export default PhotographyShowcase;
