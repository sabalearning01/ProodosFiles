import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cloudstorageandmediafiles from "../assets/Cloudstorageandmediafiles.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import Eye from "../assets/Eye.png";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleMode = () => setIsSignIn(!isSignIn);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    ...(isSignIn
      ? {}
      : {
          username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Username is required"),
        }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      fullname: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        url: "https://default-url.com", // Replace this with the appropriate value
      };

      const endpoint = isSignIn
        ? "https://proodoosfiles.onrender.com/api/login/"
        : "https://proodoosfiles.onrender.com/api/sign-up/";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Response:", data);

        // Success: Show toast notification
        toast.success(isSignIn ? "Logged in successfully!" : "Account created successfully!");
      } catch (error) {
        console.error("Error:", error.message);

        // Error: Show toast notification
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div
      className="lg:bg-gradient-to-b from-custom-light-blue via-custom-deep-blue to-custom-purple min-h-screen w-full md:flex items-center justify-center text-white"
    >
      <div className="bg-white w-[100%] h-[100%] md:h-[727px] mt-[148px] mb-[149px] ml-[207px] mr-[206px] rounded-2xl">
        <div>
          <div className="sm:hidden md:block md:w-[433px] md:h-[77px]  md:bg-[#E9E9E9] mt-[73px] ml-[58px] md:border-solid md:border-[7px] md:border-[#C6DDE2] rounded-[3px]">
            <div className="hidden md:flex justify-between items-center">
              <button
                onClick={() => setIsSignIn(true)}
                className={`hidden md:block md:w-[189px] h-[60px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-[Poppins] font-semibold text-xl ml-[6px] rounded-md cursor-pointer ${
                  isSignIn ? "bg-[#C83AA7] text-white" : "bg-[#fff] text-[#242424]"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignIn(false)}
                className={`hidden md:block md:w-[189px] h-[60px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-[Poppins] font-semibold text-xl mr-[6px] rounded-md cursor-pointer ${
                  !isSignIn ? "bg-[#C83AA7] text-white" : "bg-[#fff] text-[#242424]"
                }`}
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-[20px] pb-[18px] font-normal lg:hidden pt-[60px]">ProodosFiles</p>
            <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]">
              {isSignIn ? "Login" : "SignUp"}
            </h3>
            <h4 className="text-[#242424] mt-[9px] text-sm">
              {isSignIn
                ? "Enter your Sign In details"
                : "Enter your Sign Up details"}
            </h4>

            <form onSubmit={formik.handleSubmit}>
              {!isSignIn && (
                <div>
                  <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium">
                    Username
                  </h3>
                  <input
                    className="w-full rounded-md border border-[#D0D5DD80] h-[44px] pl-4 text-[#24242480] mb-6]"
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
              )}

              <div>
                <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium">
                  Email
                </h3>
                <input
                  className="w-full rounded-md border border-[#D0D5DD80] h-[44px] pl-4 text-[#24242480] mb-6]"
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium">
                  Password
                </h3>
                <input
                  className="w-full font-[Poppins] rounded-md border border-[#D0D5DD80] h-[44px] pl-4 text-[#24242480] mb-6"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
               
              </div>

              {isSignIn && (

                // <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">
                //   Forgot Password
                // </h3>
                
                <Link to ="/resetpassword">
                  <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">
                    Forgot Password
                    </h3>
                 </Link>
              )}

              <button
                type="submit"
                className="text-[16px] mb-[425px] lg:mb-[20px] font-bold w-full h-[44px] text-white bg-gradient-to-r from-custom-light-blue to-custom-purple rounded-md"
              >
                {isSignIn ? "Login" : "Sign Up"}
              </button>
            </form>

            <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px]">
              {isSignIn ? (
                <Link to="/">
                <>
                  Don’t have an account?{" "}
                  <span
                    className="font-medium text-[#242424] cursor-pointer"
                    onClick={toggleMode}
                  >
                    Sign Up
                  </span>
                </>
                </Link>
              ) : (
                <Link to="/Login">
                <>
                  Already have an account?{" "}
                  
                  <span
                    className="font-medium text-[#242424] cursor-pointer"
                    onClick={toggleMode}
                  >
                    Sign In
                  </span>
                </>
                </Link>
              )}
            </h3>
          </div>
        </div>

        <div className="mt-20 ml-[570px]">
          <img
            className="w-[100%]"
            src={Cloudstorageandmediafiles}
            alt="Cloud Storage and Media Files"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
