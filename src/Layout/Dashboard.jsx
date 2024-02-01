import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashNavItems from "../components/DashComponents/DashNavItems";

import StayTop from "../components/StayTop";
import "react-tooltip/dist/react-tooltip.css";
import { useContext, useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import avata from "../assets/avata.jpg";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.photoURL);

  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimationVisible(false);
    }, 3000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [setIsAnimationVisible]);

  if (isAnimationVisible) {
    return (
      <div className="w-full h-screen md:flex justify-center items-center">
        Loading
      </div>
    );
  }
  return (
    <>
      <StayTop />

      <div className="flex">
        {/* Sidebar */}
        <DashNavItems />

        {/* Outlet */}
        <main className="md:flex-1 w-full duration-300 z-10 bg-[#F2F2F5]">
          <div className="bg-white py-4 pr-5 flex md:items-end justify-end">
            <div className="md:flex items-center gap-2">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={user?.photoURL !== null ? user.photoURL : avata}
                alt=""
              />

              <p className="flex items-center text-sm gap-2 text-dark">
                {user?.displayName} <IoIosArrowDown />
              </p>
            </div>
          </div>

          <Outlet />

          <footer className="flex items-center justify-between px-5">
            <p className="text-gray text-xs">2022 © MAAC</p>

            <ul className="flex items-center gap-5 text-xs text-gray">
              <li>
                <Link to="/" className="hover:text-blue duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue duration-200">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </footer>
        </main>
      </div>

      <ToastContainer />
    </>
  );
};

export default Dashboard;
