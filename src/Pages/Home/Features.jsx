import React from "react";
import icon from "../../assets/Features/box.png";
import featuresImg from "../../assets/Features/Central phone 2.png";

const Features = () => {
  return (
    <section className="mx-12 md:mx-28 mt-12 md:mt-24 mb-20 md:mb-40">
      <div data-aos="fade-up">
        <p className="text-base md:text-lg font-medium text-[#0052CC] text-center">
          Products Features
        </p>
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#0B141F]  text-center mt-3 md:mt-5 mb-10 md:mb-20">
          Make more out of your data
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap:5 md:gap-14">
          <div data-aos="fade-right" className="text-center md:text-end">
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-end rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-[#0B141F] my-3 md:my-5">
                Real-time analytics
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-end rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl  font-extrabold text-[#0B141F] my-3 md:my-5">
                Intuitive dashboard
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-end rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl  font-extrabold text-[#0B141F] my-3 md:my-5">
                Smart suggestions
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="relative flex justify-center  mt-12 md:mt-0"
          >
            <div className="absolute h-[300px] md:h-[500px] w-[300px] md:w-[500px] -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0052CC] rounded-full "></div>
            <img
              className="w-[200px] md:w-3/4"
              src={featuresImg}
              alt="Features-Image"
            />
          </div>
          <div
            data-aos="fade-left"
            className="text-center md:text-start mt-12 md:mt-0"
          >
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-start rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-[#0B141F] my-5">
                Multiple views
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </span>
            </div>
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-start rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-[#0B141F] my-5">
                AI-led diagnoses
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
                See product usage, sign-ins, feature <br /> metrics change as
                users work on you.
              </span>
            </div>
            <div className="mb-7 md:mb-16">
              <div className="grid justify-center md:justify-start rounded-2xl">
                <img
                  className="h-[60px] py-3 px-4 shadow-2xl"
                  src={icon}
                  alt="icon"
                />
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-[#0B141F] my-5">
                Responsive
              </p>
              <span className="text-base md:text-lg font-normal text-[#4E4E4E]">
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
