import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BottomFrame = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center ">
      <div className="w-[70%] flex h-[60%] overflow-hidden bg-black rounded-lg relative">
        <div className="py-24 px-16">
          <h1 className="font-bold capitalize text-[48px] tracking-tighter text-white">
            Ready to get started?
          </h1>
          <p className="font-normal text-[18px] text-gray-300 w-[90%]">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button className="bg-white flex items-center gap-1 mt-5 text-black px-5 hover:bg-white">
            Download App{" "}
            <Image src="/assets/apple.svg" alt="apple" width={30} height={40} />
          </Button>
        </div>
        <Image
          className="invert absolute top-[60%] -left-[15%]"
          src="/assets/images/loop.png"
          alt="phones"
          width={450}
          height={20}
        />
        <Image
          src="/assets/images/phones.png"
          alt="phones"
          width={450}
          height={20}
          className="absolute top-[3%] right-0 z-10"
        />
        <Image
          className="invert absolute -top-[50%] -right-[20%]"
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
