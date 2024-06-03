"use client";
import { featuresPoints } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Features = () => {
  const iPhoneRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      iPhoneRef.current,
      { rotation: -15, scale: 0, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row p-5 sm:p-10 pt-5 md:pt-20 mt-20 overflow-hidden relative">
      <div
        className="w-full md:w-1/2 relative flex items-center justify-center md:justify-start"
        style={{
          backgroundImage: `url(/assets/images/glowLoop.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "300px",
        }}
      >
        <div className="absolute top-0 left-0 z-20">
          <Image
            src={"/assets/star.svg"}
            alt="Star"
            width={50}
            height={50}
            className="rotate-[20deg]"
          />
        </div>
        <div
          ref={iPhoneRef}
          className="absolute top-1/2 left-1/2 z-10"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Image
            className="rotate-[15deg]"
            src="/assets/images/iPhone2.png"
            alt="iPhone"
            width={400}
            height={20}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 sm:p-10 md:p-20 relative flex flex-col z-10">
        <div className="overflow-y-auto max-h-full">
          <h2 className="uppercase text-[18px] font-medium text-orange-500">
            Features
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
                <h3 className="tracking-tighter text-[18px] font-semibold">
                  {feature.label}
                </h3>
              </div>
              <p className="text-gray-700 text-[18px] font-medium">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
