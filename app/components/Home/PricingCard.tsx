"use client";
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export interface Plan {
  name: string;
  price: string;
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
      {" "}
      {/* Added relative here */}
      <div className="p-4 flex flex-col items-center">
        {IconComponent && (
          <div className="bg-[#c5b49e] p-4 rounded-full my-4 inline-block">
            <IconComponent size={32} className="text-white" />
          </div>
        )}
        <div className="font-bold text-xl mb-2 text-white">{plan.name}</div>
        <p className="text-white text-4xl mb-4 font-bold">{plan.price}</p>
        <div className="w-full px-4 mb-2 pb-14">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-white text-sm mb-2"
            >
              <span className=" mr-2 text-black p-1 bg-[#c5b49e] rounded-full">
                <FaCheck className="text-white " size={10} />
              </span>

              <p className="flex-grow">{feature}</p>
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
