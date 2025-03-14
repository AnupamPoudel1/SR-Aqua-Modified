import type { Metadata } from "next";
import { Roboto_Condensed, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";

const condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-sans",
});

const slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Home | SR Aqua and Pet House",
  description:
    "SR Aqua and Pet House is a professional aquatic pet shop unlike any other. We provide you with everything your aquatic pet needs from aquarium to decorations. Not only that we also have some beautiful aquatic pets for you that you are sure to like.",
  // alternates: {
  //   canonical: "https://sraquaandpethouse.com",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          condensed.variable,
          slab.variable,
          `antialiased font-sans bg-primary`
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
