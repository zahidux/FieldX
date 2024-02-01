import React, { useContext } from "react";
import logo from "../assets/FieldX.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="">
      <div className="mx-28 my-5 fixed z-10 flex items-center justify-evenly">
        <Link to={"/"}>
          <img className="w-[125px]" src={logo} alt="logo" />
        </Link>
        <div className="">
          {user ? (
            <p to="/" className="">
              <div>{user?.displayName}</div>
              <div className="text-lg font-extrabold text-[#0052CC] py-3 px-6 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4">
                <Link to={"/"} onClick={() => logOut()}>
                  LogOut
                </Link>
              </div>
            </p>
          ) : (
            <div className="flex gap-4">
              <Link to={"/login"}>
                <button className="font-extrabold text-lg text-[#FFF] bg-[#0052CC] py-3 px-6 rounded-lg">
                  Login
                </button>
              </Link>
              <Link to={"/registration"}>
                <button className="text-lg font-extrabold text-[#0052CC] py-3 px-6 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4">
                  Registration
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
