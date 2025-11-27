"use client";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="py-4 bg-footer flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
      <div className="mb-2 md:mb-0">
        <span className="font-semibold">© 2024 Open Home Media LLC</span>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        {/* <a href="/agreement" className="hover:underline">
          Media Agreement
        </a> */}
      </div>
    </Container>
  );
};

export default Footer;
