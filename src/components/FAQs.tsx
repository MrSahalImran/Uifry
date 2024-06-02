import { faqs } from "@/constants";
import React from "react";

const FAQs = () => {
  return (
    <section className="flex w-screen flex-col p-36">
      <h2 className="text-[18px] font-medium text-orange-400 mb-5">FAQ</h2>
      <h1 className="text-[48px] font-bold tracking-tight w-1/3 leading-none">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-2 grid-rows-3 mt-10">
        {faqs.map((item) => (
          <div
            className={`${
              item.color === "red" ? "bg-[#FF5555] text-white" : ""
            } p-8 rounded-xl`}
            key={item.label}
          >
            <h1 className="text-[28px] font-semibold capitalize">
              {item.label}
            </h1>
            <p className="text-[18px] tracking-tight font-medium">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
