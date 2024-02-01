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
    <section className=" gap-36 px-28 pt-40 bgImg">
      <div className="grid grid-cols-2 items-center">
        <div className=" bg-[#F1F6FF] rounded-[32px] h-[486px] w-[440px] grid items-center mx-auto">
          <div className="flex justify-center -mt-20 ">
            <img
              className="w-[297px]"
              src={orderDelivery}
              alt="Order Delivery"
            />
          </div>
          <div className="flex gap-8">
            <div className="w-[284px] -ml-12 -mt-2 ">
              <img className="" src={topSelling} alt="Top Selling" />
            </div>
            <div className="-mr-8">
              <img className=" w-[247px] h-[161px]" src={avg} alt="avg" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-xl font-semibold text-[#0052CC]">About Us</p>
          <h3 className="text-4xl text-[#0B141F] font-extrabold mt-5 mb-10">
            A dedicated solution for <br /> startups and enterprises
          </h3>
          <span className="text-xl text-[#4E4E4E] font-normal ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br />
            accusantium doloremque laudantium, totam rem aperiam, <br /> eaque
            ipsa quae ab illo inventore veritatis et quasi architecto <br />{" "}
            beatae vitae dicta sunt explicabo.
          </span>
          <div className="flex items-center gap-12 border-t-2 solid border-[#F0F0F0] pt-10 mt-12">
            <img className="w-[88px]" src={ellipse} alt="ellipse" />
            <div>
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
      <div className="flex gap-36 justify-center items-center text-center mt-40 pb-32">
        <div className="text-center ">
          <div className=" flex justify-center">
            <img src={monitorMobile} alt="Monitor Mobile" />
          </div>
          <h3 className="text-[40px] text-[#0052CC] font-extrabold my-4">
            10+
          </h3>
          <p className="text-2xl text-[#4E4E4E] font-normal">
            Platforms Created
          </p>
        </div>
        <div>
          <div className=" flex justify-center">
            <img src={people} alt="people" />
          </div>
          <h3 className="text-[40px] text-[#0052CC] font-extrabold my-4">
            1559+
          </h3>
          <p className="text-2xl text-[#4E4E4E] font-normal">Total Users</p>
        </div>
        <div>
          <div className=" flex justify-center">
            <img src={user} alt="user" />
          </div>
          <h3 className="text-[40px] text-[#0052CC] font-extrabold my-4">
            10+
          </h3>
          <p className="text-2xl text-[#4E4E4E] font-normal">Total Clients</p>
        </div>
        <div>
          <div className=" flex justify-center">
            <img src={cup} alt="cup" />
          </div>
          <h3 className="text-[40px] text-[#0052CC] font-extrabold my-4">
            300 Days
          </h3>
          <p className="text-2xl text-[#4E4E4E] font-normal">In Operations</p>
        </div>
      </div>
    </section>
  );
};

export default About;
