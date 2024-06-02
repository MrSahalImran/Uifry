import { featuresPoints } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="w-screen flex h-screen p-10 pt-20 mt-20">
      <div
        className="w-1/2 relative"
        style={{
          backgroundImage: `url(/assets/images/loop.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom  ",
        }}
      >
        <div>
          <Image
            src={"/assets/star.svg"}
            alt="iPhone"
            width={50}
            height={50}
            className="absolute z-20 top-[12rem] left-10 rotate-[20deg]"
          />
          <Image
            src="/assets/images/glow.png"
            alt="glow"
            width={600}
            height={500}
            className="absolute z-20 top-[6rem] left-30 rotate-[15deg]"
          />
        </div>
        <Image
          src={"/assets/images/iPhone2.png"}
          alt="iPhone"
          width={400}
          height={20}
          className="absolute z-20 top-[4rem] left-36 rotate-[15deg]"
        />
      </div>
      <div className="w-1/2 flex z-10  p-20 relative overflow-hidden flex-col">
        <h2 className="uppercase text-[18px] font-medium text-orange-500">
          features
        </h2>
        <h1 className="capitalize text-[48px] font-bold tracking-tighter">
          Uifry premium
        </h1>
        {featuresPoints.map((feature) => (
          <div className="flex flex-col" key={feature.label}>
            <div className="flex gap-5 mb-3 mt-5">
              <Image
                src={feature.imgUrl}
                alt={feature.label}
                width={25}
                height={10}
              />
              <h3 className="font-bold tracking-tighter text-[18px] font-semibold">
                {feature.label}
              </h3>
            </div>
            <p className="text-gray-700 text-[18px] font-medium">
              {feature.content}
            </p>
          </div>
        ))}
        <Image
          src="/assets/images/glow.png"
          alt="glow"
          width={400}
          height={500}
          className=" z-10 absolute top-[2rem] -right-36 rotate-[15deg]"
        />
      </div>
    </section>
  );
};

export default Features;
