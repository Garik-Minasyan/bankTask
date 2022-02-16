import React from "react";
import './LeftPanel.css';

const LeftPanel = () => {
  return (
    <div className="menuPanel">
      <ul>
        <li>Таксономия</li>
        <li>Период</li>
        <li>Тип НФО</li>
        <li>Отчетность</li>
        <div className="reporting" />
      </ul>
    </div>
  );
};

export default LeftPanel;