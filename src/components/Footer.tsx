import { footerLinks, footerLogoLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row px-6 lg:px-32 py-10 lg:py-20 justify-between items-center lg:items-start">
      <div className="mb-10 lg:mb-0">
        <Image src="/logo.png" alt="logo" width={100} height={32} />
        <div className="flex flex-col gap-2 items-center mt-5">
          {footerLogoLinks.map((item) => (
            <div className="flex gap-2 mb-3" key={item.label}>
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
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-10 lg:mb-0">
        {footerLinks.map((item) => (
          <div key={item.label}>
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
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <Input
          className="outline-none mb-4 lg:mb-0 lg:mr-4 w-full lg:w-40"
          type="email"
          placeholder="Your email"
        />
        <Button className="w-full lg:w-auto px-7 text-lg">Subscribe</Button>
      </div>
    </footer>
  );
};

export default Footer;
