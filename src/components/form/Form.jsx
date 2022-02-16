import React from "react";
import './Form.css';
export const Form = ({ handleInputValue, addNewEelement, newDataElement: { nfoType, description, reportPeriodTypeId } }) => {
  return (
    <div className="bigBlock">
      <form onSubmit={ev => ev.preventDefault()} className="form">
        <input
          onChange={(ev) => handleInputValue("nfoType", ev)}
          type="text" placeholder="nfoType"
          name="nfoType"
          value={nfoType}
        />
        <input
          onChange={(ev) => handleInputValue("description", ev)}
          type="text"
          placeholder="description"
          name="description"
          value={description}
        />
        <input
          onChange={(ev) => handleInputValue("reportPeriodTypeId", ev)}
          required pattern="m|q|r|y"
          maxLength={1} type="text"
          placeholder="Ints will be m or q or y or r"
          name="reportPeriodTypeId"
          value={reportPeriodTypeId}
        />
        <button onClick={(e) => addNewEelement(e)} className="addButton">add</button>
      </form>
    </div>
  );
};

export default Form;