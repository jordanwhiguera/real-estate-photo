"use client";
import React from "react";
import Container from "../Container"; // Ensure this import path is correct
import { FaArrowUp } from "react-icons/fa"; // Import the icon
import { useRouter } from "next/navigation";

const ProjectsHeader: React.FC = () => {
  const router = useRouter();
  return (
    <Container className="flex justify-between items-center pb-8 md:py-4 bg-[#e3d6c3;]">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#1e251f]">
        PORTFOLIO
      </h2>
      <button
        onClick={() => router.push("/portfolio")}
        className="flex items-center text-[#1e251f]"
      >
        <span className=" text-lg lg:text-2xl font-bold hover:underline">
          SHOW MORE
        </span>
        <div className="ml-2 bg-black text-[#e3d6c3] hover:text-[white] rounded-full p-2 rotate-45">
          <FaArrowUp /> {/* Icon itself is white, background is black */}
        </div>
      </button>
    </Container>
  );
};

export default ProjectsHeader;
