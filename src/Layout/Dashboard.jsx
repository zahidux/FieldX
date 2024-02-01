import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashNavItems from "../components/DashComponents/DashNavItems";

import StayTop from "../components/StayTop";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
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
      <div className="w-full h-screen flex justify-center items-center">
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
        <main className="flex-1 w-full duration-300 z-10 bg-[#F2F2F5]">
          <div className="bg-white py-4 pr-5 flex items-end justify-end">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/2ad1f54716df5d59667877d07d039551-1664788852632/c28dea6e-85a7-45b9-8b41-79d11b6c2cb2.jpg"
                alt=""
              />

              <p className="flex items-center text-sm gap-2 text-dark">
                Henry <IoIosArrowDown />
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
