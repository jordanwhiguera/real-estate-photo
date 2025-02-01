"use client";
import React from "react";
import Container from "../Container"; // Ensure the correct path
import Image from "next/image"; // Import the Image component

const ArtisticGallery: React.FC = () => {
  return (
    <Container className="pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image 1 */}
        <div>
          <Image
            src="/images/port door-1.jpg" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
        </div>
        {/* Image 2 */}
        <div>
          <Image
            src="/images/lago hd-6.webp" // Replace with actual paths to your images
            alt="Image 2"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
        {/* Image 3 */}
        <div>
          <Image
            src="/images/cro v2-4.webp" // Replace with actual paths to your images
            alt="Image 3"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
        {/* Image 4 */}
        <div>
          <Image
            // src="/images/lago hd-5.webp" // Replace with actual paths to your images
            src="/images/port other-8.webp"
            alt="Image 4"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtisticGallery;

// "use client";
// import React from "react";
// import Container from "../Container"; // Ensure the correct path
// import Image from "next/image"; // Import the Image component

// const ArtisticGallery: React.FC = () => {
//   return (
//     <Container className="pb-16">
//       <div className="flex flex-wrap md:flex-nowrap gap-4">
//         {/* Left side: two images stacked */}
//         <div className="md:w-1/2 w-full">
//           {/* Top image */}
//           <Image
//             src="/images/lago hd-3.webp" // Replace with actual paths to your images
//             alt="Interior"
//             width={500} // Set appropriate width
//             height={100} // Set appropriate height
//             className="w-full pb-4 rounded-3xl "
//             style={{ height: "50vh" }}
//           />
//           {/* Bottom image */}
//           <Image
//             src="/images/lago hd-6.webp" // Replace with actual paths to your images
//             alt="Exterior"
//             width={500} // Set appropriate width
//             height={100} // Set appropriate height
//             className="w-full  rounded-3xl "
//             style={{ height: "50vh" }}
//           />
//         </div>
//         {/* Right side: one long image */}
//         <div className="md:w-1/2 w-full">
//           <Image
//             src="/images/IG-2.webp" // Replace with actual paths to your images
//             alt="Long view"
//             width={500} // Set appropriate width
//             height={100} // Set appropriate height
//             className="w-full  rounded-3xl "
//             style={{ height: "100vh" }}
//           />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ArtisticGallery;
