import AppBody from "../components/appBody";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import AppBody from "./components/appBody";
import { FaCalendarDay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Home() {
  const [sidebar, setSidebar] = React.useState(false);
  const notify = (name) => {
    return toast(`You clicked ${name}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <AppBody sidebar={sidebar} />
      <Footer />
      <div className="">
        <div
          onClick={() => notify("Holiday Calendar")}
          className="absolute p-2.5 text-lg text-white bg-cyan-600 rounded-full bottom-40 right-15 active:text-yellow-600 hover:text-yellow-500 cursor-pointer shadow-xl"
        >
          <FaCalendarDay />
        </div>
        <div
          onClick={() => notify("Apply Leave")}
          className="absolute p-3 text-2xl text-white bg-blue-900 rounded-full shadow-xl cursor-pointer bottom-22 right-13 active:text-yellow-600 hover:text-yellow-500"
        >
          <IoMdAdd />
        </div>
      </div>
    </div>
  );
}

export default Home;
