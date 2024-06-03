import Image from "next/image";

const Advantages = () => {
  return (
    <>
      <section className="w-screen container flex flex-col md:flex-row md:p-10 pt-5 md:pt-20 mt-20">
        <div className="w-full md:w-1/2 relative">
          <div className="w-full md:w-3/4 flex flex-col p-5 md:p-10">
            <h2 className="uppercase text-[18px] font-medium text-orange-500">
              advantages
            </h2>
            <h1 className="capitalize text-[32px] md:text-[48px] font-bold tracking-tighter mt-5">
              why choose Uifry?
            </h1>
            <div className="flex items-center gap-3 md:gap-5 mb-3 mt-3 md:mt-5">
              <Image
                src="/assets/images/Bell.png"
                alt="Bell"
                width={40}
                height={40}
              />
              <h3 className="tracking-tighter text-[22px] md:text-[28px] font-semibold">
                Clever Notifications
              </h3>
            </div>
            <p className="text-gray-700 text-[14px] md:text-[18px] mt-3 md:mt-5 font-medium">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="hidden md:block">
            <Image
              src={"/assets/star.svg"}
              alt="Star"
              width={40}
              height={40}
              className="absolute z-20 top-1/4 left-0 rotate-[20deg]"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={"/assets/images/phonePop.png"}
              alt="iPhone"
              width={600}
              height={20}
              className="absolute z-20 top-[0rem] left-0 rotate-[0deg]"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={"/assets/images/phonePop.png"}
              alt="iPhone"
              width={600}
              height={20}
              className="absolute z-20 top-[0rem] left-0 rotate-[0deg]"
            />
          </div>
        </div>
      </section>

      <section className="w-screen container flex flex-col md:flex-row md:p-10 pt-5 md:pt-20 mt-20 relative">
        <div className="w-full md:w-1/2 relative order-2 md:order-1">
          <div className="hidden md:block">
            <Image
              src={"/assets/star.svg"}
              alt="Star"
              width={40}
              height={40}
              className="absolute z-20 top-1/24 left-[2rem] rotate-[20deg]"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={"/assets/images/phoneFull.png"}
              alt="iPhone"
              width={700}
              height={20}
              className="absolute z-20 -top-[5rem]  "
            />
          </div>
          <div className="md:hidden">
            {/* Empty div or null, effectively removing the image */}
            {/* You can also remove the surrounding div if not needed */}
            <div></div>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 relative order-1 md:order-2">
          <div className="w-full md:w-3/4 flex flex-col p-5 md:p-10">
            <div className="flex sm:mt-20 mt items-center gap-3 md:gap-5 mb-3 mt-3 md:mt-5">
              <Image
                src="/assets/images/Bell.png"
                alt="Bell"
                width={40}
                height={40}
              />
              <h3 className="tracking-tighter text-[28px] font-semibold">
                Full Customization
              </h3>
            </div>
            <p className="text-gray-700 right-0 text-[14px] md:text-[18px] mt-1 md:mt-5 font-medium">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
