// import React from 'react'
import React, { useState } from "react";
import userprofile from "../../assets/userprofile.png";
import bellicon from "../../assets/bellicon.png";
import menuvector from "../../assets/menuvector.png";
import Home from "../../assets/Home.png";
import { Link } from "react-router-dom";
import FTP from "../../assets/FTP.png";
import Rating from "../../assets/Rating.png";
import Disposal from "../../assets/Disposal.png";
import AddFolder from "../../assets/AddFolder.png";
import LogoutRounded from "../../assets/LogoutRounded.png";
import close from "../../assets/close.png";

const Create = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [folderName, setFolderName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateFolder = async () => {
    if (!folderName.trim()) {
      setMessage("Folder name cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        "https://proodoosfiles.onrender.com/api/create-f/",
        {
          folderName,
        }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || "Error creating folder.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-[29px] lg:hidden">
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

      <div className="hidden lg:flex justify-between items-center ">
        <div>
          <input
            className="text-xs w-261px h-[40px] border border-[#EAEAEA] mb-[50px] ml-[310px] p-4 rounded-3xl font-[Poppins]"
            type="text"
            placeholder="Search"
            
          ></input>
        </div>
        <div className="mb-[30px] flex justify-center items-center gap-2 mt-[36px] mr-[59px]">
          <img className="object-contain mb-[50px]" src={bellicon} alt="" />
          <img className="object-contain mb-[50px]" src={userprofile} alt="" />
          <h3 className="text-[#242424] font-normal font-[Poppins] text-xs mb-[50px]">
            Jack Baeur
          </h3>
        </div>
      </div>

      <div className="">
        <input
          className="ml-5 mr-2- mt-2 relative mx-auto  rounded w-[90%] md:w-[55%] md:ml-[300px] lg:w-[70%]  h-[72px] lg:[100%] lg:ml-[315px] lg:mt-1 border border-[#EAEAEA] "
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <button onClick={handleCreateFolder} className=" absolute right-8 md:right-14 top-30 mt-6 lg:top-44 lg:right-24 lg:mt-4 mb-[19px] ml-[15px] cursor-pointer rounded Font-[Poppins] bg-[#773DD3] pb-[10px] pt-[10px] pl-[16px] pr-[16px] text-[#fff] text-[10px] font-normal">
          New Folder
        </button>
        {message && <p>{message}</p>}
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
              <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
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
                <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-sm font-normal">
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
                <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
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
                <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
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
                <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-sm font-normal">
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
                <h3 className="text-[#242424] font-[Poppins] text-sm font-normal cursor-pointer">
                  Logout
                </h3>
              </div>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Create;
