import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Home/Hero";
import InfoSection from "./components/Home/InfoSection";
import PhotoSection from "./components/Home/PhotoSection";
import FeaturedWorks from "./components/Home/FeaturedWorks";
import ProjectHeader from "./components/Home/ProjectHeader";
import ArtisticGallery from "./components/Home/ArtisticGallary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <PhotoSection />
      <FeaturedWorks />
      <ProjectHeader />
      <ArtisticGallery />
      <Footer />
    </>
  );
}
