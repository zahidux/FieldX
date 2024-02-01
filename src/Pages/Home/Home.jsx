import React from "react";
import Banner from "./Banner";
import BannerImg from "./BannerImg";
import Features from "./Features";
import RelayFieldX from "./RelayFieldX";
import About from "./About";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerImg />
      <Features />
      <About />
      <FAQ />
      <RelayFieldX />
    </div>
  );
};

export default Home;
