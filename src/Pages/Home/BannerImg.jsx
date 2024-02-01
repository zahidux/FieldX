import React from "react";
import bannerImg1 from "../../assets/tablet 1.png";
import bannerImg2 from "../../assets/phone 1.png";

const BannerImg = () => {
  return (
    <section
      data-aos="fade-up"
      className="grid justify-center border-b-2 solid border-[#E1E1E1] pb-12 md:pb-24 mx-8"
    >
      <img
        className="z-10 -mt-56 md:-mt-64"
        src={bannerImg1}
        alt="Banner Image"
      />
      <div className="flex justify-end right-3 top-6 z-10 mr-[30px] md:mr-[70px] -mt-[180px] md:-mt-[400px]">
        <img
          className="z-10 -md:ml-28  w-1/4 "
          src={bannerImg2}
          alt="Banner Image"
        />
      </div>
    </section>
  );
};

export default BannerImg;
