import React from "react";
import AttendanceDataList from "./attendanceDataList";
import LeavesDataList from "./leavesDataList";
import { attendanceData } from "../static-data";

import { leaveData } from "../static-data";
import { useImmer } from "use-immer";

function Content({ activeTab }) {
  const [data, setData] = useImmer(leaveData);
  const [modal, setModal] = React.useState(false);
  const [confirmModal, setConfirmModal] = React.useState(false);

  const [aData, setAdata] = useImmer(attendanceData);

  const handleClick = (id) => {
    console.log(id);
    setData((draft) => {
      // draft.filter((dt) => dt.id !== id);
      const index = draft.findIndex((dt) => dt.id === id);
      if (index !== -1) draft.splice(index, 1);
    });
    setModal(false);
  };

  const handleConfirm = (id) => {
    console.log("confirm -", id);
    setAdata((draft) => {
      const index = draft.findIndex((dt) => dt.id === id);
      if (index !== -1) draft[index].attendanceType = "Go";
    });
    setConfirmModal(false);
  };

  return (
    <div className="h-full overflow-auto">
      {activeTab === "leaves" ? (
        <LeavesDataList
          data={data}
          handleClick={handleClick}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <AttendanceDataList
          data={aData}
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default Content;
