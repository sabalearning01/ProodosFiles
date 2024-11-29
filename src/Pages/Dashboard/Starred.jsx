// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import menuvector from "../../assets/menuvector.png";
// import bellicon from "../../assets/bellicon.png";
// import Home from "../../assets/Home.png";
// import FTP from "../../assets/FTP.png";
// import Rating from "../../assets/Rating.png";
// import Disposal from "../../assets/Disposal.png";
// import AddFolder from "../../assets/AddFolder.png";
// import LogoutRounded from "../../assets/LogoutRounded.png";
// import user from "../../assets/user.png";
// import close from "../../assets/close.png";

// const Starred = () => {
//   const [folders, setFolders] = useState([
//     { id: 1, name: "Games", modified: "Aug, 20, 2026", size: "3.2GB", isStarred: false },
//     { id: 2, name: "Tech", modified: "Jul, 15, 2026", size: "1.5GB", isStarred: true },
//     { id: 3, name: "Music", modified: "Jun, 12, 2026", size: "2.8GB", isStarred: false },
//     { id: 4, name: "Pictures", modified: "May, 18, 2026", size: "4.1GB", isStarred: true },
//     { id: 5, name: "Videos", modified: "Apr, 10, 2026", size: "10GB", isStarred: false },
//   ]);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showOnlyStarred, setShowOnlyStarred] = useState(false);
//   const [sortCriteria, setSortCriteria] = useState("name");
  

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleStarred = (id) => {
//     setFolders((prevFolders) =>
//       prevFolders.map((folder) =>
//         folder.id === id ? { ...folder, isStarred: !folder.isStarred } : folder
//       )
//     );
//   };

//   const handleSort = (criteria) => {
//     setSortCriteria(criteria);
//     setFolders((prevFolders) =>
//       [...prevFolders].sort((a, b) => {
//         if (criteria === "name") return a.name.localeCompare(b.name);
//         if (criteria === "size") return parseFloat(a.size) - parseFloat(b.size);
//         if (criteria === "modified") return new Date(a.modified) - new Date(b.modified);
//         return 0;
//       })
//     );
//   };

//   const filteredFolders = showOnlyStarred
//     ? folders.filter((folder) => folder.isStarred)
//     : folders;



//   return (
//     <div>
//       {/* Mobile Navbar */}
//       <div className="flex justify-between items-center mt-[29px] lg:hidden">
//         <p className="font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]">
//           Prodoos<span className="font-light">Files</span>
//         </p>
//         <img
//           className="mr-[22px] lg:hidden"
//           src={menuvector}
//           alt="hamburgermenuicon"
//           onClick={toggleMenu}
//         />
//       </div>

//       {isMenuOpen ? (
//         <div>
//           <div
//             className="bg-[#344054B2] opacity-70 w-[100%] h-full fixed top-0 left-0 lg:hidden"
//             onClick={toggleMenu}
//           ></div>
//           <div className="bg-[#fff] w-[272px] h-[100%] fixed left-0 top-0 z-50 lg:hidden">
//             <div className="flex justify-between items-center ">
//               <p className=" mt-[22px] font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]">
//                 Prodoos<span className="font-light">Files</span>
//               </p>
//               <img
//                 className="mt-[28px] mr-[20px]"
//                 src={close}
//                 alt=""
//                 onClick={toggleMenu}
//               />
//             </div>

//             <div className="flex ml-[16px] mt-[27px] hover:bg-[#E3E0E833] transition-colors duration-200 ">
//               <img
//                 className="object-contain cursor-pointer"
//                 src={Home}
//                 alt=""
//               />
//               <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
//                 Dashboard
//               </h3>
//             </div>

//             <Link to="/Folders">
//               <div className="flex ml-[16px] mt-[25px]">
//                 <img
//                   className="object-contain cursor-pointer"
//                   src={FTP}
//                   alt=""
//                 />
//                 <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-sm font-normal">
//                   Folders
//                 </h3>
//               </div>
//             </Link>

//             <Link to="/Starred">
//               <div className="flex ml-[16px] mt-[25px]">
//                 <img
//                   className="object-contain cursor-pointer"
//                   src={Rating}
//                   alt=""
//                 />
//                 <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
//                   Starred
//                 </h3>
//               </div>
//             </Link>

//             <Link to="/RecycleBin">
//               <div className="flex ml-[16px] mt-[25px]">
//                 <img
//                   className="object-contain cursor-pointer"
//                   src={Disposal}
//                   alt=""
//                 />
//                 <h3 className="text-[#242424] cursor-pointer font-[Poppins] text-sm font-normal">
//                   Recycle Bin
//                 </h3>
//               </div>
//             </Link>

//             <Link to="/Create">
//               <div className="flex ml-[16px] mt-[25px]">
//                 <img
//                   className="object-contain cursor-pointer"
//                   src={AddFolder}
//                   alt=""
//                 />
//                 <h3 className="text-[#242424]  cursor-pointer font-[Poppins] text-sm font-normal">
//                   Create
//                 </h3>
//               </div>
//             </Link>

//             <Link to="/Logout">
//               <div className="flex ml-[16px] mt-[25px]">
//                 <img
//                   className="object-contain cursor-pointer"
//                   src={LogoutRounded}
//                   alt=""
//                 />
//                 <h3 className="text-[#242424] font-[Poppins] text-sm font-normal cursor-pointer">
//                   Logout
//                 </h3>
//               </div>
//             </Link>
//           </div>
//         </div>
//       ) : null}

//       {/* Main Content */}
//       <div className="mt-[40px] w-[90%] h-[450px] md:w-[50%] lg:w-[72%] lg:ml-[300px] border-[#EAEAEA] border mx-auto">
//         {/* Filter and Sort Section */}
//         <div className="flex justify-between gap-3 items-center px-[18px] mt-[24px]">
//           <button
//             onClick={() => setShowOnlyStarred(!showOnlyStarred)}
//             className="px-4 py-2 bg-purple-500 text-white rounded text-sm font-[Poppins]"
//           >
//             {showOnlyStarred ? "Show All" : "Show Starred Only"}
//           </button>
//           <select
//             onChange={(e) => handleSort(e.target.value)}
//             value={sortCriteria}
//             className="px-4 py-2 bg-gray-200 rounded text-sm font-[Poppins]"
//           >
//             <option  className="text-xs" value="name">Sort by Name</option>
//             <option  className="text-xs" value="size">Sort by Size</option>
//             <option className="text-xs" value="modified">Sort by Modified</option>
//           </select>
//         </div>
            
//         <div className="grid grid-cols-5 gap-[16px] px-[18px] mt-[24px]">
//           <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal  text-left">
//             Name
//           </h3>
//           <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left">
//             Modified
//           </h3>
//           <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left">
//             Shared With
//           </h3>
//           <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left">
//             Size
//           </h3>
//           {/* <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left">
//             Share
//           </h3> */}
//           <h3 className="font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left">
//             Delete
//           </h3>
//         </div>

//         <hr className="mt-[18px]" />

//         {/* Rows Section */}
//         {filteredFolders.length > 0 ? (
//           filteredFolders.map((folder) => (
//             <div
//               key={folder.id}
//               className="grid grid-cols-5 gap-[16px] px-[18px] mt-[13px] items-center"
//             >
//               {/* Name Column */}
//               <div className="flex items-center gap-1 pr-[30px]">
//                 <img
//                   className="w-[15px] h-[10px] object-contain"
//                   src={folder} // Replace with a valid `folder` icon source
//                   alt="Folder Icon"
//                 />
//                 <h3 className="font-[Poppins] text-[#7E838B] font-normal text-[10px] ">
//                   {folder.name}
//                 </h3>
//               </div>

//               {/* Modified Date Column */}
//               <h3 className="font-[Poppins] font-normal text-[10px] text-[#7E838B]">
//                 {folder.modified}
//               </h3>

//               {/* Shared With Column */}
//               <div>
//                 <img
//                   className="w-[15px] h-[15px] object-contain"
//                   src={user} // Replace with a valid `user` icon source
//                   alt="User Icon"
//                 />
//               </div>

//               {/* Size Column */}
//               <h3 className="font-[Poppins] font-normal text-[10px] text-[#7E838B]">{folder.size}</h3>

//               {/* Starred Column */}
//               <button
//                 onClick={() => toggleStarred(folder.id)}
//                 className={`font-[Poppins] text-[10px] px-2 py-1 rounded ${
//                   folder.isStarred ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
//                 }`}
//               >
//                 {folder.isStarred ? "Unstar" : "Star"}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-[#7E838B] text-[10px] text-center mt-4">No folders available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Starred;

// import { Starred } from "../../Base/data/Starred";




// import { Link } from "react-router-dom";
// import menuvector from "../../assets/menuvector.png";
// import bellicon from "../../assets/bellicon.png";
// import Home from "../../assets/Home.png";
// import FTP from "../../assets/FTP.png";
// import Rating from "../../assets/Rating.png";
// import Disposal from "../../assets/Disposal.png";
// import AddFolder from "../../assets/AddFolder.png";
// import LogoutRounded from "../../assets/LogoutRounded.png";
// import user from "../../assets/user.png";
// import close from "../../assets/close.png";

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


const Starred = () => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [folders, setFolders] = useState([
    { id: 1, name: "Games", modified: "Aug, 20, 2026", size: "3.2GB", isStarred: false },
    { id: 2, name: "Tech", modified: "Jul, 15, 2026", size: "1.5GB", isStarred: true },
    { id: 3, name: "Music", modified: "Jun, 12, 2026", size: "2.8GB", isStarred: false },
    { id: 4, name: "Pictures", modified: "May, 18, 2026", size: "4.1GB", isStarred: true },
    { id: 5, name: "Videos", modified: "Apr, 10, 2026", size: "10GB", isStarred: false },
  ]);

  const toggleStarred = async (id) => {
    const folder = folders.find((folder) => folder.id === id);
    if (!folder) return;

    try {
      // Make API call
      const updatedFolder = { id: folder.id, isStarred: !folder.isStarred };
       Starred("/starred-f", updatedFolder);

      // Update UI
      setFolders((prevFolders) =>
        prevFolders.map((f) =>
          f.id === id ? { ...f, isStarred: !f.isStarred } : f
        )
      );
    } catch (error) {
      console.error("Failed to update starred status:", error);
      alert("Could not update starred status. Please try again.");
    }
  };

  return (
    <div>
      {/* Render folders */}

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
    
      
      <div>
        {folders.map((folder) => (
          <div key={folder.id} className="grid grid-cols-5 gap-[16px] px-[18px] mt-[43px] items-center md:ml-[350px]">
            <h3 className="font-[Poppins] text-[10px]">{folder.name}</h3>
            <h3 className="font-[Poppins] text-[10px]">{folder.modified}</h3>
            <h3 className="font-[Poppins] text-[10px]">{folder.size}</h3>
            <button
              onClick={() => toggleStarred(folder.id)}
              className={`font-[Poppins] text-[10px] px-2 py-1 rounded ${
                folder.isStarred ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {folder.isStarred ? "Unstar" : "Star"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starred;

