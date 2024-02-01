import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to="/profile"
        className="hover:text-primary transition-all duration-300 ease-in-out"
      >
        {user?.photoURL ? (
          <img
            className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
            src={user?.photoURL}
            alt="User avatar"
          />
        ) : (
          <img
            className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
            src="https://i.pravatar.cc/300"
            alt="User avatar"
          />
        )}
      </Link>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 max-w-xs min-w-[200px] bg-slate-900 rounded-xl p-5 shadow-lg origin-top-right transition-all duration-300 ease-in-out ${
          isHover ? "top-full scale-100" : "top-12 scale-0"
        }`}
      >
        <>
          <div>{user?.displayName}</div>
          <div className="text-lg font-extrabold text-[#0052CC] py-3 px-6 rounded-lg border-2 solid border-[#0052CC] border-r-4 solid border-b-4">
            <Link to={"/"} onClick={() => logOut()}>
              LogOut
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Profile;
