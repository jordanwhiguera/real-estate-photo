import React from "react";
import ContactSection from "@/app/components/Contact/ContactSection";
import { Toaster } from "react-hot-toast";

const ContactPage = () => {
  return (
    <>
      <Toaster />

      <ContactSection />
    </>
  );
};

export default ContactPage;
