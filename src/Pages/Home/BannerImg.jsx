import React from "react";
import bannerImg1 from "../../assets/tablet 1.png";
import bannerImg2 from "../../assets/phone 1.png";

const BannerImg = () => {
  return (
    <section className="grid justify-center border-b-2 solid border-#E1E1E1 pb-24">
      <img className="z-10 -mt-64" src={bannerImg1} alt="" />
      <div className="flex justify-end right-3 top-6 z-10 -mt-[550px]">
        <img src={bannerImg2} alt="" />
      </div>
    </section>
  );
};

export default BannerImg;
