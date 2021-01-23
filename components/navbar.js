import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { HiSearch } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgClose } from "react-icons/cg";

toast.configure();

function Navbar({ setSidebar, sidebar }) {
  const notify = (name) => {
    return toast(`You clicked ${name}`);
  };

  return (
    // <div className="h-1/5">
    <div className="p-2 bg-blue-900 ">
      <div className="flex items-center justify-end space-x-2">
        <div className="w-3 h-3 bg-gray-500"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 transform rotate-45 bg-gray-500"></div>
      </div>
      <div className="flex items-center justify-between p-3 text-2xl text-white">
        <div className="flex items-center space-x-8">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="cursor-pointer hover:text-yellow-500 active:text-yellow-600"
          >
            {sidebar ? <CgClose /> : <FiMenu />}
          </div>
          <div className="font-semibold">Home</div>
        </div>
        <div className="flex space-x-6 text-gray-300">
          <div
            onClick={() => notify("Notification")}
            className="cursor-pointer hover:text-yellow-500 active:text-yellow-600"
          >
            <MdNotifications />
          </div>
          <div
            onClick={() => notify("Share")}
            className="cursor-pointer hover:text-yellow-500 active:text-yellow-600"
          >
            <IoShareSocial />
          </div>
          <div
            onClick={() => notify("Search")}
            className="cursor-pointer hover:text-yellow-500 active:text-yellow-600"
          >
            <HiSearch />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
