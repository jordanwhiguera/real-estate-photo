"use client";
import React, { useState } from "react";
import Container from "./Container";
import { useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsDrawerOpen(false);
    router.push(path);
  };
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setIsDrawerOpen(false);
    const section = document.getElementById(sectionId);
    if (window.location.pathname === "/" && section) {
      e.preventDefault(); // Need this for scroll effect to work
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#" + sectionId);
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
        setShouldTransition(false); // Disable transitions on md screens and above
      } else {
        setShouldTransition(true); // Enable transitions on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className=" w-full bg-[#C5B49E] text-[#1e251f] z-50 ">
        <Container className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img
              src="/images/jordy (1).png" // Replace with the path to your logo image
              alt="Company Logo"
              className="cursor-pointer"
              onClick={() => handleNavigation("/")}
              style={{ maxHeight: "40px" }} // Set a maximum height for your logo image if necessary
            />
            {/* Menu for larger screens */}
            <div className="hidden md:flex space-x-4">
              <button
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border border-[#1e251f] rounded"
                onClick={() => handleNavigation("pricing")}
              >
                Pricing
              </button>
              <button
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border border-[#1e251f] rounded"
                onClick={() => handleNavigation("/projects")}
              >
                Projects
              </button>
              <button
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border border-[#1e251f] rounded"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </button>
            </div>
            {/* Hamburger Icon */}
            {isDrawerOpen ? (
              <IoMdClose
                size={24}
                className="cursor-pointer md:hidden hover:text-[#feac7c]"
                onClick={() => setIsDrawerOpen(false)}
              />
            ) : (
              <IoMenu
                size={24}
                className="cursor-pointer md:hidden hover:text-[#feac7c]"
                onClick={() => setIsDrawerOpen(true)}
              />
            )}
          </div>
        </Container>
      </nav>
      {/* Drawer for smaller screens */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#C5B49E] transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } ${
          shouldTransition
            ? "transition-transform duration-300 ease-in-out"
            : ""
        } z-40 flex flex-col p-4`}
      >
        {/* Close button */}
        <IoMdClose
          size={24}
          className="cursor-pointer text-[#1e251f] mb-4"
          onClick={() => setIsDrawerOpen(false)}
        />
        {/* Drawer Links */}

        <button
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6]"
          onClick={() => handleNavigation("/pricing")}
        >
          Pricing
        </button>
        <button
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6]"
          onClick={() => handleNavigation("/projects")}
        >
          Projects
        </button>
        <button
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6]"
          onClick={() => handleNavigation("/contact")}
        >
          Contact
        </button>
      </div>
      {/* Overlay to close drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;