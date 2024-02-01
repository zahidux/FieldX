import { Helmet } from "react-helmet";
import { GoPlus } from "react-icons/go";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

import pathImg from "../../assets/undraw_Login_re_4vu2 1.png";

const Area = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Dashboard Area</title>
      </Helmet>
      <section className="my-5 md:mx-5 rounded-md duration-300">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl text-dark font-semibold">Area List</h2>

            <div className="flex items-center gap-1 mt-1 text-sm">
              <Link to="/dashboard/area" className="text-gray">
                Geo
              </Link>{" "}
              <LuChevronRight className="text-gray text-lg -mb-[1px]" />
              <Link to="/dashboard/area" className="text-blue">
                Geo List
              </Link>
            </div>
          </div>

          <Link
            to="/dashboard/create-area"
            className="bg-dark text-white py-[10px] px-4 flex items-center gap-1 rounded-xl"
          >
            <GoPlus size="20" /> Create New
          </Link>
        </div>

        <div className="bg-white w-full h-full flex flex-col items-center justify-center rounded-xl py-32">
          <img src={pathImg} alt="" />

          <div className="text-center text-gray mt-8">
            <p>
              Currently you have no Data. <br />
              For next step first{" "}
              <Link to="/dashboard/create-area" className="text-blue">
                Create Region
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Area;
