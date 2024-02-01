import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner relative flex items-center justify-center md:py-32 h-screen">
      <div data-aos="fade-up" className="relative z-10 ">
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#0b141f] text-center">
          Analytics that transform your <br /> product inside-out
        </h1>
        <div className="flex gap-6 mt-12 justify-center">
          <button className="font-extrabold text-lg text-[#FFF] bg-[#0052CC] py-4 md:py-6 px-5 md:px-12 rounded-lg">
            Request for Demo
          </button>
          <button className="text-xl font-extrabold text-[#0052CC] py-4 md:py-6 px-5 md:px-12 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4">
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
