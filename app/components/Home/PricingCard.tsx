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
  icon: IconType; // This matches the type of icons from react-icons
}

interface PricingCardProps {
  plan: Plan;
}
const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const router = useRouter();
  const IconComponent = plan.icon;

  return (
    <div className="bg-black shadow-2xl overflow-hidden rounded-3xl flex flex-col items-center lg:my-8 relative">
      <div className="p-4 flex flex-col items-center">
        {IconComponent && (
          <div className="bg-[#e3d6c3] p-4 rounded-full my-4 inline-block">
            <IconComponent size={32} className="text-black" />
          </div>
        )}
        <div className="font-bold text-xl lg:text-2xl mb-2 text-white">
          {plan.name}
        </div>
        <p className="text-white mb-4 font-bold">{plan.price}</p>
        <div className="w-full px-2 mb-4 pb-14">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-white text-sm  mb-3"
            >
              {/* Display check mark for all features */}
              <span className="mr-2 text-black p-1 bg-[#e3d6c3] rounded-full">
                <FaCheck className="text-black" size={10} />
              </span>
              <p className="flex-grow lg:text-lg">{feature}</p>
            </div>
          ))}
        </div>
        {/* Positioning the button at the bottom */}
        <div className="absolute bottom-0 w-full px-4 pb-4">
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
