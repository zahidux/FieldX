import React from "react";
import icon from "../../assets/Features/box.png";
import featuresImg from "../../assets/Features/Central phone 2.png";

const Features = () => {
  return (
    <section className="mx-28 mt-24 mb-40">
      <p className="text-lg font-medium text-[#0052CC] text-center">
        Products Features
      </p>
      <h3 className="text-5xl font-extrabold text-[#0B141F]  text-center mt-5 mb-20">
        Make more out of your data
      </h3>
      <div>
        <div className="grid grid-cols-3 items-center gap-14">
          <div className="text-end">
            <div className="mb-16">
              <div className="grid justify-end rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                Real-time analytics
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-16">
              <div className="grid justify-end rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                Intuitive dashboard
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-16">
              <div className="grid justify-end rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                Smart suggestions
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
          </div>
          <div className="flex justify-center bg-[#0052CC] rounded-[548.738px]">
            <img className="" src={featuresImg} alt="Features-Image" />
          </div>
          <div className="text-start">
            <div className="mb-16">
              <div className="grid rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                Multiple views
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-16">
              <div className="grid rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                AI-led diagnoses
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on you.
              </span>
            </div>
            <div className="mb-16">
              <div className="grid rounded-2xl ">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-extrabold text-[#0B141F] my-5">
                Responsive
              </p>
              <span className="text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
