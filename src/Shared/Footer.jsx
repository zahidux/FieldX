import React from "react";
import logo from "../assets/Footer/FFieldX.svg";
import twitterImg from "../assets/Footer/twitter.svg";
import facebookImg from "../assets/Footer/facebook.svg";
import linkedinImg from "../assets/Footer/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#00193D] pt-20 pb-16 ">
      <div className="grid justify-center">
        <img src={logo} alt="logo" />
      </div>
      <p className="text-center text-[#FFF] font-medium my-8">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
        accusantium doloremque laudantium, totam rem aperiam eaque.
      </p>
      <div className="flex justify-center gap-10 mb-20">
        <img src={twitterImg} alt="Twitter" />
        <img className="linkedin" src={linkedinImg} alt="Linkedin" />
        <img src={facebookImg} alt="Facebook" />
      </div>
      <hr className="w-[1216px] mx-auto text-slate-900" />
      <div className="text-[18px] font-bold text-white text-center mt-10 ">
        <p>
          © All rights reserve by<span className=""> MAAC</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
