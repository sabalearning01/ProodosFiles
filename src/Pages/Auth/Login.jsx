import React, {useState} from "react";
import Clouds from "../../assets/Clouds.png";
import Eye from "../../assets/Eye.png";


const Login = () => {
  
  const [isLogin, setIsLogin] = useState(true)
       
   const toggleLogin = () => {
         setIsLogin(!true)
   }

  return (
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
            {/* <button
              onClick ={()=> setIsLogin(true)}
             className="w-[189px] h-[60px] bg-[#C83AA7] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl  ml-[6px] rounded-md cursor-pointer  " $>
              Sign in
            </button>
            <button className="bg-[#fff] font-[Poppins] text-xl text-[#242424] pt-[10px] pb-[10px] pl-[15px] pr-[15px] w-[189px] h-[60px] mr-[6px]  font-semibold rounded-md cursor-pointer active:bg-[#C83AA7] ">
              Sign up
            </button> */}
            <button
          onClick={() => setIsLogin(true)}
          className={`w-[189px] h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl ml-[6px] rounded-md cursor-pointer ${
            isLogin ? 'bg-[#C83AA7] text-white' : 'bg-[#fff] text-[#242424]'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`w-[189px] h-[60px] font-[Poppins] pt-[10px] pb-[10px] pl-[15px] pr-[15px] font-semibold text-xl mr-[6px] rounded-md cursor-pointer ${
            isLogin ? 'bg-[#fff] text-[#242424]' : 'bg-[#C83AA7] text-white'
          }`}
        >
          Sign Up
        </button>
          </div>
 
           


          {isLogin ? (
        <div className="login">
          <form>
          <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">Login</h3> 
          <h4 className="text-[#242424] mt-[9px] text-sm  ">Enter your details to login</h4>
            <div className="mt-[41px]">
              <label className="text-[#242424]  font-[Poppins] text-base font-medium ">Email:</label><br/>
              {/* <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] " type="email" placeholder="Enter email" required />
           */}
            <input
  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
  type="text"
  placeholder="Enter email"
  required
/>
            </div>
            <div className="mt-[43px]">
              <label className="text-[#242424]  font-[Poppins] text-base font-medium ">Password:</label>
              {/* <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] "  type="password" placeholder="Enter password" required /> */}
           <input
  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
  type="password"
  placeholder="Enter password"
  required
/>
          {/* <img  className="absolute right-[650px] bottom-[-26px]" src = {Eye} /> */}
          <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">Forgot Password</h3>
            </div>
            <button  style={{
        background: "linear-gradient(to top, #773DD3, #40B7D1)",
      }} className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold" type="submit">Login</button>
       <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">Don’t have an account? <span className="font-medium text-[#242424] cursor-pointer">Sign Up</span></h3>

       
              <img className="w-[100%]" src={Clouds} />
           
          </form>
        </div>
      ) : ( <div className="signup">
        <form>
        <h3 className="font-[Poppins] text-[#242424] text-3xl font-bold mt-[30px]  ">Sign Up</h3> 
        <h4 className="text-[#242424] mt-[9px] text-sm  ">Enter your Sign up details</h4>
          <div className="mt-[26px]">
            <label className="text-[#242424]  font-[Poppins] text-base font-medium ">Username:</label><br/>
            {/* <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] "type="text" placeholder="Enter username" required /> */}
            <input
  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
  type="text"
  placeholder="Enter username"
  required
/>
          </div>

          <div className="">
            <label className="text-[#242424]  font-[Poppins] text-base font-medium ">FullName:</label><br/>
            {/* <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] "type="email" placeholder="Enter email" required /> */}
            <input
  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
  type="password"
  placeholder="Enter fullname"
  required
/>
          </div>

          <div>
            <label className="text-[#242424]  font-[Poppins] text-base font-medium ">Password:</label><br/>
            <input
  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] w-[360px] h-[44px] pl-[15px] rounded border border-[#D0D5DD] bg-white"
  type="password"
  placeholder="Enter password"
  required
/>
          </div>
        

          {/* <div>
            <label className="text-[#242424]  font-[Poppins] text-base font-medium ">Password:</label><br/>
            <input type="password" placeholder="Enter password" required />
          </div> */}
          <button 
          style={{
            background: "linear-gradient(to top, #773DD3, #40B7D1)",
          }} className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold" type="submit">Sign Up</button>
          <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">Already have an account? <span className="font-medium text-[#242424] cursor-pointer">Login</span></h3>
        </form>
      </div>
    )}

          

        

          {/* <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium "> Email </h3>
          <input className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-7px bg-[white] " type="text" placeholder="Enter your email"  />


         <h3 className="text-[#242424] mt-[41px] font-[Poppins] text-base font-medium "> Password </h3>
          <input  className="mt-[9px] font-[Poppins] font-medium text-sm text-[#242424] opacity-30 
          w-[360px] h-[44px] pl-[15px] rounded border-[#D0D5DD] border-1px " type="password" placeholder="Enter your password"  /> */}

          {/* <img  className="absolute right-[650px] bottom-[-26px]" src = {Eye} />

          <h3 className="font-[Poppins] text-[#242424] text-sm font-medium ml-[245px] mt-[14px] cursor-pointer">Forgot Password</h3> */}

          {/* <button style={{
        background: "linear-gradient(to top, #773DD3, #40B7D1)",
      }}
      className="w-[360px] h-[44px] pt-[16px] pb-[16px] pl-[10px] pr-[10px] mt-[17px] rounded-lg flex items-center justify-center text-white font-[Poppins] text-base font-bold">Login</button> */}
      {/* <h3 className="font-[Poppins] text-sm text-[#475467] font-normal mt-[32px] ">Don’t have an account? <span className="font-medium text-[#242424] cursor-pointer">Sign Up</span></h3> */}
          
        </div>

           </div>

           {/* <div className="mt-20 ml-[570px]">
              <img className="w-[100%]" src={Cloudstorageandmediafiles} />
           </div> */}






        </div>

       
      </div>
    
  );
};

export default Login;
