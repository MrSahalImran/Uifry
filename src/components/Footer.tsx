import { footerLinks, footerLogoLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row px-6 lg:px-32 py-10 lg:py-20 justify-between items-center lg:items-start text-black">
      <div className="mb-10 lg:mb-0 text-center lg:text-left">
        <Image src="/logo.png" alt="logo" width={100} height={32} />
        <div className="flex flex-col gap-2 items-center lg:items-start mt-5">
          {footerLogoLinks.map((item) => (
            <div className="flex gap-2 mb-3 items-center" key={item.label}>
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={20}
                height={20}
              />
              <p className="text-[16px] font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:flex lg:flex-row lg:gap-24 w-full lg:w-auto text-center lg:text-left mb-10 lg:mb-0">
        {footerLinks.map((item) => (
          <div key={item.label} className="w-full lg:w-auto">
            <h1 className="text-[24px] lg:text-[32px] font-medium">
              {item.label}
            </h1>
            {item.content.map((contentItem) => (
              <div className="mt-3 lg:mt-5" key={contentItem}>
                <p className="text-[16px] font-medium">{contentItem}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center lg:items-start w-full lg:w-auto lg:flex-row lg:justify-between lg:gap-4">
        <Input
          className="outline-none mb-4 lg:mb-0 lg:mr-4 w-full lg:w-40 px-4 py-2 text-black"
          type="email"
          placeholder="Your email"
        />
        <Button className="w-full lg:w-auto px-7 text-lg bg-white text-black">
          Subscribe
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
