import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center mt-20  w-screen h-screen">
      <div className="flex flex-col w-full items-center">
        <h2 className="text-[18px] font-medium uppercase">Testimonial</h2>
        <h1 className="text-[48px] font-bold w-[30rem] tracking-tighter leading-none text-center">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="w-full flex mt-10 items-center justify-between gap-20">
        <div
          className="w-1/2 h-[35rem] relative"
          style={{
            backgroundImage: `url(/assets/images/loop.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
        >
          <Image
            src="/assets/images/people.png"
            alt="people"
            width={500}
            height={200}
            className="absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          />
        </div>
        <div className="w-1/2 flex flex-col mt-2 h-[35rem] ">
          <h1 className="text-[28px] leading-none mb-5 font-semibold w-[28rem]">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="w-[25rem] mb-10 text-[18px] font-medium text-gray-500">
            {" "}
            <q>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </q>
          </p>
          <Image
            src="/assets/images/group.png"
            alt="group"
            width={200}
            height={10}
          />
          <p className="underline mt-5 text-[18px] font-semibold">Nick Jones</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
