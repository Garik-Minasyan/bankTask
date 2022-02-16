import React from "react";
import LeftPanelFond from "./leftPanel/LeftPanelFond";
import RightPanelFond from "./rightPanel/RightPanelFond";
import '../list/List.css'

const Fond = () => {
  return (
    <div className="listContent">
      <div className="list">
        <LeftPanelFond />
        <RightPanelFond />
      </div>
    </div>
  );
};

export default Fond;