import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Open Home Media: Real Estate Photography & Videography Services in the Treasure Coast, FL.",
  description:
    "Open Home Media is a premier real estate media company based in Port Saint Lucie . Catering to the expansive Treasure Coast, our expert team offers a comprehensive suite of services designed to elevate real estate listings. From captivating professional photography and dynamic videography to immersive virtual tours and precise floor plans, we provide everything you need to showcase properties in their best light. Our offerings extend to agent branding solutions, ensuring that brokers and agents stand out in the competitive real estate landscape with high-quality visual content that captures attention and accelerates sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
