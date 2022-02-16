import React, { useState } from "react";
import Table from "../../table/Table";
import { periodData } from "../../../utils/utils";
import './RightPanel.css';

const RightPanel = ({ listData }) => {
  const [value, setValue] = useState('');
  const [color, setColor] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleChackOption = (ev) => {
    setValue(ev.target.value)
    if (periodData.map(item => item.periodId === value)) {
      setColor(!color)
    }
  };

  const handleChosePeriod = (ev) => {
    const newDate = listData.filter(elem => elem.reportPeriodTypeId === ev);
    setValue(ev)
    if (tableData !== []) {
      setTableData([])
    }
    setTableData(newDate);
  }

  return (
    <div className="listPanel">
      <div className="reportingItem">
        <button>1.3.1</button>
        <button>3.1</button>
        <button>3.2</button>
        <button>4.1</button>
        <button>4.2</button>
        <button>4.3</button>
      </div>
      <div className="payItem">
        {periodData.map(({ periodId, name }) =>
          <button
            className={periodId === value ? 'red' : ''}
            key={name}
            onClick={() => handleChosePeriod(periodId)}
          >{name}</button>
        )}
      </div>
      <div className="select">
        <select onChange={ev => handleChackOption(ev)}>
          {listData.map(({ reportPeriodTypeId, nfoType }, index) =>
            <option
              key={index}
              value={reportPeriodTypeId}>
              {nfoType}
            </option>
          )};
        </select>
      </div>
      <Table tableData={tableData} />
    </div>
  );
};

export default RightPanel;