import React from "react";
import logo from "../assets/Footer/FFieldX.svg";
import twitterImg from "../assets/Footer/twitter.svg";
import facebookImg from "../assets/Footer/facebook.svg";
import linkedinImg from "../assets/Footer/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#00193D] pt-10 md:pt-20 pb-16 px-3 ">
      <div className="grid justify-center">
        <img data-aos="fade-down" src={logo} alt="logo" />
      </div>
      <p className="text-center text-[#FFF] font-medium my-8">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
        accusantium doloremque laudantium, totam rem aperiam eaque.
      </p>
      <div className="flex justify-center gap-5 md:gap-10 mb-10 md:mb-20">
        <img data-aos="flip-left" src={twitterImg} alt="Twitter" />
        <img
          data-aos="flip-right"
          className="linkedin"
          src={linkedinImg}
          alt="Linkedin"
        />
        <img data-aos="flip-left" src={facebookImg} alt="Facebook" />
      </div>
      <hr className="w-full mx-auto text-slate-900" />
      <div className="text-[18px] font-bold text-white text-center mt-5 md:mt-10 ">
        <p>
          © All rights reserve by<span className=""> MAAC</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
