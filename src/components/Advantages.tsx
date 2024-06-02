import { featuresPoints } from "@/constants";
import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <>
      <section className="w-screen flex h-screen p-10 pt-20 mt-20">
        <div className="w-1/2 flex z-10  p-20 relative overflow-hidden flex-col">
          <h2 className="uppercase text-[18px] font-medium text-orange-500">
            advantages
          </h2>
          <h1 className="capitalize text-[48px] font-bold tracking-tighter">
            why choose Uifry?
          </h1>
          <div className="flex items-center gap-5 mb-3 mt-5">
            <Image
              src="/assets/images/Bell.png"
              alt="Bell"
              width={40}
              height={10}
            />
            <h3 className="tracking-tighter text-[28px] font-semibold">
              Clever Notifications
            </h3>
          </div>
          <p className="text-gray-700 text-[18px] mt-5 font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
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
            src={"/assets/images/iPhone1.png"}
            alt="iPhone"
            width={400}
            height={20}
            className="absolute z-20 top-[4rem] left-36 rotate-[15deg]"
          />
          <Image
            src="/assets/images/Toast.png"
            alt="toast"
            width={350}
            height={0}
            className="absolute z-20 top-[17rem] left-72 "
          />
        </div>
      </section>
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
            width={450}
            height={20}
            className="absolute z-20 top-[2rem] left-28 rotate-[15deg]"
          />
          <Image
            src="/assets/images/CreditCard.png"
            alt="toast"
            width={300}
            height={0}
            className="absolute z-20 top-[12rem] left-[14.5rem] "
          />
        </div>
        <div className="w-1/2 flex z-10  p-20 relative overflow-hidden flex-col">
          <div className="flex items-center gap-5 mb-3 mt-5">
            <Image
              src="/assets/images/Bell.png"
              alt="Bell"
              width={40}
              height={10}
            />
            <h3 className="tracking-tighter text-[28px] font-semibold">
              Full Customization
            </h3>
          </div>
          <p className="text-gray-700 text-[18px] mt-5 font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </section>
    </>
  );
};

export default Advantages;
