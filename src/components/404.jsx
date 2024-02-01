import React from "react";
import { Helmet } from "react-helmet";
import image from "../assets/404-not-found.jpg";
import { Link } from "react-router-dom";

const P404 = () => {
  return (
    <div>
      <Helmet>
        <title>ES - 404 </title>
      </Helmet>
      <section className=" my-[250px] flex justify-center ">
        <div>
          <img className="md:h-[250px]" src={image} alt="error" />
          <Link
            to={"/"}
            className="text-lg font-extrabold text-[#0052CC] py-2 md:py-3 px-3 md:px-6 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default P404;
