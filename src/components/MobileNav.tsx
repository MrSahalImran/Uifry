"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Link from "next/link";

const NavContent = () => {
  return (
    <section className="flex flex-col gap-10 ">
      {navLinks.map((link) => (
        <SheetClose
          asChild
          key={link.href}
          className="flex gap-5 px-5 items-center"
        >
          <Link key={link.href} href={link.href}>
            <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
            <p className="text-black text-lg font-medium">{link.label}</p>
          </Link>
        </SheetClose>
      ))}
    </section>
  );
};

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/hamburger.svg"
            alt="hamburger"
            width={36}
            height={36}
            className="sm:hidden text-black"
          />
        </SheetTrigger>
        <SheetContent>
          <Image
            className="mb-16"
            src="/logo.png"
            alt="logo"
            width={70}
            height={20}
          />
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
