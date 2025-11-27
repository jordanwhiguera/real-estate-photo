"use client";
import React from "react";
import Container from "../Container";

const TermSection: React.FC = () => {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 md:mb-8 -mt-8 md:mt-0">
          TERMS & CONDITIONS
        </h1>
        <div className="text-sm md:text-base text-black space-y-4">
          <p>
            <strong>Last Updated:</strong> November 2025
          </p>

          {/* === FIXED INTRODUCTION (Option 1) & ESCAPED QUOTES === */}
          <p>
            These **Terms & Conditions** govern your use of the Open Home Media
            website and services. By accessing or using our website, purchasing
            services, downloading, or using any Media provided by **Open Home
            Media LLC** (&quot;Open Home Media&quot;), you agree to be bound by
            these terms. This document sets out the rules for the service
            relationship and details the specific **Media Agreement** (the
            &quot;Agreement&quot;) regarding ownership and usage rights for all
            photos, videos, and other media (collectively, &quot;Media&quot;).
          </p>
          {/* ======================================================= */}

          <h2 className="font-semibold mt-4">
            1. Media Ownership and Licensing
          </h2>
          <p>
            Upon purchase, the{" "}
            <strong>Client becomes the full owner of the Media</strong>{" "}
            delivered by Open Home Media LLC.
          </p>
          <p>
            However, Open Home Media LLC retains a{" "}
            <strong>perpetual, irrevocable, worldwide license</strong> to:
          </p>
          <ul className="list-disc list-outside ml-6">
            <li>
              Use and display the Media for marketing, portfolio, website,
              Google Business Profile, social media, and advertising.
            </li>
            <li>
              Distribute, relicense, or provide any images—including community
              amenity photos—to additional clients or third parties at its sole
              discretion.
            </li>
          </ul>
          <p>
            This retained license ensures Open Home Media LLC may continue using
            or distributing the Media indefinitely, regardless of Client
            ownership. These rights are non-exclusive, meaning both the Client
            and Open Home Media LLC may use the Media independently without
            restriction or approval from the other.
          </p>

          <h2 className="font-semibold mt-4">
            2. Client Rights (Unlimited Usage Rights)
          </h2>
          <p>
            As the owner, the Client has full, unlimited rights to the Media,
            including but not limited to:
          </p>
          <ul className="list-disc list-outside ml-6">
            <li>
              Use, reproduce, distribute, publish, or display the Media for any
              purpose.
            </li>
            <li>Modify, edit, crop, or alter the Media.</li>
            <li>
              Sell, transfer, relicense, or provide the Media to any third
              party.
            </li>
            <li>
              Allow third parties to further sell, transfer, relicense, or use
              the Media.
            </li>
          </ul>
          <p>
            The Client is <strong>not required</strong> to provide credit or
            attribution to Open Home Media LLC or its photographers. There are
            no restrictions on the Client&apos;s use of the Media.
            {/* Apostrophe fixed here */}
          </p>

          <h2 className="font-semibold mt-4">
            3. Rights Reserved by Open Home Media LLC
          </h2>
          <p>
            Open Home Media LLC retains the following rights even after
            transferring ownership to the Client:
          </p>
          <ul className="list-disc list-outside ml-6">
            <li>
              Use the Media for any marketing, promotional, or portfolio
              purposes.
            </li>
            <li>
              Provide, license, or resell any images—including community
              amenities or shared community elements—to additional clients or
              third parties.
            </li>
          </ul>
          <p>
            These rights are non-exclusive, allowing both the Client and Open
            Home Media LLC to use the Media independently.
          </p>

          <h2 className="font-semibold mt-4">4. Photographer Rights</h2>
          <p>
            All photographers working for or contracted by Open Home Media LLC
            acknowledge that:
          </p>
          <ul className="list-disc list-outside ml-6">
            <li>
              All Media created while performing work for Open Home Media LLC
              belongs exclusively to Open Home Media LLC, who may then transfer
              ownership to the Client.
            </li>
            <li>
              Photographers do not retain personal copyright or control over the
              Media and cannot restrict its use or transfer.
            </li>
          </ul>

          <h2 className="font-semibold mt-4">
            5. No Restrictions on Client Usage
          </h2>
          <p>
            The Client may use the Media for any purpose, including commercial,
            residential, rental platforms (Airbnb, VRBO), MLS, print, digital,
            advertising, or resale. Open Home Media LLC does not monitor or
            control how the Client or third parties use the Media.
          </p>

          <h2 className="font-semibold mt-4">6. Limitation of Liability</h2>
          <p>Open Home Media LLC is not responsible for:</p>
          <ul className="list-disc list-outside ml-6">
            <li>How or where the Client or third parties use the Media.</li>
            <li>
              Any claims or disputes arising from the Client&apos;s use, resale,
              or distribution of the Media.
              {/* Apostrophe fixed here */}
            </li>
          </ul>

          <h2 className="font-semibold mt-4">7. Acceptance of Terms</h2>
          <p>
            By purchasing, downloading, receiving, or using any Media from Open
            Home Media LLC, the Client acknowledges and agrees to all terms in
            this Agreement, including Open Home Media LLC&apos;s retained rights
            to use, distribute, and relicense the Media.
            {/* Apostrophe fixed here */}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TermSection;
