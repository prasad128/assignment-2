import React from "react";
import { useState } from "react";
import TabNav from "./tabNav";
import Content from "./content";

function TabViews() {
  const [activeTab, setActiveTab] = useState("leaves");
  return (
    <div className="mt-2.5 h-full overflow-hidden bg-white shadow-2xl flex flex-col">
      <TabNav setActiveTab={setActiveTab} activeTab={activeTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default TabViews;
