"use client";
import React from "react";
import PricingCard from "./PricingCard";
import Container from "../Container";
import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Plan } from "./PricingCard";

const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Listing Photos",

      features: ["Interior and Exterior Photos", "Drone Photos"],
      pricingTiers: [
        { size: "Up to 2,999 SQFT", price: "$175" },
        { size: "3,000 - 3,999 SQFT", price: "$225" },
        { size: "4,000 - 4,999 SQFT", price: "$300" },
      ],
      icon: FaHome,
    },
  ];

  const additionalServices = [
    "Stand-Alone Drone Photos - $150",
    "Add Boundary Lines to Drone Photos - $15",
    "Drone Photos of Community/Amenities - $25",
    "Floor Plan - $50",
    "Zillow 3D Tour w/ Interactive Floor Plan - $75",
    "Same Day Delivery - $75",
    "30s Drone Video - $100",
    "Vertical Walkthrough Video w/ Drone Footage - $125",
    "Virtual Twilight - $20 per photo",
    "Virtual Staging - $30 per photo",
    "Property Website - $25",
    "Real Twilight Photos - $175",
  ];

  return (
    <Container>
      <div id="pricing" className="pb-8 md:py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black -mb-2 -mt-2 lg:mb-2 lg:mt-2">
            PRICING
          </h2>
        </div>
        <p className="text-base lg:text-lg text-black mt-6 -mb-2">
          Photos delivered the next day by 12 PM (often much sooner)!
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-8 lg:pt-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <p className="text-sm lg:text-base  mt-7 lg:mt-0 lg:mb-2  ">
          <em>Note: Please contact for homes {">"} 5000 SQFT.</em>
        </p>

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
              <p className="flex-grow lg:text-lg">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
