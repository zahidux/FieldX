import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import logo from "../assets/FieldX.svg";
import Profile from "./Profile";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const onNavScroll = () => {
    if (window.scrollY > 40) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <header
      className={
        "fixed md:w-full z-50 transition-all duration-200 ease-in-out "
      }
    >
      <nav className="mx-12 md:mx-28 my-5">
        <div className="md:flex justify-between items-center">
          {/* Navbar Logo */}
          <Link to="/" className="">
            <img className="w-[125px]" src={logo} alt="logo" />
          </Link>

          {user ? (
            <Profile user={user} logOut={logOut} />
          ) : (
            <div className="flex gap-4 mt-2">
              <Link to={"/login"}>
                <button className="font-extrabold text-lg text-[#FFF] bg-[#0052CC] py-2 md:py-3 px-4 mx:px-6 rounded-lg">
                  Login
                </button>
              </Link>
              <Link to={"/registration"}>
                <button className="text-lg font-extrabold text-[#0052CC] py-2 md:py-3 px-3 md:px-6 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4">
                  Registration
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
