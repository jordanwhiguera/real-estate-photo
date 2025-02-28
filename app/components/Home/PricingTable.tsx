"use client";
// PricingTable.tsx
import React from "react";
import PricingCard from "./PricingCard"; // Adjust the import path as necessary
import Container from "../Container";

import { FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

import { Plan } from "./PricingCard";
const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Listing Photos",
      features: [
        "20-30 Photos + 5-8 Drone Photos: $175",

        "40-50 Photos + 5-8 Drone Photos: $200",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    // {
    //   name: "Additional Photo Sevices",
    //   price: "$240",
    //   features: [
    //     "30 Second Aerial Video",
    //     "Interior and Exterior Photos",
    //     "Drone Photos",
    //   ],
    //   icon: GiDeliveryDrone, // Pass the FaHome icon here
    // },
  ];

  const additionalServices = [
    "Drone Photos of Community/Amenities - $25",
    "Floor Plan - $50",
    "Zillow 3D Tour w/ Interactive Floor Plan - $75",
    "20s Aerial Video - $75",
    "60s Property Video w/ Drone Footage - $175",
    "Add Boundary Lines to Drone Photos - $15",
    "Virtual Twilight - $20/photo",
    "Virtual Staging - $30/photo",
    "Property Website - $25",
    "Drone/Exterior Photos - $150",
    "Vacation Rental Photos (Aerial Included) - $200",
    "Real Twilight Photos - $175",
    "Same Day Delivery - $75",
  ];

  return (
    <Container>
      <div id="pricing" className="pb-8 md:py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black -mb-2 -mt-2 lg:mb-2 lg:mt-2">
            PRICING
          </h2>
        </div>
        {/* New Line for Photo Delivery Information */}
        <p className="text-base lg:text-lg text-black mt-6 -mb-2">
          Photos delivered the next day by 12 PM (often much sooner)!
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-8 lg:pt-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="flex justify-between items-center pt-6">
          <h3 className="text-lg lg:text-2xl font-bold text-black lg:-mt-4">
            Additional Services:
          </h3>
        </div>
        <div className="pt-4">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-sm md:text-base text-black mb-2"
            >
              <span className="mr-2 text-black p-1 bg-black rounded-full">
                <FaCheck className="text-[#e3d6c3]" size={10} />
              </span>
              <p className="flex-grow lg:text-lg ">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
