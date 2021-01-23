import React from "react";

function TabNav({ setActiveTab, activeTab }) {
  const activeLeaves =
    activeTab === "leaves"
      ? "text-yellow-500 border-b-4 border-yellow-500"
      : "text-gray-500 border-b-2";
  const activeAttendance =
    activeTab === "attendance"
      ? "text-yellow-500 border-b-4 border-yellow-500"
      : "text-gray-500 border-b-2";
  return (
    <div className="flex px-2 tracking-wide uppercase">
      <div
        onClick={() => setActiveTab("leaves")}
        className={`w-full pb-3.5 pt-4 text-base2 tracking-wider font-semibold hover:text-gray-700 cursor-pointer text-center ${activeLeaves}`}
      >
        Leaves
      </div>
      <div
        onClick={() => setActiveTab("attendance")}
        className={`w-full pb-3.5 pt-4 text-base2 tracking-wider font-semibold text-center hover:text-gray-700 cursor-pointer ${activeAttendance} `}
      >
        Attendance
      </div>
    </div>
  );
}

export default TabNav;
