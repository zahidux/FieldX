import React from "react";
import orderDelivery from "../../assets/about/Pre order vs delivery 1.png";
import topSelling from "../../assets/about/Top Selling Routes 1.png";
import avg from "../../assets/about/Avg 1.png";
import ellipse from "../../assets/about/Ellipse 1.svg";
import "./About.css";
import monitorMobile from "../../assets/about/monitor-mobbile.svg";
import people from "../../assets/about/people.svg";
import user from "../../assets/about/user.svg";
import cup from "../../assets/about/cup.svg";

const About = () => {
  return (
    <section className="px-8 md:px-28 pt-16 md:pt-40 bgImg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className=" bg-[#F1F6FF] rounded-[32px] h-[486px] md:w-[440px] grid items-center md:mx-auto mx-10">
          <div
            data-aos="zoom-in-down"
            className="flex justify-center -mt-20 md:-mt-20 "
          >
            <img
              className="w-[220px] md:w-[297px]"
              src={orderDelivery}
              alt="Order Delivery"
            />
          </div>
          <div className="flex  md:gap-8">
            <div
              data-aos="fade-up"
              className="w-[220px] md:w-[284px] -ml-12 -mt-2 "
            >
              <img className="" src={topSelling} alt="Top Selling" />
            </div>
            <div data-aos="fade-left" className="-mr-8">
              <img
                className="w-[200px] md:w-[247px] h-[161px]"
                src={avg}
                alt="avg"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full mt-10 md:mt-0">
          <p className="text-xl font-semibold text-[#0052CC] text-center md:text-start">
            About Us
          </p>
          <h3 className="text-2xl text-center md:text-left md:text-4xl text-[#0B141F] font-extrabold mt-2 md:mt-5 mb-5 md:mb-10">
            A dedicated solution for <br /> startups and enterprises
          </h3>
          <span className="text-xl text-[#4E4E4E] font-normal ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            <br />
            accusantium doloremque laudantium, totam rem aperiam, <br /> eaque
            ipsa quae ab illo inventore veritatis et quasi architecto <br />
            beatae vitae dicta sunt explicabo.
          </span>
          <div className="md:flex items-center md:gap-12 border-t-2 solid border-[#F0F0F0] md:pt-10 mt-12">
            <div className="grid justify-center md:justify-start">
              <img className="w-[88px]" src={ellipse} alt="ellipse" />
            </div>
            <div className="text-center md:text-left mt-8 md:mt-0">
              <span className="text-[22px] font-medium text-[#4E4E4E]">
                "Fieldx is for teams that care about their product growth."
              </span>
              <p className="text-[22px] font-bold text-[#0B141F] mt-2">
                CEO, FieldX
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex gap-36 justify-center items-center text-center mt-20 md:mt-40 pb-16 md:pb-32">
        <div data-aos="flip-left" className="text-center my-5 md:my-5">
          <div className=" flex justify-center">
            <img
              className="w-[30px] md:w-100%"
              src={monitorMobile}
              alt="Monitor Mobile"
            />
          </div>
          <h3 className="text-[28px] md:text-[40px]  text-[#0052CC] font-extrabold my-2 md:my-4">
            10+
          </h3>
          <p className="text-lg md:text-2xl text-[#4E4E4E] font-normal">
            Platforms Created
          </p>
        </div>
        <div data-aos="flip-right" className="my-5 md:my-5">
          <div className=" flex justify-center my-5 md:my-0">
            <img className="w-[30px] md:w-100%" src={people} alt="people" />
          </div>
          <h3 className="text-[28px] md:text-[40px] text-[#0052CC] font-extrabold my-2 md:my-4">
            1559+
          </h3>
          <p className="text-lg md:text-2xl text-[#4E4E4E] font-normal">
            Total Users
          </p>
        </div>
        <div data-aos="flip-right" className="my-5 md:my-5">
          <div className=" flex justify-center">
            <img className="w-[30px] md:w-100%" src={user} alt="user" />
          </div>
          <h3 className="text-[28px] md:text-[40px]  text-[#0052CC] font-extrabold my-2 md:my-4">
            10+
          </h3>
          <p className="text-lg md:text-2xl text-[#4E4E4E] font-normal">
            Total Clients
          </p>
        </div>
        <div data-aos="flip-right">
          <div className=" flex justify-center">
            <img className="w-[30px] md:w-100%" src={cup} alt="cup" />
          </div>
          <h3 className="text-[28px] md:text-[40px]  text-[#0052CC] font-extrabold my-2 md:my-4">
            300 Days
          </h3>
          <p className="text-lg md:text-2xl text-[#4E4E4E] font-normal">
            In Operations
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
