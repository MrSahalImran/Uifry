import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BottomFrame = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] flex h-[70%] md:h-[60%] overflow-hidden bg-black rounded-lg relative flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        <div className="p-6 md:py-24 md:px-16 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-bold capitalize text-[32px] md:text-[48px] tracking-tighter text-white">
            Ready to get started?
          </h1>
          <p className="font-normal text-[16px] md:text-[18px] text-gray-300 w-[90%] md:w-full">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button className="bg-white flex items-center gap-1 mt-5 text-black px-5 hover:bg-white">
            Download App{" "}
            <Image src="/assets/apple.svg" alt="apple" width={30} height={40} />
          </Button>
        </div>
        <Image
          className="hidden md:block invert absolute top-[60%] -left-[15%]"
          src="/assets/images/loop.png"
          alt="phones"
          width={450}
          height={20}
        />
        <Image
          className="hidden md:block absolute top-[3%] right-0 z-10"
          src="/assets/images/phones.png"
          alt="phones"
          width={450}
          height={20}
        />
        <Image
          className="hidden md:block invert absolute -top-[50%] -right-[20%]"
          src="/assets/images/loop.png"
          alt="phones"
          width={450}
          height={20}
        />
      </div>
    </section>
  );
};

export default BottomFrame;
