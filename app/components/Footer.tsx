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
          Copyright © 2024 - Open Home Media LLC
        </span>
      </div>
    </Container>
  );
};

export default Footer;
