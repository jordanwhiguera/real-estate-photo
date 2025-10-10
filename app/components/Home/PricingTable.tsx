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
      name: "Base Package",

      features: [
        "Interior & Exterior Photos",
        "5-8 Drone Photos",
        "Aerial Amenity Photos",
      ],
      pricingTiers: [
        { size: "Up to 2,500 SQFT", price: "$175" },
        { size: "2,501 - 3,500 SQFT", price: "$215" },
        { size: "3,501 - 4,500 SQFT", price: "$255" },
      ],
      icon: FaHome,
    },
  ];

  const additionalServices = [
    "Add Boundary Lines to Drone Photos - $15",

    "Floor Plan w/ Room Measurements - $50",
    "Zillow 3D Tour w/ Floor Plan - $75",
    "Same Day Delivery - $75",

    "Vertical Video w/ Drone Footage - $150",
    "Walkthrough Video w/ Drone Footage - $150",
    "Agent Intro (Appear at Start of Video) - $50",
    "Virtual Twilight - $20 per photo",
    "Item Removal - $20 per photo",
    "Virtual Staging - $30 per photo",
    "Property Website - $25",
    "Real Twilight Photos - $250",
  ];
  const photosOnlyPricing = [
    "Up to 2,500 SQFT - $150",
    "2,501 - 3,500 SQFT - $190",
    "3,501 - 4,500 SQFT - $230",
  ];
  const droneOnlyPricing = [
    "Drone Photos - $125",
    "Drone Video - $100 (Add-On)",
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
          <em>Note: Please contact for homes {">"} 4,500 SQFT.</em>
        </p>
        <div className="pt-6">
          <h3 className="text-lg lg:text-2xl font-bold text-black lg:-mt-4">
            Photos Only
          </h3>
          {/* <p className="text-sm lg:text-base text-black italic pt-2">
            Interior & Exterior Photos Only
          </p> */}
        </div>
        <div className="pt-4">
          {photosOnlyPricing.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-sm md:text-base text-black mb-2"
            >
              <span className="mr-2 text-black p-1 bg-black rounded-full">
                <FaCheck className="text-[#e3d6c3]" size={10} />
              </span>
              <p className="flex-grow lg:text-lg">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-6">
          <h3 className="text-lg lg:text-2xl font-bold text-black lg:-mt-4">
            Add-On Services
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
        <div className="flex justify-between items-center pt-6">
          <h3 className="text-lg lg:text-2xl font-bold text-black lg:-mt-4">
            Drone Services
          </h3>
        </div>
        <div className="pt-4">
          {droneOnlyPricing.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-sm md:text-base text-black mb-2"
            >
              <span className="mr-2 text-black p-1 bg-black rounded-full">
                <FaCheck className="text-[#e3d6c3]" size={10} />
              </span>
              <p className="flex-grow lg:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
