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
      name: "Photos",
      features: [
        "10-15 Interior/Exterior Photos + 5-8 Drone Photos: $150",

        "20-35 Interior/Exterior Photos + 5-8 Drone Photos: $175",
        "(Most popular)",
        "40-55 Interior/Exterior Photos + 5-8 Drone Photos: $200",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Aerial Package",
      price: "$240",
      features: [
        "30 Second Aerial Video",
        "Interior and Exterior Photos",
        "Drone Photos",
      ],
      icon: GiDeliveryDrone, // Pass the FaHome icon here
    },
  ];

  const additionalServices = [
    "Drone Photos of Community/Amenities - $25",
    "Floor Plan w/ Room Measurements - $50",
    "Zillow 3D Tour - $75",
    "Matterport 3D Tour - $150",
    "Drone Photos Only (Boundary Lines Included) - $150",
    "1-2 min Property Video w/ Drone Footage - $225",
    "Virtual Twilight - $20/photo",
    "Real Twilight Photos - $150",
    "Property Website - $25",
    "Add Boundary Lines to Drone Photos (Note: Markers are Free) - $15",
    "Virtual Staging - $30/photo",
  ];

  return (
    <Container>
      <div id="pricing" className="pb-16">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black">PRICING</h2>
        </div>
        {/* New Line for Photo Delivery Information */}
        <p className="text-lg lg:text-xl text-black mt-2">
          Photos delivered the next day by 12 PM (often much sooner)!
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-8 lg:pt-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-black">
            Additional Services:
          </h3>
        </div>
        <div className="pt-4">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex items-center text-black mb-2">
              <span className="mr-2 text-black p-1 bg-black rounded-full">
                <FaCheck className="text-white" size={10} />
              </span>
              <p className="flex-grow">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
