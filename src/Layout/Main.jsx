import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import StayTop from "../components/StayTop";
import Spinner from "../components/Spinner ";
import "aos/dist/aos.css";
import AOS from "aos";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  let content;

  if (navigation.state === "loading") {
    content = <Spinner />;
  } else {
    content = <Outlet />;
  }
  return (
    <div>
      <StayTop />
      <Navbar />
      <main>{content}</main>
      <Footer />
    </div>
  );
};

export default Main;
