"use client";
import React, { useEffect } from "react"; // <-- ADDED useEffect
import Container from "../Container";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { toast } from "react-hot-toast";

// ADDED: Declaration for the global Google Ads function
declare global {
  interface Window {
    dataLayer: any[];
    // Declaring the Google Website Call Conversion function
    _googWcmGet: (
      callback: (formattedNumber: string, mobileNumber: string) => void,
      conversionId: string
    ) => void;
  }
}

const ContactSection: React.FC = () => {
  const phoneNumberDisplay = "772-607-0620";
  const phoneNumberLink = "tel:7726070620";

  // ADDED: This hook runs after the component renders to fix the GFN replacement timing issue.
  useEffect(() => {
    // Check if the Google function is available (it's loaded by the GTM tag)
    if (
      typeof window !== "undefined" &&
      typeof window._googWcmGet === "function"
    ) {
      // Call the Google function, passing a callback to execute
      window._googWcmGet((formattedNumber, mobileNumber) => {
        // FIX for TypeScript error: Cast the element to HTMLAnchorElement
        const targetElement = document.getElementById(
          "gads-phone-target"
        ) as HTMLAnchorElement | null;

        if (targetElement) {
          // Replace the displayed text with the Google Forwarding Number (GFN)
          targetElement.innerText = formattedNumber;
          // Update the link's destination (href) to the mobile GFN
          targetElement.href = `tel:${mobileNumber}`;
        }
      }, "17517967547"); // <--- CRITICAL: Your Conversion ID
    }
  }, []); // Empty array ensures it only runs once after mount

  const handlePhoneClick = () => {
    console.log(
      "Phone number clicked. Pushing 'phone_call_click' event to DataLayer."
    );
    // This is the crucial part for GTM tracking:
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_call_click", // <-- Use this name for your GTM Trigger
        element_type: "phone_link",
        phone_number: phoneNumberDisplay,
      });
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        toast.success("Form successfully submitted.");
        form.reset(); // Reset the form fields

        // --- NEW CODE ADDED HERE FOR GTM TRACKING ---
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "form_submit_success", // <-- Unique event name
            form_name: "contact_section_form",
          });
          console.log("Pushed 'form_submit_success' event to DataLayer.");
        }
        // --- END NEW CODE ---
      } else {
        // ... (error handling)
      }
    } catch (error) {
      // ... (network error handling)
    }
  };
  return (
    <Container className="">
      {/* Adjust lg:py-20 as needed */}
      <div className=" flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 py-6 lg:py-20">
        {/* Text */}
        <div className="flex-1 space-y-4">
          <div className="md:pr-24">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-black -mt-4">
              GET IN TOUCH
            </h2>
            <p className="mb-6 text-black">
              Hi! I&apos;m Jordan Higuera, and below, you&apos;ll find all the
              ways you can reach me. Whether you have questions or need to
              schedule an appointment, I&apos;m just a message away. Don&apos;t
              hesitate to get in touch.
            </p>
            {/* Contact details and social icons */}
            <div className="space-y-4">
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-black rounded-full">
                  <FaMapMarkerAlt className="text-[#e3d6c3]" />
                </span>
                Port Saint Lucie, FL
              </div>
              {/* PHONE NUMBER LINK WITH GTM TRACKING AND GFN TARGET ID */}
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-black rounded-full">
                  <FaPhoneAlt className="text-[#e3d6c3]" />
                </span>
                {/* ID added here to allow the useEffect hook to target this element */}
                <a
                  href={phoneNumberLink}
                  onClick={handlePhoneClick}
                  className="text-black hover:underline transition"
                  aria-label={`Call ${phoneNumberDisplay}`}
                  id="gads-phone-target"
                >
                  {phoneNumberDisplay}
                </a>
              </div>
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-black rounded-full">
                  <MdEmail className="text-[#e3d6c3]" />
                </span>
                info@openhome.media
              </div>
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-black rounded-full">
                  <FaClock className="text-[#e3d6c3]" />
                </span>
                Monday to Friday: 8AM to 8PM <br />
                Saturday: 8AM to 6PM <br />
                Sunday: 8AM to 12PM
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-black   w-full min-h-full rounded-3xl">
          {/* Form content */}
          <div className="p-6 relative">
            <h3 className="text-lg mb-4 text-white font-bold">
              Fill out this and I will get back to you ASAP!
            </h3>
            <form
              method="POST"
              className="flex flex-col space-y-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name" // The 'name' attributes are important for Formspree to identify the form fields
                placeholder="Name"
                className="p-2  bg-white  text-black rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone" // Changed to type "tel" for better semantics
                placeholder="Phone number"
                className="p-2  bg-white  text-black  rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="p-2  bg-white  text-black rounded-lg"
                required
              />

              <textarea
                name="message"
                placeholder="How can I help?"
                className="p-2  bg-white  text-black  rounded-lg"
                rows={10}
                required
              ></textarea>

              <Button label="Submit Information" />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
