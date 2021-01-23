import React from "react";
import { MdFavorite } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Footer() {
  const notify = (name) => {
    return toast(`You clicked ${name}`);
  };
  return (
    <div className="flex items-center justify-between px-4 pt-3 pb-2 text-gray-300 bg-blue-900">
      <div
        onClick={() => notify("Favorites")}
        className="flex flex-col items-center justify-between cursor-pointer hover:text-yellow-500 active:text-yellow-600"
      >
        <div className="text-2xl">
          <MdFavorite />
        </div>
        <div className="">Favorites</div>
      </div>
      <div
        onClick={() => notify("Teams")}
        className="flex flex-col items-center cursor-pointer hover:text-yellow-500 active:text-yellow-600"
      >
        <div className="text-2xl">
          <HiUserGroup />
        </div>
        <div className="">Teams</div>
      </div>
      <div
        onClick={() => notify("Approvals")}
        className="flex flex-col items-center cursor-pointer hover:text-yellow-500 active:text-yellow-600"
      >
        <div className="text-2xl">
          <BsExclamationCircleFill />
        </div>
        <div className="">Approvals</div>
      </div>
      <div
        onClick={() => notify("Notifications")}
        className="flex flex-col items-center cursor-pointer hover:text-yellow-500 active:text-yellow-600"
      >
        <div className="text-2xl">
          <MdNotifications />
        </div>
        <div className="">Notifications</div>
      </div>
    </div>
  );
}

export default Footer;
