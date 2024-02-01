import React from "react";
import Banner from "./Banner";
import BannerImg from "./BannerImg";
import Features from "./Features";
import RelayFieldX from "./RelayFieldX";
import About from "./About";
import Faqs from "./FAQ/Faqs";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerImg />
      <Features />
      <About />
      <Faqs />
      <RelayFieldX />
    </div>
  );
};

export default Home;
