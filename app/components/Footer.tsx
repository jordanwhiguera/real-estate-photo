"use client";
import React from "react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className=" py-4 bg-footer flex flex-col md:flex-row justify-between items-center ">
      <div className="mb-4 md:mb-0">
        <span className=" font-semibold">
          Copyright © 2024 - Open Home Media
        </span>
      </div>
      <div className="flex space-x-4">
        {/* Social icons */}
        <a
          href="https://www.instagram.com/openhome.media/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size="28" aria-label="Instagram" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
