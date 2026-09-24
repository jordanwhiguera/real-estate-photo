"use client";

import React from "react";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="py-4 bg-footer flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
      <div className="mb-2 md:mb-0">
        <span className="font-semibold">© 2024 Open Home Media LLC</span>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <a
          href="/terms-and-conditions"
          className="font-semibold hover:underline"
        >
          Terms & Conditions
        </a>

        <a
          href="https://www.instagram.com/openhome.media"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Home Media Instagram"
          className="text-xl hover:opacity-70 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
