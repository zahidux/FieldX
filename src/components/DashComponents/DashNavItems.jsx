import DashLink from "./DashLink";

// react icons
import { GrLocation } from "react-icons/gr";

// image
import logo from "../../assets/FieldX.svg";
import { Link } from "react-router-dom";

const DashNavItems = () => {
  return (
    <aside className="sticky top-0 duration-300 h-screen z-20">
      <div className="bg-white h-full w-auto md:w-[250px] py-2 px-4">
        <Link to={"/"}>
          <img className="mx-auto" src={logo} alt="" />
        </Link>

        <p className="text-gray uppercase mt-8">Menu</p>
        <ul className="mt-6 flex items-start gap-3">
          <GrLocation size="24" className="text-gray" />
          <div className="text-sm flex flex-col gap-2">
            <p className="text-gray mb-2">Geo Information</p>
            <DashLink to="/dashboard/region">Region</DashLink>
            <DashLink to="/dashboard/area">Area</DashLink>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default DashNavItems;
