import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    // console.log(user);
    login(email, password)
      .then((result) => {
        profileUpdate(result.user);
        const currentUser = result.user;
        // console.log(currentUser);
        navigate("/dashboard/region");
        from.reset("");
        Swal.fire("User Login Successfully");
      })
      .then((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="bgImg flex items-center justify-center py-12 md:py-28 rounded-3xl">
      {/* page title */}
      <Helmet>
        <title>FiledX - Login</title>
      </Helmet>
      <div
        data-aos="fade-up"
        className="bg-white pt-10 md:pt-20 px-10 md:px-52 pb-[50px] md:pb-[130px] mt-36 md:mt-24 rounded-3xl"
      >
        <h2 className="text-2xl md:text-5xl font-bold text-[#0B141F] text-center">
          Welcome Back!
        </h2>
        <p className="text-lg md:text-2xl font-light text-[#4E4E4E] mt-4 mb-6 md:mb-12 text-center">
          Please login to your account
        </p>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="py-4 md:py-6 pl-2  text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="py-4 md:py-6 pl-2 text-xl font-medium text-[#898989] mb-5 outline-0 w-full border-b-2 solid border-[#E1E1E1] rounded-xl"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="text-xl text-[#FFF] font-extrabold py-3 md:py-6 bg-[#0052CC] w-full rounded-lg mt-6 md:mt-12 mb-12 md:mb-24"
          >
            Sign in
          </button>
          <div className="text-center">
            <span className="text-lg md:text-2xl text-[#0B141F] font-medium ">
              Don’t have any account?{" "}
              <Link to={"/registration"} className="text-[#0052CC]">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
