import React, { useState } from "react";
import './RightPanelFond.css';
import { fondData } from "../../../utils/utils";

const RightPanelFond = () => {
  const [value, setValue] = useState('Ivory');

  const handleChackRadio = (ev) => {
    setValue(ev.target.name)
  }

  const handleChackOption = (ev) => {
    setValue(ev.target.value);
  }

  const hanleChoseFond = (fond) => {
    setValue(fond);
  }
  return (
    <div className="listPanelFond">
      <div className="payItemFond">
        {fondData.map(item =>
          <button
            onClick={() => hanleChoseFond(item)}
            className={item === value ? 'red' : ''}
            key={item}>
            {item}
          </button>
        )}
      </div>
      <div className="selectFond">
        <select value={value} onChange={(ev) => handleChackOption(ev)}>
          {
            fondData.map((item, index) =>
              <option
                value={item}
                key={index}>
                {item}</option>
            )}
        </select>
      </div>
      <div className="radioFond">
        {
          fondData.map((item) =>
            <div key={item}>
              <input
                onChange={(ev) => handleChackRadio(ev, item)}
                type="radio"
                name={item}
                checked={item === value}
                value={value}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default RightPanelFond;