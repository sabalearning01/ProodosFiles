import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Clouds from "../../assets/Clouds.png";
import axios from "axios";
import * as Yup from "yup";
import { SignupAction } from "../../Base/auth";
import { LoginAction } from "../../Base/auth";
import { useNavigate } from "react-router-dom";

// import Eye from "../../assets/Eye.png"



const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({
    userName: false,
    fullName: false,
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, "Username is too Short!")
      .max(50, "Your username is too Long!")
      .required("Username is Required"),

    fullName: Yup.string()
      .min(2, "Your fullname is too Short!")
      .max(50, "Your fullname is too Long!")
      .required("Fullname is Required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      ),
  });

  // Handle input changes
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    try {
      // Validate field individually
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setIsValid((prev) => ({ ...prev, [name]: true })); // Set valid if no error
    } catch (err) {
      setErrors((prev) => ({ ...prev, [name]: err.message }));
      setIsValid((prev) => ({ ...prev, [name]: false })); // Set invalid if error occurs
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); 
      
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({}); 

      
      const response = isLogin
        ? await LoginAction(formData)
        : await SignupAction(formData);

        console.log(SignupAction);
        console.log(LoginAction);

        navigate ("/dashboard")
      
      if (response.status >= 200 && response.status < 300) {
        toast.success(isLogin ? "Login successful" : "Signup successful");
      } else {
        toast.error("Unexpected response. Please try again.");
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path || "unknown"] = error.message;
        });
        setErrors(validationErrors);
      } else if (err.response) {
        
        console.error("API Error:", err.response.data);
        toast.error(err.response.data.message || "Something went wrong!");
      } else {
  
        console.error("Unexpected Error:", err);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectToDashboard = () => {
    navigate("/dashboard"); // Programmatically navigate to the sign-up route
  };

  console.log(formData);

  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      <ToastContainer />
      <div
        // style={{
        //   background: "linear-gradient(to top, #773DD3, #40B7D1)",
        // }}
        className="hidden bg-gradient-to-t from-[#773DD3] to-[#40B7D1] min-h-screen w-full md:flex items-center justify-center md:text-white"
      >
        <div className="block md:block lg:block bg-white w-[100%] h-[727px] md:mt-[148px] md:mb-[149px] md:ml-[207px] md:mr-[206px] md:rounded-2xl">
          <div className="hidden md:block lg:block">
            <div className="hidden md:block lg:block md:mr-[10px] w-[433px] h-[77px] bg-[#E9E9E9] mt-[73px] ml-[58px] border-solid border-[7px] border-[#C6DDE2] rounded-[3px]">
              <div className="hidden md:flex md:justify-between md:items-center">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`hidden md:block lg:block md:mt-[10px] lg:mt-[0px] lg:w-[189px] lg:h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl ml-[6px] rounded-md cursor-pointer ${
                    isLogin
                      ? "bg-[#C83AA7] text-white"
                      : "bg-[#fff] text-[#242424]"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`hidden md:block lg:block  lg:mt-[1px] md:mt-[10px] lg:w-[189px] lg:h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl mr-[6px] rounded-md cursor-pointer ${
                    isLogin
                      ? "bg-[#fff] text-[#242424]"
                      : "bg-[#C83AA7] text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {isLogin ? (
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <h3 className="sm:block md:hidden font-[Poppins] font-normal text-base text-[#2A2A2A] lg:hidden">
                      ProodosFiles
                    </h3>
                    <h3 className=" font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">
                      Login
                    </h3>
                    <h4 className="text-[#242424] mt-[9px] text-sm  ">
                      Enter your details to login
                    </h4>
                    <div className="mt-[41px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Email:
                      </label>
                      <br />

                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white ${
                          errors.email
                            ? "border-red-500"
                            : isValid.email
                            ? "border-green-500"
                            : ""
                        }`}
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mt-[43px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Password:
                      </label>

                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white ${
                          errors.password
                            ? "border-red-500"
                            : isValid.password
                            ? "border-green-500"
                            : ""
                        }`}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="************"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="text-red-500 text-sm">
                          {errors.password}
                        </div>
                      )}
                      <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">
                        Forgot Password
                      </h3>
                    </div>
                    <button
                      // style={{
                      //   background: "linear-gradient(to top, #773DD3, #40B7D1)",
                      // }}
                      className="bg-gradient-to-t from-[#773DD3] to-[#40B7D1] w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold"
                      type="submit"
                    >
                      Login
                    </button>
                    <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">
                      Don’t have an account?{" "}
                      <span className="font-medium text-[#242424] cursor-pointer">
                        Sign Up
                      </span>
                    </h3>
                  </form>
                </div>
              ) : (
                <div className="signup">
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">
                      Sign Up
                    </h3>
                    <h4 className="text-[#242424] mt-[9px] text-sm  ">
                      Enter your Sign up details
                    </h4>
                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Username:
                      </label>
                      <br />

                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] opacity-50 bg-white
                        ${
                          errors.userName
                            ? "border-red-500"
                            : isValid.userName
                            ? "border-green-500"
                            : ""
                        }`}
                        name="userName"
                        type="text"
                        placeholder="Enter your userName"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                      {errors.userName && (
                        <div className="text-red-500 text-sm">
                          {errors.userName}
                        </div>
                      )}
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        FullName:
                      </label>
                      <br />

                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white
                        ${
                          errors.fullName
                            ? "border-red-500"
                            : isValid.fullName
                            ? "border-green-500"
                            : ""
                        }`}
                        name="fullName"
                        type="text"
                        placeholder="Enter your fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <div className="text-red-500 text-sm">
                          {errors.fullName}
                        </div>
                      )}
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Email:
                      </label>
                      <br />

                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white
                        ${
                          errors.email
                            ? "border-red-500"
                            : isValid.email
                            ? "border-green-500"
                            : ""
                        }`}
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Password:
                      </label>
                      <br />
                      <input
                        className={`mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white
                          ${
                            errors.password
                              ? "border-red-500"
                              : isValid.password
                              ? "border-green-500"
                              : ""
                          }`}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="************"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.password && (
                      <div className="text-red-500 text-sm">
                        {errors.password}
                      </div>
                    )}

                    <button
                      // style={{
                      //   background: "linear-gradient(to top, #773DD3, #40B7D1)",
                      // }}

                      className="bg-gradient-to-t from-[#773DD3] to-[#40B7D1] w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold "
                      type="submit"
                    >
                      Sign Up
                    </button>
                    <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">
                      Already have an account?{" "}
                      <span className="font-medium text-[#242424] cursor-pointer">
                        Login
                      </span>
                    </h3>
                  </form>
                  {/* )} */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden md:hidden lg:block lg:absolute  lg:right-[245px]">
          <img className="w-[100%]" src={Clouds} />
        </div>
      </div>
    </div>
  );
};

export default Login;
