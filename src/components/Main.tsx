import React, { useState } from "react";

import "../styles/Main.css";
import "../styles/ToDoList.css";
import "../styles/ToDo.css";

import NewSection from "./NewSection";

function Main() {
  const [name, setName] = useState<string>("");
  const [sectionList, setSectionList] = useState<any[]>([]);

  const handleInputUSer = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handleOnClickAddUser = () => {
    if (name !== "") {
      setSectionList([...sectionList, <NewSection name={name} />]);
      setName("");
    }
  };

  return (
    <div className="app">
      <h1>Segregation of Duties</h1>
      <div className="userArea">
        <input
          className="addUser"
          placeholder="Enter a new user"
          value={name}
          onChange={handleInputUSer}
        />
        <button className="addUser" onClick={handleOnClickAddUser}>
          Add a user
        </button>
      </div>
      <div className="main">{sectionList}</div>
    </div>
  );
}

export default Main;
