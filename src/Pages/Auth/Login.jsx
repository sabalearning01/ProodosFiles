import React, { useState } from "react";
import Clouds from "../../assets/Clouds.png";
// import Eye from "../../assets/Eye.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import *  as Yup from 'yup';

const Login = () => {

   const SignupSchema = Yup.object().shape({
    userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

    fullName:Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),


   })




  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!true);
  };

  return (
    <div className="flex justify-between items-center">
      <div
        style={{
          background: "linear-gradient(to top, #773DD3, #40B7D1)",
        }}
        className="min-h-screen w-full flex items-center justify-center text-white"
      >
        <div className="bg-white w-[100%] h-[727px] mt-[148px] mb-[149px] ml-[207px] mr-[206px] rounded-2xl">
          <div>
            <div className="w-[433px] h-[77px] bg-[#E9E9E9] mt-[73px] ml-[58px] border-solid border-[7px] border-[#C6DDE2] rounded-[3px]">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`w-[189px] h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl ml-[6px] rounded-md cursor-pointer ${
                    isLogin
                      ? "bg-[#C83AA7] text-white"
                      : "bg-[#fff] text-[#242424]"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`w-[189px] h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl mr-[6px] rounded-md cursor-pointer ${
                    isLogin
                      ? "bg-[#fff] text-[#242424]"
                      : "bg-[#C83AA7] text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {isLogin ? (
                <div className="login">
                  <form>
                    <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">
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
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="text"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="mt-[43px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Password:
                      </label>

                      <input
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                      {/* <img  className="absolute right-[650px] bottom-[-26px]" src = {Eye} /> */}
                      <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">
                        Forgot Password
                      </h3>
                    </div>
                    <button
                      style={{
                        background: "linear-gradient(to top, #773DD3, #40B7D1)",
                      }}
                      className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold"
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
                  <form>
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
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="text"
                        placeholder="Enter username"
                        required
                      />
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        FullName:
                      </label>
                      <br />

                      <input
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="text"
                        placeholder="Enter fullname"
                        required
                      />
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Email:
                      </label>
                      <br />

                      <input
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="text"
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    <div className="mt-[10px]">
                      <label className="text-[#242424]  font-[Poppins] text-base font-medium ">
                        Password:
                      </label>
                      <br />
                      <input
                        className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    <button
                      style={{
                        background: "linear-gradient(to top, #773DD3, #40B7D1)",
                      }}
                      className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold "
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
                </div>
              )}
            </div>

          
          </div>
          
        </div>
        <div className="absolute  right-[245px]">
        <img className="w-[100%]" src={Clouds} />
        </div>
      </div>


    </div>
  );
};

export default Login;
