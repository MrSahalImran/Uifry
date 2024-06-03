"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      if (currentOffset > prevOffset) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up
        setIsScrolled(false);
      }
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevOffset]);

  return (
    <nav
      className={`w-full bg-white pt-4 px-5 md:pt- md:px-36 flex z-50 fixed items-center justify-between ${
        isScrolled
          ? "-translate-y-full transition-transform duration-300"
          : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <Link href="/">
          <Image
            className="mr-5"
            src="/logo.png"
            alt="logo"
            width={106}
            height={32}
          />
        </Link>
        <div className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <Link className="flex" key={link.label} href={link.href}>
              <h1 className="text-[17px] font-medium">{link.label}</h1>
            </Link>
          ))}
        </div>
      </div>
      <div className="gap-16 h-20 items-center hidden md:flex">
        <Button>Download</Button>
      </div>
      <MobileNav />
    </nav>
  );
};

export default NavBar;
