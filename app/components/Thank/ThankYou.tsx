"use client";
import React, { useEffect } from "react";
import Container from "../Container";

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Fire Google Ads conversion tracking when page loads
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17517967547/ChWyCIeYqZAbELvxm6FB", // ✅ your conversion ID/label
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://book.openhomemedia.net/order";
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">Thank You!</h1>

        {/* Message */}
        <p className="text-base md:text-lg text-black mb-6">
          Your order has been placed.
        </p>

        {/* Button */}
        <button
          onClick={handleRedirect}
          className="px-6 py-4 rounded-lg bg-black text-white font-medium hover:bg-white hover:text-black transition"
        >
          Place Another Order
        </button>
      </div>

      {/* Google Ads noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://www.googleadservices.com/pagead/conversion/17517967547/?label=ChWyCIeYqZAbELvxm6FB&guid=ON&script=0"
        />
      </noscript>
    </Container>
  );
};

export default ThankYou;
