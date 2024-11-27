import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import menuvector from '../../assets/menuvector.png';
import folder from '../../assets/folder.png';
import starred from '../../assets/starred.png';
import upload from '../../assets/upload.png';
import user from '../../assets/user.png';
import filter from '../../assets/filter.png';
import close from '../../assets/close.png';
import bellicon from '../../assets/bellicon.png';
import userprofile from '../../assets/userprofile.png';
import Home from '../../assets/Home.png'
import FTP from '../../assets/FTP.png';
import Rating from '../../assets/Rating.png';
import Disposal from '../../assets/Disposal.png';
import AddFolder from '../../assets/AddFolder.png';
import LogoutRounded from '../../assets/LogoutRounded.png';
import Sidebar from '../../Components/Sidebar';


const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu =() =>{
  setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      
         <div className='hidden lg:flex justify-between items-center '>
          <div><input className='w-261px h-[40px] border border-[#EAEAEA] mt-[16px] ml-[300px] p-4 rounded-3xl font-[Poppins]' type="text" placeholder='Search'></input></div>
          <div className='flex justify-center items-center gap-2 mt-[26px] mr-[59px]'><img className='object-contain' src={bellicon} alt=""/>
          <img className='object-contain' src={userprofile} alt=""/>
          <h3 className='text-[#242424] font-normal font-[Poppins] text-xs '>Jack Baeur</h3>
         </div>
         </div>



      <div className='flex justify-between items-center mt-[29px] lg:hidden'>
        <p className='font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]'>Prodoos<span className='font-light'>Files</span></p>
        <img className='mr-[22px] lg:hidden'  src = {menuvector} alt="hamburgermenuicon"
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
         
         <div className='flex justify-between items-center '><p className=' mt-[22px] font-[Poppins] text-[#773DD3] text-base font-extrabold ml-[22px]'>Prodoos<span className='font-light'>Files</span></p>
         <img className='mt-[28px] mr-[20px]' src ={close} alt="" onClick={toggleMenu}/></div>

       <div className='flex ml-[16px] mt-[27px] hover:bg-[#E3E0E833] transition-colors duration-200 '>
        <img className="object-contain cursor-pointer" src={Home} alt=""/>
         <h3 className='text-[#242424] cursor-pointer font-[Poppins] text-base font-normal'>Dashboard</h3>
         </div>

         <Link to="/folders">
         <div className='flex ml-[16px] mt-[25px]'>
        <img className="object-contain cursor-pointer" src={FTP} alt=""/>
         <h3 className='text-[#242424]  cursor-pointer font-[Poppins] text-base font-normal'>Folders</h3>
         </div>
         </Link>

        <Link to="/starred">
         <div className='flex ml-[16px] mt-[25px]'>
        <img className="object-contain cursor-pointer" src={Rating} alt=""/>
         <h3 className='text-[#242424] cursor-pointer font-[Poppins] text-base font-normal'>Starred</h3>
         </div>
         </Link>

         <Link to = "/recyclebin">
         <div className='flex ml-[16px] mt-[25px]'>
        <img className="object-contain cursor-pointer" src={Disposal} alt=""/>
         <h3 className='text-[#242424] cursor-pointer font-[Poppins] text-base font-normal'>Recycle Bin</h3>
         </div>
         </Link>

         <Link to ="/create">
         <div className='flex ml-[16px] mt-[25px]'> 
        <img  className="object-contain cursor-pointer" src={AddFolder} alt=""/>
         <h3 className='text-[#242424]  cursor-pointer font-[Poppins] text-base font-normal'>Create</h3>
         </div>
         </Link>
            
         <Link to="/logout">
         <div className='flex ml-[16px] mt-[25px]'>
        <img className="object-contain cursor-pointer" src={LogoutRounded} alt=""/>
         <h3 className='text-[#242424] font-[Poppins] text-base font-normal cursor-pointer'>Logout</h3>
         </div>
         </Link>
            
            </div>

            
            
            
          </div>
      ): null}

      <div className='lg:flex lg:justify-evenly lg:items-center lg:ml-[250px] lg:mt-[24px] '>
      {/* <div className='w-[60%] h-[176.77px] md:w-[50%] lg:w-[70%] lg:h-[177px] border border-[#DDDDDD] ml-[66.27px] md:ml-[350px] lg:ml-[310px] mr-[66.27px] rounded mt-[25.59px]'><div className='mt-[55.37px]'><img  className=" mx-auto" src={folder} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>All Folders</p></div></div>
      <div className='w-[60%] h-[176.77px]  md:w-[50%] lg:w-[70%]  border border-[#DDDDDD] ml-[68.6px] mr-[66.27px]  md:ml-[350px] rounded mt-[25.59px]'><div className='mt-[55.37px]'><img  className=" mx-auto" src={starred} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>Starred</p></div></div>
      <div className='w-[60%] h-[176.77px]  md:w-[50%] lg:w-[70%]  border border-[#DDDDDD] ml-[68.6px] mr-[66.27px]  md:ml-[350px] rounded mt-[25.59px]'><div className='mt-[55.37px]'><img  className=" mx-auto" src={upload} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>Uploads</p></div></div> */}
      
      <div className='border border-[#DDDDDD] mt-[20px] w-[90%] ml-[20px] md:w-[50%] md:ml-[50px]  lg:w-[262px] lg:h-[166px] '>
      <div className='mt-[55.37px]'><img  className=" mx-auto" src={folder} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>All Folders</p></div>
      </div>
      
      
      <div className='border border-[#DDDDDD]  mt-[20px] w-[90%] ml-[20px]  lg:w-[262px] lg:h-[166px]'>
      <div className='mt-[55.37px]'><img  className=" mx-auto" src={starred} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>Starred</p></div>
      </div>
      

      <div className='border border-[#DDDDDD] mt-[20px] w-[90%] ml-[20px] md:w-[50%] lg:w-[262px] lg:h-[166px]'>
      <div className='mt-[55.37px]'><img  className=" mx-auto" src={upload} alt="" /> <p className='mt-[11.47px] text-center text-[#242424] font-[Poppins] font-normal text-base'>Uploads</p></div>
      </div>
     
      </div>

      <div className='flex justify-between items-center mt-[28px] ml-[44px] lg:ml-[300px] mr-[44px]'>
        <h3 className='text-[#242424] font-[Poppins] text-base font-normal opacity-50'>Recent</h3> 
      <div className='flex justify-center items-center gap-1  '>
        <img src={filter} alt=""/>
      <h3 className='font-[Poppins] text-[#242424] font-normal text-base opacity-50  md:mr-[65px]'>Filter</h3>
      </div>
      </div>
      {/* <div className='w-[80%] h-[186px] lg:w-[92%] lg:h-[522px] border-[#EAEAEA] border ml-[44px] '>
        <div className='flex justify-between items-center mt-[24px] ml-[18px] mr-[18px]'>
          <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal'>Name</h3>
          <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal'>Modified</h3>
          <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal'>Shared With </h3>
          <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal'>Size</h3>
        </div>
        <hr className='mt-[17.98px]'/>

        <div className='flex justify-between items-center'>
          <div className='flex gap-1 items-center mt-[13px] ml-[18px]'><img className='w-[15px] h-[10px]' src = {folder} alt=""/> <h3 className='font-[Poppins] text-[#7E838B] font-normal text-[10px]'>Games</h3></div>
          <div className=''> <h3 className='font-[Poppins] font-normal mt-[13px] mr-[45px] text-[10px] text-[#7E838B]'>Aug, 20 ,2026</h3></div>
          <div className=''><img className='mt-[13px] ' src = {user} alt=""/></div>
          <div className=''><h3 className='font-[Poppins] font-normal text-[10px] text-[#7E838B]'>3.2GB</h3></div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='flex gap-1 items-center mt-[13px] ml-[18px]'><img className='w-[15px] h-[10px]' src = {folder} alt=""/> <h3 className='font-[Poppins] text-[#7E838B] font-normal text-[10px]'>Games</h3></div>
          <div className=''> <h3 className='font-[Poppins] font-normal mt-[13px] mr-[45px] text-[10px] text-[#7E838B]'>Aug, 20 ,2026</h3></div>
          <div className=''><img className='mt-[13px] ' src = {user} alt=""/></div>
          <div className=''><h3 className='font-[Poppins] font-normal text-[10px] text-[#7E838B]'>3.2GB</h3></div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-1 items-center mt-[13px] ml-[18px]'><img className='w-[15px] h-[10px]' src = {folder} alt=""/> <h3 className='font-[Poppins] text-[#7E838B] font-normal text-[10px]'>Games</h3></div>
          <div className=''> <h3 className='font-[Poppins] font-normal mt-[13px] mr-[45px] text-[10px] text-[#7E838B]'>Aug, 20 ,2026</h3></div>
          <div className=''><img className='mt-[13px] ' src = {user} alt=""/></div>
          <div className=''><h3 className='font-[Poppins] font-normal text-[10px] text-[#7E838B]'>3.2GB</h3></div>
        </div>

      </div> */}

