import { footerLinks, footerLogoLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="flex px-32 relative justify-between">
      <div>
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
      <div className="flex gap-24 relative">
        {footerLinks.map((item) => (
          <div key={item.label}>
            <h1 className="text-[32px] font-medium">{item.label}</h1>
            {item.content.map((item) => (
              <div className="mt-5" key={item}>
                <p className="text-[16px] font-medium">{item}</p>
              </div>
            ))}
          </div>
        ))}
        <Input
          className="absolute outline-none bottom-20 w-40 right-0"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="flex items-center w-36">
        <div className="">
          <Button className="px-7 text-lg">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
