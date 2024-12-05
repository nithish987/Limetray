import React from 'react';
import { FaHome, FaGlobe, FaShoppingCart, FaUsers, FaMobile, FaCashRegister } from 'react-icons/fa';
import { BiSolidPackage } from 'react-icons/bi';
import { MdPayments, MdTableRestaurant } from 'react-icons/md';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { IoMdPricetags } from 'react-icons/io';

const MenuItem = ({ icon: Icon, text, isActive }) => (
  <div className={`flex items-center px-6 py-3 cursor-pointer ${isActive ? 'bg-black text-white' : 'text-white hover:bg-gray-800'}`}>
    <Icon className="mr-3 text-xl" />
    <span>{text}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-screen overflow-y-auto">
      <div className="px-6 py-4 border-b border-gray-700">
        <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392051/limetraylogo_tsodjg.png" alt="Limetray" className="h-8" />
      </div>
      
      <MenuItem icon={FaHome} text="Home" />
      <MenuItem icon={FaGlobe} text="Website Builder" />
      <MenuItem icon={FaShoppingCart} text="Online Order" />
      <MenuItem icon={FaUsers} text="CRM" />
      <MenuItem icon={FaMobile} text="Tap" />
      <MenuItem icon={FaCashRegister} text="POS" />
      <MenuItem icon={BiSolidPackage} text="VN" />
      <MenuItem icon={MdPayments} text="Payment Integrations"  />
      <MenuItem icon={TbBrandGoogleAnalytics} text="TPAI"  />
      <MenuItem icon={BiSolidPackage} text="Delivery Integrations" />
      <MenuItem icon={TbBrandGoogleAnalytics} text="Pulse"  />
      <MenuItem icon={BiSolidPackage} text="Order Relay Products"  />
      <MenuItem icon={MdTableRestaurant} text="Table Reservations" />
      <MenuItem icon={IoMdPricetags} text="Offers"  />
    </div>
  );
};

export default Sidebar;
