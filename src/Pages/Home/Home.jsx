import React from "react";
import Banner from "./Banner";
import BannerImg from "./BannerImg";
import Features from "./Features";
import RelayFieldX from "./RelayFieldX";
import About from "./About";
import Faqs from "./FAQ/Faqs";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* page title */}
      <Helmet>
        <title>FiledX - Home</title>
      </Helmet>
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
