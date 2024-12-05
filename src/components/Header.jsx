import React from 'react';
import { FaQuestionCircle, FaTachometerAlt, FaCog } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaTachometerAlt className="text-gray-600" />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaCog className="text-gray-600" />
            <h1 className="text-lg font-semibold">Settings</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <FaQuestionCircle />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392051/Screenshot_2024-12-05_114135_jcowu0.png" alt="Burger King" className="h-8" />
            {/* <span>Burger King</span> */}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-8 py-3 bg-gray-50 border-b">
        <div className="flex items-center gap-2 text-gray-600">
          <IoLocationOutline className="text-xl" />
          <span className="font-medium">DWARKA, NEW DELHI</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            <MdAccessTime />
            TIME SETTINGS
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            <HiOutlineOfficeBuilding />
            MULTI-LOCATION SETTINGS
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-600">
            <BiArrowBack />
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
