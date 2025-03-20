"use client";
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export interface Plan {
  name: string;
  price?: string;
  features: string[];
  pricingTiers: { size: string; price: string }[]; // Holds sqft and pricing
  icon: IconType; // Matches react-icons type
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const router = useRouter();
  const IconComponent = plan.icon;

  return (
    <div className="bg-black shadow-2xl overflow-hidden rounded-3xl flex flex-col items-center lg:my-8 relative">
      <div className="p-4 flex flex-col items-center ">
        {IconComponent && (
          <div className="bg-[#e3d6c3] p-4 rounded-full mb-4 mt-3 inline-block">
            <IconComponent size={32} className="text-black" />
          </div>
        )}
        <div className="font-bold text-xl lg:text-2xl mb-1 text-white">
          {plan.name}
        </div>
        <p className="text-white mb-4 font-bold ">{plan.price}</p>

        {/* Features list */}
        <div className="w-full px-6 md:px-12 mb-4">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-white  text-sm md:text-base mb-2 "
            >
              <span className="mr-2 text-black p-1 bg-[#e3d6c3] rounded-full">
                <FaCheck className="text-black" size={10} />
              </span>
              <p className="flex-grow lg:text-lg">{feature}</p>
            </div>
          ))}
        </div>

        {/* Pricing tiers */}
        <div className="w-full px-4 mb-20  rounded-xl bg-[#e3d6c3;]">
          {/* Column Headers */}
          <div className="flex justify-between text-black text-sm md:text-base lg:text-lg font-semibold border-b border-black  py-1">
            <span>SQFT</span>
            <span>Pricing</span>
          </div>

          {/* Pricing Rows - Now includes 4,000 - 4,999 sqft */}
          {plan.pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="flex justify-between text-black text-sm md:text-base lg:text-lg  py-2"
            >
              <span>{tier.size}</span>
              <span className="font-bold">{tier.price}</span>
            </div>
          ))}
        </div>

        {/* Book Now button */}
        <div className="absolute bottom-0 w-full px-4 pb-4 ">
          <Button
            label="Book Now"
            onClick={() =>
              window.open("https://openhomemedia.hd.pics/order", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
