import React from "react";
// import Cloudstorageandmediafiles from '../assets/Cloudstorageandmediafiles.png';
import Cloudstorageandmediafiles from "../../assets/Cloudstorageandmediafiles.png";
import Eye from "../../assets/Eye.png"


const Login = () => {
  return (
    
    <div
      style={{
        background: "linear-gradient(to top, #773DD3, #40B7D1)",
      }}
      className="min-h-screen w-full flex items-center justify-center text-white"
    >
      <div className="bg-white w-[100%] h-[727px] mt-[148px] mb-[149px] ml-[207px] mr-[206px] rounded-2xl">

   //flex     

           <div>
           <div className="w-[433px] h-[77px] bg-[#E9E9E9] mt-[73px] ml-[58px] border-solid border-[7px] border-[#C6DDE2] rounded-[3px]">
          <div className="flex justify-between items-center   ]">
            <button className="w-[189px] h-[60px] bg-[#C83AA7] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl  ml-[6px] rounded-md cursor-pointer ">
              Sign in
            </button>
            <button className="bg-[#fff] font-[Poppins] text-xl text-[#242424] pt-[10px] pb-[10px] pl-[15px] pr-[15px] w-[189px] h-[60px] mr-[6px]  font-semibold rounded-md cursor-pointer active:bg-[#C83AA7] ">
              Sign up
            </button>
          </div>

         <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">Login</h3>
          <h4 className="text-[#242424] mt-[9px] text-sm  ">Enter your Sign in details</h4>

          <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium "> Email </h3>
          <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] " type="text" placeholder="Enter your email"  />


         <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium "> Password </h3>
          <input  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30 
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-1px " type="password" placeholder="Enter your password"  />

          <img  className="absolute right-[650px] bottom-[-26px]" src = {Eye} />

          <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">Forgot Password</h3>

          <button style={{
        background: "linear-gradient(to top, #773DD3, #40B7D1)",
      }}
      className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold">Login</button>
      <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">Don’t have an account? <span className="font-medium text-[#242424] cursor-pointer">Sign Up</span></h3>
          
        </div>

           </div>

           <div className="mt-20 ml-[570px]">
              <img className="w-[100%]" src={Cloudstorageandmediafiles} />
           </div>






        </div>

       
      </div>
    
  );
};

export default Login;
