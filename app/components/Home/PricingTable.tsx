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
      name: "Base Package",
      price: "$195",
      features: ["25 Photos of the Interior and Exterior", "6 Drone Photos"],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Pro Package",
      price: "$295",
      features: [
        "Unlimited Photos of the Interior and Exterior",
        "6 Drone Photos",
        "Floor Plan w/ Measurements",
        "Property Website",
      ],
      icon: GiFamilyHouse, // And here, if you want the same icon for all plans
    },
    {
      name: "Plus Package",
      price: "$395",
      features: [
        "Unlimited Photos of the Interior and Exterior",
        "6 Drone Photos",
        "Floor Plan w/ Measurements",
        "Property Website",
        "1 Social Media Vertical Video",
      ],
      icon: FaBuilding, // Repeat for each plan as needed
    },
    {
      name: "Ultimate Package",
      price: "$595",
      features: [
        "Unlimited Photos of the Interior and Exterior",
        "6 Drone Photos",
        "Floor Plan w/ Measurements",
        "Property Website",
        "2 Social Media Vertical Videos (1 Video w/ Drone Footage)",
        "Matterport 3D Virtual Tour",
        "1 Virtual Twilight Photo",
      ],
      icon: BsFillBuildingsFill, // Repeat for each plan as needed
    },
    // ... include other plans if any
  ];
  const additionalServices = [
    "25 Photos of Interior and Exterior - $145",
    "40 Photos of Interior and Exterior - $195 (Drone Photos +$50)",
    "Drone Photos Only - $125",
    "Vertical Social Media w/ Drone Footage - $145",
    "Vertical Social Media Video - $120",
    "3D Matterport Virtual Tour - $150",
    "Floor Plan w/ Measurements - $75",

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
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-black ">
            Package Pricing:
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 lg:pt-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-black ">
            Stand-Alone Service Pricing:
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
