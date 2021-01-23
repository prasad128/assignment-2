import React from "react";
import { useState } from "react";
import TabNav from "./tabNav";
import Content from "./content";
import { FaCalendarDay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function TabViews() {
  const [activeTab, setActiveTab] = useState("leaves");
  const notify = (name) => {
    return toast(`You clicked ${name}`, {
      position: "top-center",
    });
  };
  return (
    <div className="mt-2.5 relative h-full overflow-hidden bg-white shadow-2xl flex flex-col">
      <TabNav setActiveTab={setActiveTab} activeTab={activeTab} />
      <Content activeTab={activeTab} />
      <div className="absolute flex flex-col items-center space-y-7 bottom-6 right-13">
        <div
          onClick={() => notify("Holiday Calendar")}
          className="p-3 text-xl text-white rounded-full shadow-xl cursor-pointer bg-cyan-500 active:text-yellow-600 hover:text-yellow-500"
        >
          <FaCalendarDay />
        </div>
        <div
          onClick={() => notify("Apply Leave")}
          className="p-3.5 text-3xl text-white bg-blue-900 rounded-full shadow-xl cursor-pointer active:text-yellow-600 hover:text-yellow-500"
        >
          <IoMdAdd />
        </div>
      </div>
    </div>
  );
}

export default TabViews;
