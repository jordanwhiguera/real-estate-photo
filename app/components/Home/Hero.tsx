"use client";
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Container className="">
      {/* Text Section */}

      {/* About Us & Image Section */}
      <div className="flex flex-col md:flex-row items-stretch md:space-x-4  pt-4 pb-8 md:py-12">
        {/* About Us Section */}
        <div className="bg-black rounded-3xl text-white p-4 flex flex-col justify-between md:w-1/3">
          <h1 className="mb-4 lg:text-lg">
            Open Home Media is a real estate photography company based in Port
            St Lucie, FL. We proudly serve the following cities at no additional
            charge: <u>Port Saint Lucie</u>, <u>Fort Pierce</u>,{" "}
            <u>Vero Beach</u>, <u>Stuart</u>, <u>Palm City</u>,{" "}
            <u>Jensen Beach</u>,and <u>Hobe Sound</u>.
          </h1>
          <button
            onClick={() => {
              // Fire conversion event
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-17517967547/ChWyCIeYqZAbELvxm6FB",
                  value: 1.0,
                  currency: "USD",
                  event_callback: () => {
                    // After reporting, open the booking link
                    window.open(
                      "https://openhomemedia.hd.pics/order",
                      "_blank"
                    );
                  },
                });
              } else {
                // Fallback: just open if gtag isn’t ready
                window.open("https://openhomemedia.hd.pics/order", "_blank");
              }
            }}
            style={{ cursor: "pointer" }}
            className="flex items-center mt-4"
          >
            <span className="text-xl font-bold hover:underline lg:text-3xl">
              Book Now
            </span>
            <div className="ml-2 text-[white] hover:text-[#e3d6c3] text-xl lg:text-3xl rotate-45">
              <FaArrowUp />
            </div>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3 pt-4 md:pt-0 relative h-[400px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/images/port house fin-1.webp"
            alt="Photographer"
            fill // use fill instead of layout="responsive"
            quality={100}
            style={{ objectFit: "cover", borderRadius: "1.5rem" }} // rounded-3xl
          />
        </div>
      </div>
      <hr className="border-t-2 border-white w-full" />
    </Container>
  );
};

export default Hero;
