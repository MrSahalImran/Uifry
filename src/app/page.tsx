import Advantages from "@/components/Advantages";
import BottomFrame from "@/components/BottomFrame";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-full bg-[#fff]">
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQs />
      {/*<BottomFrame />
      <Footer /> */}
    </div>
  );
};

export default Home;
