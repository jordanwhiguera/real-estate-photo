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

import { Plan } from "./PricingCard";
const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Photos",
      // price: "$175",
      features: [
        "10-15 Interior and Exterior Photos + 5-8 Drone Photos: $150",
        "25-35 Interior and Exterior Photos + 5-8 Drone Photos: $175",
        "45-55 Interior and Exterior Photos + 5-8 Drone Photos: $200",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "	Aerial Package",
      price: "$240",
      features: [
        "30 Second Aerial Video",
        "Photos of the Interior and Exterior",
        "Drone Photos",
      ],
      icon: GiFamilyHouse, // Pass the FaHome icon here
    },

    // {
    //   name: "Homes ≥ 2500 SQFT",
    //   price: "$250",
    //   features: [
    //     "Photos of the Interior and Exterior",
    //     "Drone Photos",
    //     "Floor Plan w/ Measurements",
    //   ],
    //   icon: GiFamilyHouse, // And here, if you want the same icon for all plans
    // },

    // ... include other plans if any
  ];
  const additionalServices = [
    "Drone Photos of Amenities / Community - FREE",
    "Floor Plan w/ Room Measurements - $50",
    "Zillow 3D Tour - $75",
    "Matterport 3D Tour - $150",
    "Drone Photos Only (Boundary Lines Included) - $150",
    "1-2 min Property Video w/ Drone Footage - $200",
    "2 Virtual Twilight - $25",
    "4 Virtual Twilight - $40",
    "Real Twilight Photos - $150",
    "Property Webiste - $25",
    "Add Boundary Lines to Drone Photos (Note: Markers are Free) - $15",
    "Virtual Staging - $30/photo",

    // Add more services as needed
  ];

  return (
    <Container>
      <div id="pricing" className="pb-16">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black ">
            PRICING
          </h2>
        </div>
        {/* <div className="flex justify-between items-center pt-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-black ">
            Package Pricing:
          </h3>
        </div> */}
        <div className="grid md:grid-cols-2  gap-4 pt-8 lg:pt-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-black ">
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
