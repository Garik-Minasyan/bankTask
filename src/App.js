import React, { useState } from "react";
import List from "./components/list/List";
import Fond from "./components/fond/Fond";
import Form from "./components/form/Form";
import './App.css'
import { listData } from "./utils/utils";

const App = () => {
  const [listDataState, setListDataState] = useState(listData);
  const [newDataElement, setNewDataElement] = useState({
    nfoType: '',
    description: '',
    reportPeriodTypeId: '',
  });

  const handleInputValue = (key, ev) => {
    setNewDataElement({
      ...newDataElement,
      [key]: ev.target.value,
    });
  };
  const addNewEelement = () => {
    if (newDataElement.nfoType && newDataElement.description && newDataElement.reportPeriodTypeId !== '') {
      if (newDataElement.reportPeriodTypeId === 'm' || newDataElement.reportPeriodTypeId === 'y' || newDataElement.reportPeriodTypeId === 'r' || newDataElement.reportPeriodTypeId === 'q') {
        setListDataState([...listDataState, newDataElement]);
        setNewDataElement({
          nfoType: '',
          description: '',
          reportPeriodTypeId: '',
        });
      }
    }
  };

  return (
    <div className="app">
      <Form newDataElement={newDataElement} handleInputValue={handleInputValue} addNewEelement={addNewEelement} />
      <List listData={listDataState} newDataElement={newDataElement} />
      <Fond />
    </div>
  );
}

export default App;
