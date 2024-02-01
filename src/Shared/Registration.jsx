import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);
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

    const user = { name, email, id, mobile, password, confirmPassword, agree };
    console.log(user);

    signUpUser(email, password)
      .then((result) => {
        navigate("/menu");
        profileUpdate(result.user, name);
        const currentUser = result.user;
        console.log(currentUser);
        from.reset();
      })
      .then((error) => {
        console.log(error);
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
    <div className="bgImg flex items-center justify-center py-28 rounded-3xl">
      <div className="bg-white py-20 px-52 ">
        <h2 className="text-5xl font-bold text-[#0B141F] text-center">
          Create Account
        </h2>
        <p className="text-2xl text-[#4E4E4E] font-light mt-4 mb-8 text-center">
          Fill in the details below to create an account
        </p>
        <form onSubmit={handleCreateUser}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="id"
              name="id"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Your ID"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full text-xl text-[#898989] font-medium py-6 outline-0 border-b-2 solid border-[#E1E1E1]"
              placeholder="Confirm Password"
            />
          </div>
          <select className="w-full text-xl text-[#898989] font-medium py-6 pl-2 mt-4 rounded-sm outline-0 border-b-2 solid border-[#E1E1E1] hover:border-2">
            <option value="" disabled selected>
              Select Your Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="flex items-center gap-2 text-xl font-medium mt-10 mb-12 text-[#000] ">
            <input
              className="checkbox"
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
            className="text-xl text-[#FFF] font-extrabold w-full py-6 bg-[#0052CC] rounded-lg mt-12 mb-16"
          >
            Create Account
          </button>
          <span className="text-2xl text-[#0B141F] font-medium ">
            Don’t have any account?{" "}
            <Link to={"/login"} className="text-[#0052CC]">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Registration;
