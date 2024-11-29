import React, { useState } from "react";
import menuvector from "../../assets/menuvector.png";
import Home from "../../assets/Home.png";
import { Link } from "react-router-dom";
import FTP from "../../assets/FTP.png";
import Rating from "../../assets/Rating.png";
import Disposal from "../../assets/Disposal.png";
import AddFolder from "../../assets/AddFolder.png";
import LogoutRounded from "../../assets/LogoutRounded.png";
import close from "../../assets/close.png";


const RecycleBin = () => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage recycle bin items
  const [recycleBinItems, setRecycleBinItems] = useState([
    { id: 1, name: "Document 1", deletedAt: "2024-11-25" },
    { id: 2, name: "Image 2", deletedAt: "2024-11-24" },
    { id: 3, name: "Video 3", deletedAt: "2024-11-23" },
  ]);

  // Function to restore an item
  const restoreItem = (id) => {
    setRecycleBinItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
    alert(`Item ${id} restored successfully.`);
  };

  // Function to permanently delete an item
  const deleteItemPermanently = (id) => {
    setRecycleBinItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
    alert(`Item ${id} deleted permanently.`);
  };

  return (
    <div className="p-10">
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

            <Link to="/folders">
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

            <Link to="/starred">
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

            <Link to="/recyclebin">
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

            <Link to="/create">
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

            <Link to="/logout">
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

      
      <h2 className="hidden text-2xl font-bold mb-4">Recycle Bin</h2>
      {recycleBinItems.length === 0 ? (
        <p className="text-gray-500">The recycle bin is empty.</p>
      ) : (
        <div className="border border-gray-300 rounded-md p-4 lg:ml-[300px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-sm font-[Poppins] text-[#242424] font-medium">Name</th>
                <th className="border-b py-2 text-sm font-[Poppins] font-medium">Deleted At</th>
                <th className="border-b py-2 text-sm font-[Poppins]  font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recycleBinItems.map((item) => (
                <tr key={item.id} className="border-b text-xs text-[#7E838B]  font-[Poppins]">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.deletedAt}</td>
                  <td className="py-2 text-center">
                    <button
                      className="bg-blue-500 text-sm text-white px-4 py-1 rounded mr-2 sm:text-xs sm:px-2 "
                      onClick={() => restoreItem(item.id)}
                    >
                      Restore
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded text-sm mt-4 sm:text-xs sm:px-2"
                      onClick={() => deleteItemPermanently(item.id)}
                    >
                      Delete Permanently
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecycleBin;