<div className='w-[80%] h-[286px] lg:w-[72%] lg:h-[522px] border-[#EAEAEA] border ml-[44px] lg:ml-[300px]'>

  {/* Headers */}
  <div className='grid grid-cols-4 gap-[16px] px-[18px] mt-[24px]'>
    <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left'>Name</h3>
    <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left'>Modified</h3>
    <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left'>Shared With</h3>
    <h3 className='font-[Poppins] text-[#7E838B] text-[10px] font-normal text-left'>Size</h3>
  </div>

  <hr className='mt-[18px]' />

  {/* Row Items */}
  {[...Array(3)].map((_, index) => (
    <div key={index} className='grid grid-cols-4 gap-[16px] px-[18px] mt-[13px] items-center'>
      <div className='flex items-center gap-1'>
        <img className='w-[15px] h-[10px] object-contain' src={folder} alt='' />
        <h3 className='font-[Poppins] text-[#7E838B] font-normal text-[10px]'>Games</h3>
      </div>
      <h3 className='font-[Poppins] font-normal text-[10px] text-[#7E838B]'>Aug, 20, 2026</h3>
      <div>
        <img className='w-[15px] h-[15px] object-contain' src={user} alt='' />
      </div>
      <h3 className='font-[Poppins] font-normal text-[10px] text-[#7E838B]'>3.2GB</h3>
    </div>
  ))}
</div>


    </div>
  )
}

export default Dashboard