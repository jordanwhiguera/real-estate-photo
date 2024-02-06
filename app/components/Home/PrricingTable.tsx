"use client";
// PricingTable.tsx
import React from "react";
import PricingCard from "./PricingCard"; // Adjust the import path as necessary
import Container from "../Container";

import { FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";

import { Plan } from "./PricingCard";
const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Houses < 2500 sqft",
      price: "$150",
      features: [
        "Unlimited photos",
        "Edits to photos included",
        "24 hour turnaround",
        "24/7 support",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Houses > 2500 sqft",
      price: "$200",
      features: [
        "Unlimited photos",
        "Edits to photos included",
        "24 hour turnaround",
        "24/7 support",
      ],
      icon: GiFamilyHouse, // And here, if you want the same icon for all plans
    },
    {
      name: "Optional Add-On",
      price: "Varies",
      features: [
        "Drone photography - $50",
        "Zillow 3D tour w/ floor plan- $100",
        "30-60s TikTok / IG video - $100",
        "2 minute video tour - $200",
      ],
      icon: BsFillBuildingsFill, // Repeat for each plan as needed
    },
    // ... include other plans if any
  ];

  return (
    <Container>
      <div id="pricing" className="pb-6">
        <div className="flex justify-between items-center mb-4 lg:-mb-3">
          <h2 className="text-5xl font-bold text-black ">Pricing</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
