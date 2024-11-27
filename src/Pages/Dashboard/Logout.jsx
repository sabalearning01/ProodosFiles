import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import menuvector from "../../assets/menuvector.png";
import bellicon from "../../assets/bellicon.png";
import userprofile from "../../assets/userprofile.png";

import close from "../../assets/close.png";
import { Link } from "react-router-dom";
import Home from "../../assets/Home.png";
import FTP from "../../assets/FTP.png";
import Rating from "../../assets/Rating.png";
import Disposal from "../../assets/Disposal.png";
import AddFolder from "../../assets/AddFolder.png";
import LogoutRounded from "../../assets/LogoutRounded.png";
import starred from "../../assets/starred.png";
import upload from "../../assets/upload.png";
import user from "../../assets/user.png";
import uploadcloud from "../../assets/uploadcloud.png";

const Logout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <Sidebar />

      <div className=" flex justify-between items-center mt-[29px] lg:hidden">
        <p className="font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]">
          Prodoos<span className="font-light">Files</span>
        </p>
        <img
          className="mr-[22px] lg:hidden"
          src={menuvector}
          alt="hamburgermenuicon"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen ? (
        <div>
          <div
            className="bg-[#344054B2] opacity-70 w-[100%] h-full fixed top-0 left-0 lg:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="bg-[#fff] w-[272px] h-[100%] fixed left-0 top-0 z-50 lg:hidden">
            <div className="flex justify-between items-center ">
              <p className=" mt-[22px] font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]">
                Prodoos<span className="font-light">Files</span>
              </p>
              <img
                className="mt-[28px] mr-[20px]"
                src={close}
                alt=""
                onClick={toggleMenu}
              />
            </div>

            <div className="flex ml-[16px] mt-[27px] hover:bg-[#E3E0E833] transition-colors duration-200 ">
              <img
                className="object-contain cursor-pointer"
                src={Home}
                alt=""
              />
              <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-base font-normal">
                Dashboard
              </h3>
            </div>

            <Link to="/Folders">
              <div className="flex ml-[16px] mt-[25px]">
                <img
                  className="object-contain cursor-pointer"
                  src={FTP}
                  alt=""
                />
                <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-base font-normal">
                  Folders
                </h3>
              </div>
            </Link>

            <Link to="/Starred">
              <div className="flex ml-[16px] mt-[25px]">
                <img
                  className="object-contain cursor-pointer"
                  src={Rating}
                  alt=""
                />
                <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-base font-normal">
                  Starred
                </h3>
              </div>
            </Link>

            <Link to="/RecycleBin">
              <div className="flex ml-[16px] mt-[25px]">
                <img
                  className="object-contain cursor-pointer"
                  src={Disposal}
                  alt=""
                />
                <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-base font-normal">
                  Recycle Bin
                </h3>
              </div>
            </Link>

            <Link to="/Create">
              <div className="flex ml-[16px] mt-[25px]">
                <img
                  className="object-contain cursor-pointer"
                  src={AddFolder}
                  alt=""
                />
                <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-base font-normal">
                  Create
                </h3>
              </div>
            </Link>

            <Link to="/Logout">
              <div className="flex ml-[16px] mt-[25px]">
                <img
                  className="object-contain cursor-pointer"
                  src={LogoutRounded}
                  alt=""
                />
                <h3 className="text-[#242424] font-[Poppins] text-base font-normal cursor-pointer">
                  Logout
                </h3>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="w-[90%] ml-[20px] mt-[20px] h-[692px] lg:w-[70%] lg:h-[506px] border border-[#EAEAEA] rounded-xl lg:ml-[350px] lg:mt-[40px]">
        <div className="lg:flex justify-between items-center mt-[24px] ml-[24px] mr-[24px]">
          <div>
            <h3 className="font-[Poppins] font-normal text-base text-[#242424] ">
              Personal Info
            </h3>{" "}
            <h4 className="font-[Poppins] text-sm text-[#475467]  ">
              Update your photo and personal details here.
            </h4>
          </div>
          <button className="bg-[#773DD3] text-[#ffff] pt-[10px] pb-[10px] pl-[24px] pr-[24px] rounded-lg">
            Save
          </button>
        </div>

        <hr className="mt-[24px]" />

        <div className="flex justify-between items-center lg:ml-[24px] lg:mr-[24px] lg:mt-[24px]">
          <h3 className="font-[Poppins] text-sm text-[#242424]">Name</h3>
          <input
            className="lg:w-[512px] lg:h-[44px] border border-[#EAEAEA] pl-[10px] text-[#242424] "
            type="text"
            placeholder="Jack Baeur"
          />
        </div>

        <hr className="mt-[24px] w-[95%] ml-[20px]" />

        <div className="flex justify-between items-center lg:ml-[24px] lg:mr-[24px] lg:mt-[24px]">
          <h3 className="font-[Poppins] text-sm text-[#242424]">Email</h3>
          <input
            className="lg:w-[512px] lg:h-[44px] border border-[#EAEAEA] pl-[10px] text-[#242424] "
            type="text"
            placeholder="JackBaeur@gmail.com"
          />
        </div>

        <hr className="mt-[24px] w-[95%] ml-[20px]" />

        <div className="lg:flex justify-between items-center mt-[24px] ml-[24px] mr-[24px]">
          <div>
            <h3 className="font-[Poppins] font-normal text-base text-[#242424] ">
              Your photo
            </h3>{" "}
            <h4 className="font-[Poppins] text-sm text-[#475467]  ">
              This will be displayed on your profile.
            </h4>
          </div>

          <div className="flex justify-between gap-[35px]">
            <div className="rounded-full  h-[50px] pt-3 pb-3 pl-4 pr-4 bg-[#F2F4F7] ">
              JB
            </div>
            <div className="w-[428px] border border-[#EAEAEA] pt-[10px] ">
              <img className="mx-auto" src={uploadcloud} />
              <h3 className="text-center text-sm font-[Poppins] text-[#242424] font-medium">
                {" "}
                Click to upload{" "}
                <span className="text-xs font-normal text-[#475467]">
                  or drag and drop <br /> SVG, PNG,JPG or GIF (max,800x400px)
                </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
