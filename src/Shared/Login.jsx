import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((result) => {
        profileUpdate(result.user);
        const currentUser = result.user;
        navigate("/menu");
        from.reset("");
        Swal.fire("User Login Successfully");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bgImg h-screen flex items-center justify-center py-28 rounded-3xl">
      <div className="bg-white pt-20 px-52 pb-[130px]">
        <h2 className="text-5xl  font-bold text-[#0B141F]">Welcome Back!</h2>
        <p className="text-2xl font-light text-[#4E4E4E] mt-4 mb-12">
          Please login to your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="">
            <input
              type="email"
              id="email"
              name="email"
              className="py-6 pl-2 text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1]"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="">
            <input
              type="password"
              id="password"
              name="password"
              className="py-6 pl-2 text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="text-xl text-[#FFF] font-extrabold py-6 bg-[#0052CC] w-full rounded-lg mt-12 mb-24"
          >
            Sign in
          </button>
          <span className="text-2xl text-[#0B141F] font-medium ">
            Don’t have any account?{" "}
            <Link to={"/registration"} className="text-[#0052CC]">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
