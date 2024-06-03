import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center mt-10 lg:mt-48 w-full min-h-screen">
      <div className="flex flex-col w-full items-center">
        <h2 className="text-[18px] font-medium uppercase">Testimonial</h2>
        <h1 className="text-[48px] font-bold max-w-[30rem] tracking-tighter leading-none text-center">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-10 items-center justify-between gap-20">
        <div
          className="w-full lg:w-1/2 h-[35rem] lg:h-auto relative bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/images/loop.png)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/assets/images/people.png"
              alt="people"
              width={500}
              height={200}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mt-2 lg:mt-0 h-auto">
          <h1 className="text-[28px] leading-none mb-5 font-semibold max-w-[28rem] text-center lg:text-left">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="w-[25rem] lg:w-auto mb-10 text-[18px] font-medium text-gray-500 text-center lg:text-left">
            <q>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </q>
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/assets/images/group.png"
              alt="group"
              width={200}
              height={10}
            />
            <p className="underline mt-5 text-[18px] font-semibold ml-2">
              Nick Jones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
