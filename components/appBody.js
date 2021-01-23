import React from "react";
import Carousel from "./carousel";
import TabViews from "./tabViews";

function AppBody({ sidebar }) {
  const animate = sidebar
    ? "transform duration-700 translate-x-0 origin-left ease-out"
    : "transform duration-700 -translate-x-full origin-left ease-out";
  return (
    <div className="relative flex flex-col h-full p-2 overflow-hidden bg-gray-300 ">
      <Carousel />
      <TabViews />

      <div
        className={`absolute  flex flex-col flex-wrap content-center ${animate}  w-2/5 h-full px-4 py-6 space-y-6 text-lg text-gray-900 bg-gray-300`}
      >
        <div className="">Home</div>
        <div className="">Settings</div>
        <div className="">Logout</div>
        {/* <div className="">Tab 3</div> */}
      </div>
    </div>
  );
}

export default AppBody;
