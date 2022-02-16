import React from "react";
import './Table.css'

const Table = ({ tableData }) => {
  return (
    <div className="table">
      <ul>
        {tableData.map(({ nfoType }, index) =>
          <ol className="tableList" key={index}>
            {nfoType}
          </ol>
        )}
      </ul>
    </div>
  );
};

export default Table;