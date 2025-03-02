import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SR Aqua and Pet House",
  description:
    "SR Aqua and Pet House is a professional aquatic pet shop unlike any other. We provide you with everything your aquatic pet needs from aquarium to decorations. Not only that we also have some beautiful aquatic pets for you that you are sure to like.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
