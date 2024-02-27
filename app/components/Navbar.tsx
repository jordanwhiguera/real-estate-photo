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
              src="/images/open-3.webp"
              alt="Company Logo"
              className="cursor-pointer h-20 md:h-36" // Adjust the h-24 to your preferred size on small screens and md:h-32 for medium screens and above
              onClick={() => handleNavigation("/")}
            />
            {/* Menu for larger screens */}

            {/* <h1 className="text-5xl font-bold">Lumina Home Media</h1> */}
            <nav className="hidden md:flex space-x-4 hover:cursor-pointer">
              <a
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-bold py-2 px-4 border-2 border-black rounded-full "
                onClick={() => handleNavigation("/")}
              >
                Home
              </a>
              <a
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border-2 border-black rounded-full"
                onClick={(e) => scrollToSection(e, "pricing")}
              >
                Pricing
              </a>
              <a
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border-2 border-black rounded-full"
                onClick={() => handleNavigation("/projects")}
              >
                Projects
              </a>
              <a
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border-2 border-black rounded-full"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </a>
              <a
                className="bg-transparent hover:bg-[#f0ebe6] text-[#1e251f] font-semibold py-2 px-4 border-2 border-black rounded-full"
                onClick={() =>
                  window.open("https://openhomemedia.hd.pics/order", "_blank")
                }
              >
                Book Online
              </a>
            </nav>
            {/* Hamburger Icon */}
            {isDrawerOpen ? (
              <IoMdClose
                size={28}
                className="cursor-pointer md:hidden hover:text-white self-end"
                onClick={() => setIsDrawerOpen(false)}
              />
            ) : (
              <IoMenu
                size={28}
                className="cursor-pointer md:hidden hover:text-white "
                onClick={() => setIsDrawerOpen(true)}
              />
            )}
          </div>
        </Container>
      </nav>
      {/* Drawer for smaller screens */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#C5B49E] hover:cursor-pointer transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } ${
          shouldTransition
            ? "transition-transform duration-300 ease-in-out"
            : ""
        } z-40 flex flex-col p-4`}
      >
        {/* Close button */}
        <IoMdClose
          size={28}
          className="cursor-pointer hover:text-white mb-4 self-end "
          onClick={() => setIsDrawerOpen(false)}
        />
        {/* Drawer Links */}
        <a
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6] font-bold text-center "
          onClick={() => handleNavigation("/")}
        >
          Home
        </a>
        <a
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6] font-bold text-center"
          onClick={(e) => scrollToSection(e, "pricing")}
        >
          Pricing
        </a>
        <a
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6] font-bold text-center"
          onClick={() => handleNavigation("/projects")}
        >
          Projects
        </a>
        <a
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6] font-bold text-center"
          onClick={() => handleNavigation("/contact")}
        >
          Contact
        </a>
        <a
          className="text-[#1e251f] py-2 rounded hover:bg-[#f0ebe6] font-bold text-center"
          onClick={() =>
            window.open("https://openhomemedia.hd.pics/order", "_blank")
          }
        >
          Book Online
        </a>
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
