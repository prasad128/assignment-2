import AppBody from "../components/appBody";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import AppBody from "./components/appBody";

import React from "react";

function Home() {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto bg-gray-300">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <AppBody sidebar={sidebar} />
      <Footer />
    </div>
  );
}

export default Home;
