import React from "react";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function AttendanceDataList({
  data,
  confirmModal,
  setConfirmModal,
  handleConfirm,
}) {
  const [num, setNum] = React.useState(null);
  const handleConfirmModal = (id) => {
    setConfirmModal(true);
    setNum(id);
  };

  return (
    <div className="py-6 pl-4 pr-2 space-y-7">
      {data &&
        data.map((dt) => {
          return (
            <div
              key={dt.id}
              className={`flex items-center border-l-8 text-gray-500 ${
                dt.attendanceType === "Absent"
                  ? " border-red-600"
                  : "border-green-600"
              } rounded-lg`}
            >
              <div className="flex flex-col items-center px-4 py-2 bg-gray-200">
                <div className="text-xl font-semibold leading-tight">
                  {dt.attendanceDay.day}
                </div>
                <div className="text-xs leading-tight tracking-wide">
                  {dt.attendanceDay.month}
                </div>
              </div>
              <div className="flex-grow px-4 font-semibold leading-tight tracking-wide text-gray-500">
                <div className="text-sm font-semibold text-gray-500">
                  {dt.weekDay}
                </div>
                <div className="text-xs text-yellow-400">
                  {dt.attendanceReason}
                </div>
                <div className="text-xs">{dt.attendanceType}</div>
              </div>
              {dt.attendanceType === "Absent" ? (
                <div
                  onClick={() => handleConfirmModal(dt.id)}
                  className="p-1 text-lg text-green-500 bg-green-100 border rounded-full active:text-green-600 hover:border-green-600"
                >
                  <IoMdAdd />
                </div>
              ) : null}
            </div>
          );
        })}
      {confirmModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black opacity-75">
          <div className="px-4 py-2 text-black bg-white border border-black rounded">
            <div className="font-semibold">You clicked on Regularize</div>
            <div className="mt-4 space-x-3">
              <button
                className="z-50 px-2 py-1 border rounded hover:bg-green-500 active:bg-green-700 hover:text-white"
                onClick={() => handleConfirm(num)}
              >
                Ok
              </button>
              <button
                className="z-50 px-2 py-1 border rounded hover:bg-red-500 active:bg-red-700 hover:text-white"
                onClick={() => setConfirmModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendanceDataList;
