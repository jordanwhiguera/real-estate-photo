"use client";
import React from "react";
import Container from "../Container"; // Ensure this import path is correct
import { FaArrowUp } from "react-icons/fa"; // Import the icon

const ProjectsHeader: React.FC = () => {
  return (
    <Container className="flex justify-between items-center pt-16 pb-8 bg-[#C5B49E]">
      <h1 className="text-5xl font-bold text-[#1e251f]">PROJECTS</h1>
      <button className="flex items-center text-[#1e251f]">
        <span className=" text-2xl font-bold hover:underline">SHOW ALL</span>
        <div className="ml-2 bg-black text-[#c5b49e] hover:text-white rounded-full p-2 rotate-45">
          <FaArrowUp /> {/* Icon itself is white, background is black */}
        </div>
      </button>
    </Container>
  );
};

export default ProjectsHeader;
