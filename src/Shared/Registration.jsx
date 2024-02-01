import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const id = from.id.value;
    const mobile = from.mobile.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    const agree = from.agree.value;

    const user = {
      name,
      email,
      id,
      mobile,
      password,
      confirmPassword,
      userRole,
      agree,
    };
    // console.log(user);

    signUpUser(email, password)
      .then((result) => {
        navigate("/dashboard/region");
        profileUpdate(result.user, name);
        const currentUser = result.user;
        // console.log(currentUser);
        from.reset();
      })
      .then((error) => {
        // console.log(error);
      });
    //password validation
    if ((password) => 6) {
      Swal.fire("The password is less then 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire("Password doesn't match");
      return;
    }
  };

  return (
    <div className="bgImg flex items-center justify-center py-12 md:py-28 rounded-3xl">
      {/* page title */}
      <Helmet>
        <title>FiledX - Registration</title>
      </Helmet>
      <div
        data-aos="fade-up"
        className="bg-white pt-10 md:pt-20 px-10 md:px-52 pb-[50px] md:pb-[130px] mt-36 md:mt-24 rounded-3xl"
      >
        <h2 className="text-2xl md:text-5xl font-bold text-[#0B141F] text-center">
          Create Account
        </h2>
        <p className="text-lg md:text-2xl text-[#4E4E4E] font-light mt-4 mb-8 text-center">
          Fill in the details below to create an account
        </p>
        <form onSubmit={handleCreateUser}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="id"
              name="id"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Your ID"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Confirm Password"
            />
          </div>
          <select
            onChange={(e) => setUserRole(e.target.value)}
            className={`py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl ${
              userRole !== "" && "border-2"
            }`}
          >
            <option value="" disabled selected>
              Select Your Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="flex items-center gap-2 text-base md:text-xl font-medium mt-5 md:mt-10 mb-5 md:mb-12 text-[#000] ">
            <input
              className="h-4 md:h-5 w-4 md:w-5 text-indigo-600 mr-1 text-gray-700"
              type="checkbox"
              id="agree"
              name="agree"
              required
            />
            <label htmlFor="agree">
              I read and agree to the{" "}
              <Link className="text-[#0052CC]" to={""}>
                Terms & Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="text-xl text-[#FFF] font-extrabold w-full py-3 md:py-6 bg-[#0052CC] rounded-lg mt-6 md:mt-12 mb-12 md:mb-24"
          >
            Create Account
          </button>
          <div className="text-center">
            <span className="text-lg md:text-2xl text-[#0B141F] font-medium">
              Don’t have any account?
              <Link to={"/login"} className="text-[#0052CC]">
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
