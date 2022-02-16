import React from "react";
import './List.css';
import RightPanel from "./rightPanel/RightPanel";
import LeftPanel from "./leftPanel/LeftPanel";

const List = ({ newDataElementData, listData }) => {
  return (
    <div className="listContent">
      <div className="list">
        <LeftPanel />
        <RightPanel listData={listData} newDataElementData={newDataElementData} />
      </div>
    </div>
  );
};

export default List;