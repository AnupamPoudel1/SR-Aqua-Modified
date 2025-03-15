"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.jpg";
import { RiMenuFoldLine } from "react-icons/ri";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface link {
  name: string;
  link: string;
}

const navLinks: link[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="px-4 md:px-12 lg:px-20 2xl:px-40 relative w-full overflow-x-clip flex z-50">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href={"/"} className="flex gap-1 justify-center items-center">
            <Image
              className="size-16 md:size-20 lg:size-24"
              src={logo}
              alt="Sr Aqua and Pet House logo"
            />
            <p className="font-bold font-serif text-base lg:text-lg xl:text-xl text-secondary">
              Sr Aqua and Pet House
            </p>
          </Link>
        </div>
        {/* Navbar */}
        <nav className="hidden lg:flex justify-center items-center">
          {navLinks.map((link, index) => {
            const isActive = link.link === pathname;

            return (
              <Link
                key={index}
                href={link.link}
                className={twMerge(
                  "flex justify-center items-center px-6 py-4 text-lg xl:text-xl font-semibold hover:bg-secondary hover:text-primary transition-all duration-300",
                  isActive ? "bg-secondary text-primary" : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link
          href={"tel:+9779860679848"}
          className="rounded-md bg-secondary text-primary font-serif px-6 py-3 hidden xl:flex"
        >
          9860679848
        </Link>
        {/* Hamburger Menu Button */}
        <div className="flex lg:hidden justify-center items-center gap-8">
          <Link
            href={"tel:+9779860679848"}
            className="rounded-md bg-secondary text-primary font-serif px-4 py-2 hidden md:flex"
          >
            9860679848
          </Link>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="cursor-pointer"
          >
            <RiMenuFoldLine
              className={twMerge(
                "size-6  transition-all duration-300",
                navOpen ? "rotate-180 text-red-500" : "text-secondary"
              )}
            />
          </button>
        </div>
      </div>
      {/* Small Screen Navbar */}
      <nav
        className={twMerge(
          "absolute flex lg:hidden flex-col w-full top-full left-0 transition-transform duration-300 rounded-md overflow-hidden bg-primary",
          navOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link, index) => {
          const isActive = pathname === link.link;

          return (
            <Link
              key={index}
              href={link.link}
              className={twMerge(
                "flex w-full px-4 py-3 md:px-6 md:py-4 font-semibold text-lg",
                isActive ? "bg-secondary text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
