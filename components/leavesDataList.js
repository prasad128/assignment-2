import React from "react";
// import { MdCancel } from "react-icons/md";
// import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Modal from "./modal";

toast.configure();
// import Modal from "react-modal";

// Modal.setAppElement("#root");

function LeavesDataList({ data, modal, setModal, handleClick }) {
  const [num, setNum] = React.useState(null);
  const handleModal = (id) => {
    setModal(true);
    setNum(id);
  };
  return (
    <div className="py-6 pl-4 pr-2 space-y-7 ">
      {data &&
        data.map((dt) => {
          return (
            <div
              key={dt.id}
              className={`flex items-center border-l-8 text-gray-500 ${
                dt.leaveStatus === "In-Process"
                  ? " border-yellow-600"
                  : dt.leaveStatus === "Approved"
                  ? " border-green-600"
                  : "border-red-600"
              } rounded-lg`}
            >
              <div className="flex flex-col items-center px-4 py-2 bg-gray-200">
                <div className="text-xl font-semibold leading-tight">
                  {dt.startDate.day}
                </div>
                <div className="text-xs leading-tight tracking-wide">
                  {dt.startDate.month}
                </div>
              </div>
              <div className="flex-1 px-4 font-semibold leading-tight tracking-wide text-gray-500">
                <div className="text-sm font-semibold text-gray-500">
                  {dt.leaveType}
                </div>
                <div className="text-xs text-yellow-400">
                  <span>{dt.startDate.day}</span>{" "}
                  <span>{dt.startDate.month}</span> -{" "}
                  <span>{dt.endDate.day}</span> <span>{dt.endDate.month}</span>
                </div>
                <div className="text-xs">{dt.leaveStatus}</div>
              </div>
              {dt.leaveStatus === "In-Process" ? (
                <div
                  onClick={() => handleModal(dt.id)}
                  // onClick={() => handleClick(dt.id)}
                  className="p-1.5 text-lg text-red-500 bg-red-100 border rounded-full active:text-red-600 hover:border-red-500"
                >
                  <AiOutlineClose />
                </div>
              ) : null}
            </div>
          );
        })}
      {modal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black opacity-75">
          <div className="px-4 py-2 text-black bg-white border border-black rounded">
            <div className="font-semibold">Do you want to cancel leave?</div>
            <div className="mt-4 space-x-3">
              <button
                className="z-50 px-2 py-1 border rounded hover:bg-green-500 active:bg-green-700 hover:text-white"
                onClick={() => handleClick(num)}
              >
                Yes
              </button>
              <button
                className="z-50 px-2 py-1 border rounded hover:bg-red-500 active:bg-red-700 hover:text-white"
                onClick={() => setModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeavesDataList;
