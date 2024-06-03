"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".iphone-images",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
    );
  }, []);

  return (
    <main className="w-full flex flex-col md:flex-row h-screen px-6 md:px-36 pt-16 md:pt-0">
      <div className="w-full md:w-1/2 relative">
        <Image
          className="relative top-14 left-42"
          src="/assets/images/glow.png"
          alt="glow"
          width={500}
          height={500}
        />
        <div className="relative -top-56">
          <h1 className="text-[64px] font-bold leading-none tracking-tighter capitalize">
            Make the best financial decisions
          </h1>
          <p className="pt-[18] mt-10 text-gray-600 tracking-tighter">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="mt-5 flex">
            <Button>Get Started</Button>
            <Button variant="ghost">
              <Image
                src="/assets/video.svg"
                alt="video"
                width={40}
                height={40}
              />
              <span className="font-medium">Watch Online</span>
            </Button>
          </div>
          <div className="w-fit hidden md:block">
            <Image
              src="/assets/images/ribbon.png"
              alt="ribbon"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 relative hidden md:block iphone-images"
        style={{
          backgroundImage: `url(/assets/images/loop.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <Image
          className="absolute top-[10rem] left-10"
          src="/assets/images/iPhone2.png"
          alt=""
          width={390}
          height={20}
        />
        <Image
          className="absolute top-[16rem] left-[12rem]"
          src="/assets/images/iPhone1.png"
          alt=""
          width={320}
          height={20}
        />
        <Image
          className="absolute top-[18rem] left-[16rem]"
          src="/assets/images/iPhone2.png"
          alt=""
          width={350}
          height={10}
        />
        <div className="absolute -bottom-56 left-42">
          <Image
            className="absolute -bottom-200 left-20"
            src="/assets/star.svg"
            alt="star"
            width={50}
            height={50}
          />
          <Image
            src="/assets/images/glow.png"
            alt="glow"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
