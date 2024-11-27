import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import menuvector from "../../assets/menuvector.png";
import bellicon from "../../assets/bellicon.png";
import userprofile from "../../assets/userprofile.png";
import close from "../../assets/close.png";
import uploadcloud from "../../assets/uploadcloud.png";
import { Link } from "react-router-dom";
import Home from "../../assets/Home.png";
import FTP from "../../assets/FTP.png";
import Rating from "../../assets/Rating.png";
import Disposal from "../../assets/Disposal.png";
import AddFolder from "../../assets/AddFolder.png";
import LogoutRounded from "../../assets/LogoutRounded.png";
import axios from "axios"; // Install axios if not already done: npm install axios

const Logout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file
  const [uploadStatus, setUploadStatus] = useState(""); // State to store upload status

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(""); // Reset upload status on file selection
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Upload successful!");
      console.log("Upload response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div>
      <Sidebar />
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

      {isMenuOpen && (
        <div>
          <div
            className="bg-[#344054B2] opacity-70 w-[100%] h-full fixed top-0 left-0 lg:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="bg-[#fff] w-[272px] h-[100%] fixed left-0 top-0 z-50 lg:hidden">
            <div className="flex justify-between items-center ">
              <p className="mt-[22px] font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]">
                Prodoos<span className="font-light">Files</span>
              </p>
              <img
                className="mt-[28px] mr-[20px]"
                src={close}
                alt="close"
                onClick={toggleMenu}
              />
            </div>

            <div className="flex ml-[16px] mt-[27px] hover:bg-[#E3E0E833] transition-colors duration-200 ">
              <img
                className="object-contain cursor-pointer"
                src={Home}
                alt="Dashboard"
              />
              <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-base font-normal">
                Dashboard
              </h3>
            </div>

            {/* Other links */}
          </div>
        </div>
      )}

      <div className="w-[90%] ml-[20px] mt-[20px] h-[692px] lg:w-[70%] lg:h-[506px] border border-[#EAEAEA] rounded-xl lg:ml-[350px] lg:mt-[40px]">
        <div className="lg:flex justify-between items-center mt-[24px] ml-[24px] mr-[24px]">
          <div>
            <h3 className="font-[Poppins] font-normal text-base text-[#242424] ">
              Personal Info
            </h3>
            <h4 className="font-[Poppins] text-sm text-[#475467]">
              Update your photo and personal details here.
            </h4>
          </div>
          <button
            onClick={handleUpload}
            className="bg-[#773DD3] text-[#ffff] pt-[10px] pb-[10px] pl-[24px] pr-[24px] rounded-lg"
          >
            Save
          </button>
        </div>

        <hr className="mt-[24px]" />

        <div className="lg:flex justify-between items-center mt-[24px] ml-[24px] mr-[24px]">
          <div>
            <h3 className="font-[Poppins] font-normal text-base text-[#242424] ">
              Your photo
            </h3>
            <h4 className="font-[Poppins] text-sm text-[#475467]">
              This will be displayed on your profile.
            </h4>
          </div>
          <div className="flex justify-between gap-[35px]">
            <div className="rounded-full h-[50px] pt-3 pb-3 pl-4 pr-4 bg-[#F2F4F7]">
              JB
            </div>
            <div className="w-[428px] border border-[#EAEAEA] pt-[10px]">
              <label htmlFor="fileUpload" className="cursor-pointer">
                <img className="mx-auto" src={uploadcloud} alt="Upload" />
                <h3 className="text-center text-sm font-[Poppins] text-[#242424] font-medium">
                  Click to upload
                  <span className="text-xs font-normal text-[#475467]">
                    or drag and drop <br /> SVG, PNG, JPG, or GIF (max: 800x400px)
                  </span>
                </h3>
              </label>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* Feedback message */}
        {uploadStatus && (
          <p
            className={`mt-4 text-center ${
              uploadStatus.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {uploadStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Logout;

