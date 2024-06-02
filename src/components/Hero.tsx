import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <main className="w-full flex h-screen px-36">
      <div className="w-1/2 relative">
        <Image
          className="relative top-14 left-42"
          src="/assets/images/glow.png"
          alt="glow"
          width={500}
          height={500}
        />
        <div className=" relative -top-56">
          <h1 className="text-[64px] font-bold leading-none tracking-tighter capitalize">
            Make the best financial descisions
          </h1>
          <p className="p-[18] mt-10 text-gray-600 tracking-tighter">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="mt-5 flex">
            <Button>Get Started</Button>
            <Button variant="ghost">
              {" "}
              <Image
                src="/assets/video.svg"
                alt="video"
                width={40}
                height={40}
              />
              {"   "}
              <span className="font-medium">Watch Online</span>
            </Button>
          </div>
          <div className="w-fit">
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
        className="w-1/2 relative"
        style={{
          backgroundImage: `url(/assets/images/loop.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom ",
        }}
      >
        <div></div>
        <Image
          className="absolute z-20 top-[10rem] left-10"
          src="/assets/images/iPhone2.png"
          alt=""
          width={390}
          height={20}
        />
        <Image
          className="absolute z-10 top-[16rem] left-[12rem]"
          src="/assets/images/iPhone1.png"
          alt=""
          width={320}
          height={20}
        />
        <Image
          className="absolute z-0 top-[18rem] left-[16rem]"
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
