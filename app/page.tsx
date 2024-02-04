import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Home/Hero";
import InfoSection from "./components/Home/InfoSection";
import PhotoSection from "./components/Home/PhotoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <PhotoSection />
    </>
  );
}
